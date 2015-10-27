---
layout: default
title: Amasty Promo integration
description: Firecheckout integration with Amasty Promo
keywords: Amasty_Promo
category: Firecheckout
---

# Amasty Promo

This module is very hard to integrate with firecheckout.
The module is continiously removes and add the free item to the cart. Every
reload of the cart and checkout page calls for remove and then add the new free item.

Firecheckout calls for the collect totals, quote save in different order, which
cause the item removed but not added to the cart anymore.

We have tried some patches and it seems it working now, but we did not test it
fully enough.

Open `app/code/local/Amasty/Promo/Model/Observer.php` and comment
`$item->isDeleted(true);` line:

```php
//            $item->isDeleted(true);
            $item->setData('qty_to_add', '0.0000');
            $quote->removeItem($item->getId());
```

We recommend you to contact the Amasty developers and ask them advice.
