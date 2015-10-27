---
layout: default
title: Payone_Core integration
description: Firecheckout integration with Payone Core
keywords: Payone
category: Firecheckout
---

# Payone Core

 1. Open `app/code/local/TM/FireCheckout/etc/config.xml`and find the following line:

    ```xml
    <quote_address>TM_FireCheckout_Model_Quote_Address</quote_address> <!-- Fix for paypal express. Call for validate method overriden -->
    ```

    replace it with:

    ```xml
    <!-- <quote_address>TM_FireCheckout_Model_Quote_Address</quote_address> --> <!-- Fix for paypal express. Call for validate method overriden -->
    ```

 2. Open `app/code/community/Payone/Core/Model/Sales/Quote/Address.php` and replace the following line:

    ```php
    class Payone_Core_Model_Sales_Quote_Address extends Mage_Sales_Model_Quote_Address
    ```

    with:

    ```php
    class Payone_Core_Model_Sales_Quote_Address extends //Mage_Sales_Model_Quote_Address
        TM_FireCheckout_Model_Quote_Address
    ```