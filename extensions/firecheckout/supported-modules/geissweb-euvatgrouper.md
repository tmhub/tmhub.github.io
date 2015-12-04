---
layout: default
title: Geissweb Euvatgrouper integration
description: Firecheckout integration with Geissweb Euvatgrouper
keywords: "Geissweb, Euvatgrouper"
category: Firecheckout
---

# Geissweb Euvatgrouper

Open `js/geissweb/vatvalidation.js` and apply the following patch:

```diff
@@ -2,12 +2,16 @@
     if (typeof(FireCheckout) == 'function')
     {
         setTimeout(function(){
-            queue.add_function(function(){
-                checkout.update(checkout.urls.billing_address);
-            });
-            queue.add_function(function(){
-                checkout.update(checkout.urls.shipping_address);
-            });
+            var sameAsBilling = $('shipping:same_as_billing');
+            if (!sameAsBilling || (sameAsBilling && sameAsBilling.checked)) {
+                queue.add_function(function(){
+                    checkout.update(checkout.urls.billing_address);
+                });
+            } else {
+                queue.add_function(function(){
+                    checkout.update(checkout.urls.shipping_address);
+                });
+            }
             queue.add_function(function(){
                 checkout.update(checkout.urls.shopping_cart);
             });
```
