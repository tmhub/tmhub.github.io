---
layout: default
title: Dhl account integration
description: Firecheckout integration with Dhl_Account
keywords: "Dhl_Account, dhl"
category: Firecheckout
---

# Dhl_Account

Apply the following patch to `js/dhl/account.js`

```diff
--- a/js/dhl/account.js
+++ b/js/dhl/account.js
@@ -1,23 +1,29 @@
 document.observe("dom:loaded", function() {
-
+    togglePackstation();
     checkAnnouncementBox(null, null);
     var elementsToObserve = new Array('billing:country_id',
         'billing:use_for_shipping_yes',
-        'billing:use_for_shipping_no'
+        'billing:use_for_shipping_no',
+        'shipping:same_as_billing'
         );
     if ($('billing-address-select') != null) {
         elementsToObserve.push('billing-address-select');
     }

     $(elementsToObserve).each(function(formElm) {
+        if (!$(formElm)) {
+            return;
+        }
         Event.observe(formElm, 'change', function(event) {
             return checkAnnouncementBox(event, this);
         });
     });

-    Event.observe($('opc-billing'), 'click', function(event) {
-        return checkAnnouncementBox(event, this);
-    });
+    if ($('opc-billing')) {
+        Event.observe($('opc-billing'), 'click', function(event) {
+            return checkAnnouncementBox(event, this);
+        });
+    }

     var dhlPackstation = $$('#dhl_packstation > div');
     if (dhlPackstation.length > 0) {
@@ -31,18 +37,20 @@
         togglePackstation();
     }

-    $('co-billing-form').observe('click', function(event) {
-        var triggerElem = Event.element(event);
-        if (triggerElem != null
-            && triggerElem.type != null
-            && triggerElem.type.toLowerCase() == 'button'
-            && Translator.translate(triggerElem.title.toLowerCase()) == Translator.translate('Continue').toLowerCase()
-            && $('shipping:packstation') != null
-            && $('shipping:packstation').checked == true
-        ) {
-            disablePackstation();
-        }
-    });
+    if ($('co-billing-form')) {
+        $('co-billing-form').observe('click', function(event) {
+            var triggerElem = Event.element(event);
+            if (triggerElem != null
+                && triggerElem.type != null
+                && triggerElem.type.toLowerCase() == 'button'
+                && Translator.translate(triggerElem.title.toLowerCase()) == Translator.translate('Continue').toLowerCase()
+                && $('shipping:packstation') != null
+                && $('shipping:packstation').checked == true
+            ) {
+                disablePackstation();
+            }
+        });
+    }

     if ($('shipping:packstation') != null) {
         Event.observe($('shipping:packstation'), 'click', function(event) {
@@ -142,7 +150,7 @@
                     toggleAnnouncementBox(
                         triggerElm,
                         (transport.responseText == 'DE'),
-                        $('billing:use_for_shipping_yes').checked,
+                        $('billing:use_for_shipping_yes') ? $('billing:use_for_shipping_yes').checked : $('shipping:same_as_billing').checked,
                         $('billing:dhl-account').getValue()
                     );
                     selected_address = $('billing-address-select').getValue();
@@ -157,7 +165,7 @@
             toggleAnnouncementBox(
                 triggerElm,
                 ($('billing:country_id').getValue() == 'DE'),
-                $('billing:use_for_shipping_yes').checked,
+                $('billing:use_for_shipping_yes') ? $('billing:use_for_shipping_yes').checked : $('shipping:same_as_billing').checked,
                 dhlAccount
             );
         }
@@ -235,9 +243,11 @@
         }
         $('shipping_dhl_account_number').style.display = 'none';
         $('dhl_packstation').style.display = 'none';
-        $('co-shipping-form').insert({
-            bottom: $('dhl_packstation')
-        });
+        if ($('co-shipping-form')) {
+            $('co-shipping-form').insert({
+                bottom: $('dhl_packstation')
+            });
+        }
         $('dhl_packstation').hide();
         $($($('shipping:postcode').parentNode).parentNode).show();
         $($($('shipping:city').parentNode).parentNode).show();
```
