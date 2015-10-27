---
layout: default
title: Customweb PayUnityCw integration
description: Firecheckout integration with Customweb PayUnityCw
keywords: Customweb_PayUnityCw
category: Firecheckout
---

# Customweb PayUnityCw

Open `js/customweb/payunitycw/checkout.js` and find the next lines:

```javascript
if (typeof Review != 'undefined') {
    checkout.accordion.openSection = checkout.accordion.openSection.wrap(this.opcGotoSection.bind(this));
    Review.prototype.save = Review.prototype.save.wrap(this.beforePlaceOrder.bind(this));
    Payment.prototype.save = Payment.prototype.save.wrap(this.beforePaymentSave.bind(this));
    if (typeof shippingMethod != 'undefined') {
        shippingMethod.onSave = this.loadPaymentForm.bindAsEventListener(this);
        shippingMethod.saveUrl = this.saveShippingUrl;
    }
} else
```

replace then with:

```javascript
if (typeof FireCheckout !== 'undefined') {
    checkout.save = checkout.save.wrap(function(original, urlSuffix, forceSave) {
        if (this.isAuthorization('hidden') || this.isAuthorization('server') || this.isAuthorization('ajax')) {
            try {
                this.savePaymentInfoInBrowser();
            } catch (e) {
                return;
            }
        }
        original(urlSuffix, forceSave);
    }.bind(this));
    checkout.setResponse = checkout.setResponse.wrap(function(original, response) {
        try {
            json = response.responseText.evalJSON();
        } catch (err) {
            alert('An error has occured during request processing. Try again please');
            checkout.setLoadWaiting(false);
            $('review-please-wait').hide();
            return false;
        }

        if (json.order_created) {
            if (this.isAuthorization('hidden') || this.isAuthorization('server') || this.isAuthorization('ajax')) {

                this.requestHiddenFields(response, original.bind(checkout, response));
                return;
            }
        }
        original(response);
    }.bind(this));
} else if (typeof Review != 'undefined') {
    checkout.accordion.openSection = checkout.accordion.openSection.wrap(this.opcGotoSection.bind(this));
    Review.prototype.save = Review.prototype.save.wrap(this.beforePlaceOrder.bind(this));
    Payment.prototype.save = Payment.prototype.save.wrap(this.beforePaymentSave.bind(this));
    if (typeof shippingMethod != 'undefined') {
        shippingMethod.onSave = this.loadPaymentForm.bindAsEventListener(this);
        shippingMethod.saveUrl = this.saveShippingUrl;
    }
} else
```
