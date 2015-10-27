---
layout: default
title: MW_RewardPoints integration
description: Firecheckout integration with MW_RewardPoints
keywords: "MW_RewardPoints, reward points"
category: Firecheckout
---

# MW_RewardPoints

 1. Open `mw_rewardpoints/checkout/onepage/rewardpoints.phtml` file and find
 the following lines (~100-108):

    ```javascript
    onComplete: function(data) {
        $('checkout-payment-method-load').update(data.responseText);
        if($('mw-osc-column-container')){
            updatePaymentMethod();
            checkout.setLoadWaiting(true);
            var params = Form.serialize(this.form);
            $('review-please-wait').show();
        }
    }
    ```

 2. Replace them with:

    ```javascript
    onComplete: function(data) {
        $('checkout-payment-method-load').update(data.responseText);
        if($('mw-osc-column-container')){
            updatePaymentMethod();
            checkout.setLoadWaiting(true);
            var params = Form.serialize(this.form);
            $('review-please-wait').show();
        }
        if (typeof FireCheckout !== 'undefined') {
             checkout.update(checkout.urls.shopping_cart);
        }
    }
    ```
