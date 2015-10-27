---
layout: default
title: AW Giftcard integration
description: Firecheckout integration with AheadWorks GiftCard
keywords: AW_Giftcard
category: Firecheckout
---

# AW Giftcard

Open `app/code/local/AW/Giftcard/Block/Frontend/Checkout/Cart/Giftcard.php`
and apply the following patch:

```diff
@@ -28,6 +28,9 @@
{
    public function getTemplate()
    {
+       if ('firecheckout' === $this->getRequest()->getModuleName()) {
+           return 'tm/firecheckout/aw_giftcard/cart_giftcard.phtml';
+       }
        return 'aw_giftcard/checkout/cart_giftcard.phtml';
    }
```
