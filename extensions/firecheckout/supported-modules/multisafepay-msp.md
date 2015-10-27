---
layout: default
title: MultiSafePay_Msp integration
description: Firecheckout integration with MultiSafePay Msp
keywords: "MultiSafePay_Msp, safepay"
category: Firecheckout
---

# MultiSafePay Msp

 1. Open `app/code/community/MultiSafepay/Msp/controllers/StandardController.php`
 and find the following line:

    ```php
    $this->_redirect("checkout?utm_nooverride=1", array("_secure" => true));
    ```

    Replace it with:

    ```php
    $url = Mage::helper('checkout/url')->getCheckoutUrl();
    $this->_redirectUrl($url . "?utm_nooverride=1");
    ```

 2. Open `app/code/community/MultiSafepay/Msp/controllers/CheckoutController.php`
 and find the following line:

    ```php
    $this->_redirect("checkout", array("_secure" => true));
    ```

    Replace it with:

    ```php
    $this->_redirectUrl(Mage::helper('checkout/url')->getCheckoutUrl());
    ```

 3. Save the files, disable compilation, clear cache.
