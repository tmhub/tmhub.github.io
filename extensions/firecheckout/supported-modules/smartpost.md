---
layout: default
title: Smartpost integration
description: Firecheckout integration with Smartpost
keywords: Smartpost
category: Firecheckout
---

## Smartpost

 1. Add the following lines to the top of the `app/design/frontend/base/default/template/tm/firecheckout/checkout/payment.phtml`:

    ```javascript
    <script type="text/javascript">
    //<![CDATA[
        var quoteBaseGrandTotal = <?php echo (float)$this->getQuoteBaseGrandTotal(); ?>;
        var checkQuoteBaseGrandTotal = quoteBaseGrandTotal;
        var lastPrice;
    //]]>
    </script>
    ```

 2. Modify `ShippingMethod.addObservers` method in `skin/frontend/base/default/js/tm/firecheckout.js`

    Find the next lines:

    ```javascript
    $$('input[name="shipping_method"]').each(function(el) {
        el.observe('click', function() {
            if (FireCheckout.prototype.ajax.total_on_shipping_method) {
                checkout.update(checkout.urls.shipping_method, {
                    'review': 1
                });
            }
    ```

    Replace them with:

    ```javascript
    $$('input[name="shipping_method"]').each(function(el) {
        el.observe('click', function() {
            /* SmartPost */
            var smartpostSelect = $('smartpost_select_point');
            if (smartpostSelect) {
                if (el.id !== 's_method_itellaSmartPost') {
                    smartpostSelect.setValue('itellaSmartPost');
                    checkout.update(checkout.urls.shipping_method, {
                        'review': 1
                    });
                } else {
                    var availableOptions = smartpostSelect.select('option');
                    if (availableOptions.length >= 2) {
                        smartpostSelect.setValue(availableOptions[1].value);
                        updatePointValue();
                        checkout.update(checkout.urls.shipping_method, {
                            'review': 1
                        });
                    }
                }
            }
            /* SmartPost */

            else if (FireCheckout.prototype.ajax.total_on_shipping_method) {
                checkout.update(checkout.urls.shipping_method, {
                    'review': 1
                });
            }
    ```

 2. Add the following code to the bottom of the `addObservers` method:

    ```javascript
    /* SmartPost */
    var smartpostSelect = $('smartpost_select_point');
    if (smartpostSelect) {
        smartpostSelect.observe('change', function() {
            updatePointValue();
            checkout.update(checkout.urls.shipping_method, {
                'review': 1
            });
        });
    }
    /* SmartPost */
    ```
