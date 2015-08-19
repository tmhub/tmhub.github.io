---
layout: default
title: Webshopapps_Wsavalidation integration
permalink: /firecheckout/supported-modules/webshopapps-wsavalidation/
description: Firecheckout integration with Webshopapps Wsavalidation
keywords: Webshopapps_Wsavalidation, validation, desttype
category: Firecheckout
---

# Webshopapps Wsavalidation

 1. Open `app/code/community/Webshopapps/Wsavalidation/Model/Observer.php`
 and find the following lines:

    ```php
    case 'checkout_onepage_saveShipping':
        $this->_saveShippingQuote($observer);
        break;
    ```

    Replace them with:

    ```php
    case 'checkout_onepage_saveShipping':
        $this->_saveShippingQuote($observer);
        break;
    case 'firecheckout_index_saveOrder':
        $this->_validateFirecheckoutAddress($observer);
        break;
    ```

    You should also add the following method to class:

    ```php
    protected function _validateFirecheckoutAddress($observer)
    {
        // validate billing address
        $this->_saveBillingQuote($observer);
        $this->_saveBillingQuoteAfter($observer);

        $controller = $observer->getControllerAction();
        if ($controller->getResponse()->getBody()) { // validatiopn window is in response
            $controller->setFlag('', Mage_Core_Controller_Varien_Action::FLAG_NO_DISPATCH, true);
        } else {
            // validate shipping address
            Mage::unregister('candidate_addresses');
            $this->_saveShippingQuote($observer);
            $this->_saveShippingQuoteAfter($observer);
            if ($controller->getResponse()->getBody()) { // validatiopn window is in response
                $controller->setFlag('', Mage_Core_Controller_Varien_Action::FLAG_NO_DISPATCH, true);
            }
        }
    }
    ```

 2. Open `/app/design/frontend/base/default/template/webshopapps/wsavalidation/checkout/onepage/choose_billing.phtml`
 and find the following lines **in two places** (~120-122) and (~133-135):

    ```javascript
    //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
    billing.save();
    $j("#billing-continue").trigger("click");
    ```

    Replace them with:

    ```javascript
    if (typeof FireCheckout !== 'undefined') {
        checkout.save();
    } else {
        //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
        billing.save();
        $j("#billing-continue").trigger("click");
    }
    ```
 3. Open `/app/design/frontend/base/default/template/webshopapps/wsavalidation/checkout/onepage/choose_shipping.phtml`
 and find the following lines **in two places** (~133-135) and (~147-149):

    ```javascript
    //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
    shipping.save();
    $j("#shipping-continue").trigger("click");
    ```

    Replace them with:

    ```javascript
    if (typeof FireCheckout !== 'undefined') {
        checkout.save();
    } else {
        //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
        shipping.save();
        $j("#shipping-continue").trigger("click");
    }
    ```

Disable compilation mode and refresh the cache.
