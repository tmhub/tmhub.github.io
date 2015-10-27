---
layout: default
title: Billmate integration
description: Firecheckout integration with Billmate
keywords: Billmate
category: Firecheckout
---

# Billmate

Every payment module from Billmate should be modified.

 1. Open Billmate payment module files:

    ```
    app/code/community/Billmate/Bankpay/Model/Billmatebankpay.php
    app/code/community/Billmate/BillmateInvoice/Model/Billmateinvoice.php
    app/code/community/Billmate/Cardpay/Model/Billmatecardpay.php
    app/code/community/Billmate/PartPayment/Model/Partpayment.php
    ```

 2. Find the following lines in each of the file:

    ```php
    $data = $quote->getTotals();
    $total = $data['subtotal']->getValue();
    ```

 3. Replace them with:

    ```php
    // $data = $quote->getTotals();
    // $total = $data['subtotal']->getValue();
    $total = $quote->getSubtotal();
    ```

 4. Save the files and clear the cache.
