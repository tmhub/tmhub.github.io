---
layout: default
title: Ayasoftware Simple Product Pricing integration
permalink: /firecheckout/supported-modules/ayasoftware-simpleproductpricing/
description: Firecheckout integration with Ayasoftware SimpleProductPricing
keywords: Ayasoftware_SimpleProductPricing
category: Firecheckout
---

# Ayasoftware SimpleProductPricing

 1. Open `/app/code/local/Ayasoftware/SimpleProductPricing/Catalog/Model/Product/Type/Configurable/Price.php
` file and find the following line:

    ```php
    if ($this->strContains($currentUrl, "onestepcheckout/") || $this->strContains($currentUrl, "checkout/cart/") || $this->strContains($currentUrl, "checkout/onepage/") || $this->strContains($currentUrl, "paypal/express/") || $this->strContains($currentUrl, "checkout/multishipping/")  || $this->strContains($currentUrl, "authorizenet/directpost_payment")  ) {
    ```

 2. Replace it with:

    ```php
    if ($this->strContains($currentUrl, "firecheckout/") || $this->strContains($currentUrl, "onestepcheckout/") || $this->strContains($currentUrl, "checkout/cart/") || $this->strContains($currentUrl, "checkout/onepage/") || $this->strContains($currentUrl, "paypal/express/") || $this->strContains($currentUrl, "checkout/multishipping/")  || $this->strContains($currentUrl, "authorizenet/directpost_payment")  ) {
    ```
 and save file.

 3. Disable compilation mode and clear Magento cache.
