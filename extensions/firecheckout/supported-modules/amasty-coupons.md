---
layout: default
title: Amasty Coupons integration
description: Firecheckout integration with Amasty Coupons
keywords: Amasty_Coupons
category: Firecheckout
---

# Amasty Coupons

 1. Open `app/code/community/Amasty/Coupons/Block/Rewrite/Cart/Coupon.php`
 and find the following code:

    ```php
    protected function _toHtml()
    {
        $this->setTemplate('amcoupon/checkout/cart/coupon.phtml');
        return parent::_toHtml();
    }
    ```

 2. Replace it with:

    ```php
    protected function _toHtml()
    {
        $this->setTemplate('amcoupon/checkout/cart/coupon.phtml');
        if ('firecheckout' === $this->getRequest()->getRouteName()) {
            $this->setTemplate('tm/firecheckout/amcoupon/checkout/cart/coupon.phtml');
        }
        return parent::_toHtml();
    }
    ```

    and save the file.

 3. Disable compilation mode and clear Magento cache.
