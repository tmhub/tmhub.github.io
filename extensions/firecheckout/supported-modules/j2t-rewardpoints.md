---
layout: default
title: J2T Rewardpoints integration
description: Firecheckout integration with J2T Rewardpoints
keywords: "J2T_Rewardpoints, rewards"
category: Firecheckout
---

# J2T Rewardpoints

If rewardpoints are not updated when you remove the item from the cart, apply
the following changes:

 1. Open `app/code/community/Rewardpoints/Helper/Data.php` and find the
 method `getPointsOnOrder`.

    Replace the following code:

    ```php
    $attribute_restriction = Mage::getStoreConfig('rewardpoints/default/process_restriction', $storeId);
    foreach ($items->getItems() as $_item){
        if ($_item->getParentItemId()) {
    ```

    with:

    ```php
    $attribute_restriction = Mage::getStoreConfig('rewardpoints/default/process_restriction', $storeId);
    $ids = false;
    if (get_class($items) && method_exists($items, 'getAllIds')) {
        $ids = $items->getAllIds();
    }
    foreach ($items->getItems() as $_item){
        if ($ids && !in_array($_item->getId(), $ids)) {
            continue;
        }
        if ($_item->getParentItemId()) {
    ```

 2. Disable compilation and clear the cache.
