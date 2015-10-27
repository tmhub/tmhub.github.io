---
layout: default
title: Amasty Order Attributes integration
description: Firecheckout integration with Amasty Order Attributes
keywords: Amasty_Orderattr
category: Firecheckout
---

# Amasty Orderattr

Open `js/amasty/amorderattr/payment.js` and apply the following patch:

```diff
@@ -4,7 +4,7 @@
 * @package Amasty_Orderattr
 */

-if (typeof(Payment)!='undefined'){
+if (typeof(Payment)!='undefined' && typeof FireCheckout === 'undefined'){
     Payment.prototype.init = function ()
     {
         if ('function' == typeof(this.beforeInit))
@@ -37,7 +37,7 @@
     }
 }

-if (typeof(Review)!='undefined'){
+if (typeof(Review)!='undefined' && typeof FireCheckout === 'undefined'){
     Review.prototype.save =function(){
             if ($('form_review'))
             {
```
