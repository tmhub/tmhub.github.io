---
layout: default
title: Mirasvit Rewards integration
description: Firecheckout integration with Mirasvit Rewards
keywords: "Mirasvit_Rewards, zero subtotal, zero total"
category: Firecheckout
---

# Mirasvit Rewards

When using Mirasvit_Rewards module, review sections starts showing zero totals.
To fix this issue, apply the changes below.

 1. Open `app/code/local/Mirasvit/Rewards/Model/Observer/Order.php` and find the
 following line:

    ```php
    //this does not calculate quote correctly
    if (strpos($uri, '/checkout/cart/add/') !== false) {
        return;
    }
    ```

    Replace it with:

    ```php
    //this does not calculate quote correctly
    if (strpos($uri, '/checkout/cart/add/') !== false) {
        return;
    }

    // this does not calculate quote correctly with firecheckout
    // route name is used to allow customers to change firecheckout url
    $routeName = $observer->getControllerAction()->getRequest()->getRouteName();
    if ('firecheckout' === $routeName) {
        return;
    }
    ```

 2. Save the file, disable compilation mode if needed.
