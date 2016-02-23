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

 2. Open `app/code/local/Mirasvit/Rewards/Model/Observer/Output.php` and apply
    the following patch:

    ```diff
             $html = $transport->getHtml();

    -        $pos = strpos($html, $anchor);
    -        if ($pos !== false) {
    -            $pos2 = $pos - 15;
    -            $anchor2 = '</div>';
    -            $pos2 = strpos($html, $anchor2, $pos2);
    -            if ($pos2 !== false) {
    -                $block = Mage::app()->getLayout()->createBlock('rewards/checkout_cart_usepoints')
    -                    ->setTemplate('mst_rewards/checkout/cart/usepoints_firecheckout.phtml');
    -                $anchor3 = substr($html, $pos2, $pos - $pos2 + strlen($anchor));
    -                $html = str_replace($anchor3, $block->toHtml().$anchor3, $html);
    -            }
    -        }
    +        $anchor = '<div id="payment-method" class="firecheckout-section">';
    +        $block = Mage::app()->getLayout()->createBlock('rewards/checkout_cart_usepoints')
    +            ->setTemplate('mst_rewards/checkout/cart/usepoints_firecheckout.phtml');
    +        $html = str_replace($anchor, $block->toHtml().$anchor, $html);
             $transport->setHtml($html);

             return $this;
    ```

 3. Save the file, disable compilation mode if needed.
