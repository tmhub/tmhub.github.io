---
layout: default
title: TIG_PostNL integration
description: Firecheckout integration with TIG PostNL
keywords: TIG_PostNL
category: Firecheckout
---

# TIG_PostNL

 1. Open `app/code/community/TIG/PostNL/Model/DeliveryOptions/Observer/ShippingMethodAvailable.php`
 and find the following code:

    ```php
    if (Mage::app()->getRequest()->getModuleName() == 'onestepcheckout') {
        $template = 'TIG/PostNL/delivery_options/onestepcheckout/available.phtml';

        if (!$block->getChild('postnl.osc.delivery.options')) {
            $block = $this->_addDeliveryOptionBlocks($block);
        }
    }
    ```

    replace it with:

    ```php
    if (Mage::app()->getRequest()->getModuleName() == 'onestepcheckout') {
        $template = 'TIG/PostNL/delivery_options/onestepcheckout/available.phtml';

        if (!$block->getChild('postnl.osc.delivery.options')) {
            $block = $this->_addDeliveryOptionBlocks($block);
        }
    } else if (Mage::app()->getRequest()->getModuleName() == 'firecheckout') {
        $template = 'tm/firecheckout/checkout/shipping_method/available.phtml';
    }
    ```

 2. Open `skin/frontend/base/default/js/TIG/PostNL/postcodecheck.js` and find
 the following line:

    ```javascript
    document.fire('postnl:postcodeCheckSuccess');
    ```

    replace it with:

    ```javascript
    document.fire('postnl:postcodeCheckSuccess', {
        addressType: addressType
    });
    ```

 3. Open `app/design/frontend/base/default/template/TIG/PostNL/payment/checkout/form/cod.phtml`
 and find the following lines:

    ```javascript
    payment.init = function () {
    ...
    }
    ```

    Wrap the method into `if ('undefined' === typeof FireCheckout) {`:

    ```javascript
    if ('undefined' === typeof FireCheckout) {
        payment.init = function () {
        ...
        }
    }
    ```

    Find the following code:

    ```javascript
    if (postnlCodPaymentMethod && typeof deliveryOptions) {
    ```

    Replace it with:

    ```javascript
    if ('undefined' !== typeof postnlCodPaymentMethod && 'undefined' !== typeof deliveryOptions) {
    ```

    Find the following code:

    ```javascript
    if (deliveryOptions && deliveryOptions.options.isOsc) {
    ```

    Replace it with:

    ```javascript
    if ('undefined' !== typeof deliveryOptions && deliveryOptions.options.isOsc) {
    ```

 4. Open `app/design/frontend/base/default/template/TIG/PostNL/delivery_options/addphonenumber.phtml`
 and find the following line:

    ```javascript
    window.deliveryOptions.saveOscOptions();
    ```

    Replace it with:

    ```javascript
    window.deliveryOptions.saveSelectedOption();
    // window.deliveryOptions.saveOscOptions();
    ```

 5. Save the files and clear the cache.
