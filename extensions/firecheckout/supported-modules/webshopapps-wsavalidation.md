---
layout: default
title: Webshopapps_Wsavalidation integration
description: Firecheckout integration with Webshopapps Wsavalidation
keywords: "Webshopapps_Wsavalidation, validation, desttype"
category: Firecheckout
---

# Webshopapps Wsavalidation

 1. Open `app/code/community/Webshopapps/Wsavalidation/Model/Observer.php`,
    find `hookToControllerActionPreDispatch` method and add the following lines:

    ```php
    case 'firecheckout_index_saveOrder':
        $this->_validateFirecheckoutAddress($observer);
        break;
    ```

    You should also add the following method to class:

    ```php
    protected function _validateFirecheckoutAddress($observer)
    {
        $paymentData = $observer->getControllerAction()->getRequest()->getPost('payment', array());
        Mage::getSingleton('firecheckout/type_standard')
            ->applyPaymentMethod(isset($paymentData['method']) ? $paymentData['method'] : null);

        // validate billing address
        //$this->_saveBillingQuote($observer);
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
            //$this->_saveShippingQuote($observer);
            $this->_saveShippingQuoteAfter($observer);
            if ($controller->getResponse()->getBody()) { // validatiopn window is in response
                $controller->setFlag('', Mage_Core_Controller_Varien_Action::FLAG_NO_DISPATCH, true);
            }
        }
    }
    ```

 2. Open `/app/design/frontend/base/default/template/webshopapps/addressvalidation/checkout/onepage/choose_billing.phtml`
    and find the following lines:

    ```js
    "Use The Address I've Entered": function() {
        $("billing:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
    },
    "Use Validated Address": function() {
        if(candidateSwitcherBilling()) {
            if($("billing-address-select")) {
                changeSelectByValue('billing-address-select','',true);
            }
            $j( this ).dialog( "close" );
        }
    }
    ```

    Replace them with:

    ```js
    "Use The Address I've Entered": function() {
        $("billing:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
        if (typeof FireCheckout !== 'undefined') {
            checkout.save();
        }
    },
    "Use Validated Address": function() {
        if(candidateSwitcherBilling()) {
            if($("billing-address-select")) {
                changeSelectByValue('billing-address-select','',true);
            }
            $j( this ).dialog( "close" );
            if (typeof FireCheckout !== 'undefined') {
                checkout.save();
            }
        }
    }
    ```

    Find the following lines:

    ```js
    "Edit Address": function() {
        $("billing:address_valid").value = not_validated;
        $j( this ).dialog( "close" );
    },
    "Use Address I've Entered": function() {
        $("billing:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
    }
    ```

    Replace them with:

    ```js
    "Edit Address": function() {
        $("billing:address_valid").value = not_validated;
        $j( this ).dialog( "close" );
    },
    "Use Address I've Entered": function() {
        $("billing:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
        if (typeof FireCheckout !== 'undefined') {
            checkout.save();
        }
    }
    ```

 3. Open `/app/design/frontend/base/default/template/webshopapps/addressvalidation/checkout/onepage/choose_shipping.phtml`
 and find the following lines:

    ```js
    "Use The Address I've Entered": function() {
        $("shipping:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
    },
    "Use Validated Address": function() {
        if(candidateSwitcherShipping()) {
            if($("shipping-address-select")) {
                changeSelectByValueShip('shipping-address-select','',true);
            }
            $j( this ).dialog( "close" );
        }
    }
    ```

    Replace them with:

    ```js
    "Use The Address I've Entered": function() {
        $("shipping:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
        if (typeof FireCheckout !== 'undefined') {
            checkout.save();
        }
    },
    "Use Validated Address": function() {
        if(candidateSwitcherShipping()) {
            if($("shipping-address-select")) {
                changeSelectByValueShip('shipping-address-select','',true);
            }
            $j( this ).dialog( "close" );
            if (typeof FireCheckout !== 'undefined') {
                checkout.save();
            }
        }
    }
    ```

    Find the following lines:

    ```js
    "Edit Address": function() {
        $("shipping:address_valid").value = not_validated;
        $j( this ).dialog( "close" );
    },
    "Use Address I've Entered": function() {
        $("shipping:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
    }
    ```

    Replace them with:

    ```js
    "Edit Address": function() {
        $("shipping:address_valid").value = not_validated;
        $j( this ).dialog( "close" );
    },
    "Use Address I've Entered": function() {
        $("shipping:address_valid").value =  '<?php echo Webshopapps_Wsavalidation_Model_Validator_Result::CUSTOMER_OVERRIDE; ?>';
        $j( this ).dialog( "close" );
        if (typeof FireCheckout !== 'undefined') {
            checkout.save();
        }
    }
    ```

Disable compilation mode and refresh the cache.
