---
layout: default
title: Fumo JapanPost integration
description: Firecheckout integration with Fumo_JapanPost
keywords: Fumo_JapanPost
category: Firecheckout
---

# Fumo JapanPost

Shipping cost is not updated after item was removed from cart.

Open `app/code/local/Fumo/JapanPost/Resource/Data.php` and apply the following patch:

```diff
@@ -74,8 +74,16 @@
            $items = $quote->getAllItems();
        }

+       $ids = false;
+       $collection = $quote->getItemsCollection();
+       if (get_class($collection) && method_exists($collection, 'getAllIds')) {
+           $ids = $collection->getAllIds();
+       }
        // Consolidate each product row (product by quantity) and add it to the _rowsCont array
        foreach($items as $item) {
+           if ($ids && !in_array($item->getId(), $ids)) {
+               continue;
+           }
            // Consolidate the current row
            $rowDim = $this->consRow($item);
            // If the dimension are not valid the Carrier cannot be processed.

```
