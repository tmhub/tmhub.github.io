---
layout: default
title: Webshopapps_Wsafreightcommon integration
description: Firecheckout integration with Webshopapps Wsafreightcommon
keywords: "Webshopapps_Wsafreightcommon, freightcommon, liftgate"
category: Firecheckout
---

# Webshopapps Wsafreightcommon

1.  Open `/app/design/frontend/base/default/template/webshopapps/wsafreightcommon/checkout/onepage/shipping_method/accessorials.phtml`
    and find the following lines (~159-163):

    ```javascript
    new Ajax.Updater('checkout-shipping-method-load', url, {
            method: 'get',
            onComplete: function () {
                document.getElementById('retrieving-rates').innerHTML = "";
            },
    ```

    Replace them with:

    ```javascript
    new Ajax.Updater('checkout-shipping-method-load', url, {
            method: 'get',
            onComplete: function () {
                document.getElementById('retrieving-rates').innerHTML = "";
                if ('undefined' !== typeof FireCheckout) {
                    checkout.update(checkout.urls.shipping_method);
                    shippingMethod.addObservers();
                }
            },
    ```
2.  Open `/app/code/community/Webshopapps/Wsafreightcommon/controllers/AjaxController.php`
    and find the following lines (~105-106):

    ```php
    if(Mage::helper('wsacommon')->isModuleEnabled
        ('Idev_OneStepCheckout', 'onestepcheckout/general/rewrite_checkout_links')) {
    ```

    Replace them with:

    ```php
    if(Mage::helper('wsacommon')->isModuleEnabled
        ('Idev_OneStepCheckout', 'onestepcheckout/general/rewrite_checkout_links')
        || Mage::helper('wsacommon')->isModuleEnabled('TM_FireCheckout', 'firecheckout/general/enabled')
        ) {
    ```
