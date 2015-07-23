---
layout: default
title: MW_Storecreditpro integration
permalink: /firecheckout/supported-modules/mw-storecreditpro.html
---

# MW_Storecreditpro

 1. Open `mw_storecreditpro/checkout/onepage/credit.phtml` and find
 the following line:

    ```javascript
    updateCheckout();
    ```

    replace it with:

    ```javascript
    if ('undefined' !== typeof updateCheckout) {
        updateCheckout();
    }
    if ('undefined' !== typeof FireCheckout) {
        checkout.update(checkout.urls.shopping_cart);
    }
    ```

 2. Open `tm/firecheckout/checkout/payment.phtml` and insert the following code:

    ```php
    <?php echo Mage::helper('core/mwstorecreditpro')->formOnepageCheckoutCredits(); ?>
    ```

    Replace the next code:

    ```javascript
    var payment = new Payment('payment-method');
    ```

    with

    ```javascript
    var payment = new Payment('checkout-payment-method-load');
    ```
