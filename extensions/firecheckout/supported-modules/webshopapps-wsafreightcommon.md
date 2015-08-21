---
layout: default
title: Webshopapps_Wsafreightcommon integration
permalink: "/firecheckout/supported-modules/webshopapps-wsafreightcommon/"
description: Firecheckout integration with Webshopapps Wsafreightcommon
keywords: "Webshopapps_Wsafreightcommon, freight common"
category: Firecheckout
---

# Webshopapps_Wsafreightcommon

 1. Open `/app/design/frontend/base/default/template/webshopapps/wsafreightcommon/checkout/onepage/shipping_method/accessorials.phtml`
 and find the following lines (~159-163):

    ```javascript
    new Ajax.Updater('checkout-shipping-method-load', url, {
            method: 'get',
            onComplete: function () {
                document.getElementById('retrieving-rates').innerHTML = "";
            },
    ```

 2. Replace them with:

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
