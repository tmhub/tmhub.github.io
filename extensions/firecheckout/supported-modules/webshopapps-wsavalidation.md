---
layout: default
title: Webshopapps_Wsavalidation integration
description: Firecheckout integration with Webshopapps Wsavalidation
keywords: "Webshopapps_Wsavalidation, validation, desttype"
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
            // validate shipping address if needed
            $shipping = $controller->getRequest()->getPost('shipping');
            if (!$shipping || (isset($shipping['same_as_billing']) && $shipping['same_as_billing'])) {
                return;
            }

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
 and find the following lines (~133-135):

    ```javascript
    "Use Original Address": function() {
        $("billing:address_valid").value = 1;
        $j( this ).dialog( "close" );
        $("billing:dest_type").value = 1;

        //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
        billing.save();
        $j("#billing-continue").trigger("click");
    }
    ```

    Replace them with:

    ```javascript
    "Use Original Address": function() {
        $("billing:address_valid").value = 1;
        $j( this ).dialog( "close" );
        $("billing:dest_type").value = 1;

        if (typeof FireCheckout !== 'undefined') {
            checkout.save();
        } else {
            //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
            billing.save();
            $j("#billing-continue").trigger("click");
        }
    }
    ```

    Find the following lines:

    ```javascript
    "Continue": function() {
        if(candidateSwitcherBilling()) {
            if($("billing-address-select")) {
                changeSelectByValue('billing-address-select','',true);
            }
            $j( this ).dialog( "close" );

            //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
            billing.save();
            $j("#billing-continue").trigger("click");
        }
    },
    ```

    Replace them with:

    ```javascript
    "Continue": function() {
        if(candidateSwitcherBilling()) {
            if($("billing-address-select")) {
                changeSelectByValue('billing-address-select','',true);
            }
            $j( this ).dialog( "close" );

            //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
            if (typeof FireCheckout !== 'undefined') {
                if($("billing-address-select")) {
                    candidateSwitcherBilling(); // firecheckout resets address on changeSelectByValue
                }
                $('shipping-method').scrollTo();
            }
            billing.save();
            $j("#billing-continue").trigger("click");
        }
    },
    ```

 3. Open `/app/design/frontend/base/default/template/webshopapps/wsavalidation/checkout/onepage/choose_shipping.phtml`
 and find the following lines (~147-149):

    ```javascript
    "Use Original Address": function() {
        $("shipping:address_valid").value = 1;
        $j( this ).dialog( "close" );
        $("billing:dest_type").value = 1;
        //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
        shipping.save();
        $j("#shipping-continue").trigger("click");
    }
    ```

    Replace them with:

    ```javascript
    "Use Original Address": function() {
        $("shipping:address_valid").value = 1;
        $j( this ).dialog( "close" );
        $("billing:dest_type").value = 1;

        if (typeof FireCheckout !== 'undefined') {
            checkout.save();
        } else {
            //get_save_billing_function(url_save_billing, url_set_methods, true, true)();
            shipping.save();
            $j("#shipping-continue").trigger("click");
        }
    }
    ```

Disable compilation mode and refresh the cache.
