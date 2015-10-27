---
layout: default
title: Ayasoftware Simple Product Pricing integration
description: Firecheckout integration with Ayasoftware SimpleProductPricing
keywords: "Ayasoftware_SimpleProductPricing, zero subtotal, zero total"
category: Firecheckout
---

# Ayasoftware SimpleProductPricing

Open `app/code/local/Ayasoftware/SimpleProductPricing/Catalog/Model/Product/Type/Configurable/Price.php`
file and apply the following patch:

```diff
--- a/app/code/local/Ayasoftware/SimpleProductPricing/Catalog/Model/Product/Type/Configurable/Price.php
+++ b/app/code/local/Ayasoftware/SimpleProductPricing/Catalog/Model/Product/Type/Configurable/Price.php
@@ -85,6 +85,15 @@
                 break;
             }
         }
+
+        $currentRoute = Mage::app()->getRequest()->getRouteName();
+        $disabledRoutes = array(
+            'firecheckout'
+        );
+        if (in_array($currentRoute, $disabledRoutes)) {
+            $useSimpleProductPricing = true;
+        }
+
         if($useSimpleProductPricing) {
             if (is_null($qty) && ! is_null($product->getCalculatedFinalPrice())) {
                 return $product->getCalculatedFinalPrice();
```

Save the file, disable compilation mode if needed.
