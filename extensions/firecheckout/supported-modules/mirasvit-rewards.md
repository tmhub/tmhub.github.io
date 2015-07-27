---
layout: default
title: Mirasvit Rewards integration
permalink: /firecheckout/supported-modules/mirasvit-rewards.html
description: Firecheckout integration with Mirasvit Rewards
keywords: Mirasvit_Rewards
category: Firecheckout
---

# Mirasvit Rewards

 1. Open `app/code/local/Mirasvit/Rewards/Model/Observer/Order.php` and find the
 following line:

    ```php
    if ($uri == '/gomage_checkout/onepage/save/') {
    ```

    Replace it with:

    ```php
    if ($uri == '/gomage_checkout/onepage/save/'
        || $observer->getControllerAction()->getRequest()->getModuleName() == 'firecheckout') {
    ```

 2. Save the file, disable compilation, clear cache.
