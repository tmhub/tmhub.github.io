---
layout: default
title: OnePica AvaTax integration
description: Firecheckout integration with OnePica AvaTax
keywords: "OnePica_AvaTax"
category: Firecheckout
---

# OnePica AvaTax

1.  Open `app/code/community/OnePica/AvaTax/etc/config.xml` and find the
    following code:

    ```xml
    <sales_quote_collect_totals_before>
        <observers>
            <avatax>
                <type>singleton</type>
                <class>avatax/observer</class>
                <method>salesQuoteCollectTotalsBefore</method>
            </avatax>
        </observers>
    </sales_quote_collect_totals_before>
    ```

    Replace it with:

    ```xml
    <sales_quote_address_collect_totals_before>
        <observers>
            <avatax>
                <type>singleton</type>
                <class>avatax/observer</class>
                <method>salesQuoteCollectTotalsBefore</method>
            </avatax>
        </observers>
    </sales_quote_address_collect_totals_before>
    <!-- <sales_quote_collect_totals_before>
        <observers>
            <avatax>
                <type>singleton</type>
                <class>avatax/observer</class>
                <method>salesQuoteCollectTotalsBefore</method>
            </avatax>
        </observers>
    </sales_quote_collect_totals_before> -->
    ```

2.  Open `app/code/community/OnePica/AvaTax/Model/Observer.php` and find the
    following code:

    ```php
    $storeId = $observer->getEvent()->getQuote()->getStoreId();
    if (Mage::getStoreConfig('tax/avatax/action', $storeId) != OnePica_AvaTax_Model_Config::ACTION_DISABLE) {
    ```

    Replace it with:

    ```php
    // $storeId = $observer->getEvent()->getQuote()->getStoreId();
    $storeId = $observer->getEvent()->getQuoteAddress()->getQuote()->getStoreId();
    if (Mage::getStoreConfig('tax/avatax/action', $storeId) != OnePica_AvaTax_Model_Config::ACTION_DISABLE) {
    ```

Save the changes, disable compilation mode.
