---
layout: default
title: Billpay integration
description: Firecheckout integration with Billpay
keywords: Billpay
category: Firecheckout
---

# Billpay

Open `/js/billpay/payment.js` and apply following patch:

```diff
--- a/js/billpay/payment.js
+++ b/js/billpay/payment.js
@@ -96,6 +96,9 @@
             try { json = eval('(' + transport.responseText +  ')') } catch (e) { }
         }
         if (json) {
+            if (typeof FireCheckout !== 'undefined') {
+                json.checkout.form = '#firecheckout-form';
+            }
             billpayCheckout('options', json);
             billpayCheckout('run', {"container": ".bpy-checkout-container"});
         }
```

Save the file.
