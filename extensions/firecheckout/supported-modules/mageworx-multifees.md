---
layout: default
title: MageWorx MultiFees integration
description: Firecheckout integration with MageWorx MultiFees
keywords: MageWorx_MultiFees
category: Firecheckout
---

# MageWorx MultiFees

 1. Open `app/code/local/MageWorx/MultiFees/etc/config.xml` and find the
 following lines:

    ```xml
    <controller_action_predispatch_checkout_onepage_savePayment>
        <observers>
            <multifees>
                <type>singleton</type>
                <class>MageWorx_MultiFees_Model_Observer</class>
                <method>getCheckoutPaymentMethod</method>
            </multifees>
        </observers>
    </controller_action_predispatch_checkout_onepage_savePayment>
    ```

    Replace them with:

    ```xml
    <controller_action_predispatch_checkout_onepage_savePayment>
        <observers>
            <multifees>
                <type>singleton</type>
                <class>MageWorx_MultiFees_Model_Observer</class>
                <method>getCheckoutPaymentMethod</method>
            </multifees>
        </observers>
    </controller_action_predispatch_checkout_onepage_savePayment>
    <controller_action_predispatch_firecheckout_index_saveShippingMethod>
        <observers>
            <multifees>
                <type>singleton</type>
                <class>MageWorx_MultiFees_Model_Observer</class>
                <method>getCheckoutShippingMethod</method>
            </multifees>
        </observers>
    </controller_action_predispatch_firecheckout_index_saveShippingMethod>
    <controller_action_predispatch_firecheckout_index_savePayment>
        <observers>
            <multifees>
                <type>singleton</type>
                <class>MageWorx_MultiFees_Model_Observer</class>
                <method>getCheckoutPaymentMethod</method>
            </multifees>
        </observers>
    </controller_action_predispatch_firecheckout_index_savePayment>
    ```

 2. Open `app/code/local/MageWorx/MultiFees/Model/Observer.php` and find the
 following line:

    ```php
    $method = $observer->getRequest()->getParam('shipping_method');
    ```

    Replace it with:

    ```php
    $method = Mage::app()->getRequest()->getParam('shipping_method');
    ```

 3. Save the files and clear cache.
