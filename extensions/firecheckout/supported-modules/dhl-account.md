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
@@ -1,23 +1,31 @@
 document.observe("dom:loaded", function() {
-
+    if ($('shipping:packstation')) {
+        togglePackstation();
+    }
     checkAnnouncementBox(null, null);
     var elementsToObserve = new Array('billing:country_id',
         'billing:use_for_shipping_yes',
-        'billing:use_for_shipping_no');
+        'billing:use_for_shipping_no',
+        'shipping:same_as_billing'
+        );
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
 
-
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
@@ -31,18 +39,21 @@
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
+
     if ($('shipping:packstation') != null) {
         Event.observe($('shipping:packstation'), 'click', function(event) {
             togglePackstation();
@@ -75,14 +86,16 @@
         });
     }
 
-    $("shipping:country_id").observe('change', function(event) {
-        if ('DE' != $F("shipping:country_id")) {
-            disablePackstation();
-            $('shipping:packstation').disable();
-        } else {
-            $('shipping:packstation').enable();
-        }
-    });
+    if ($("shipping:country_id")) {
+        $("shipping:country_id").observe('change', function(event) {
+            if ('DE' != $F("shipping:country_id")) {
+                disablePackstation();
+                $('shipping:packstation').disable();
+            } else {
+                $('shipping:packstation').enable();
+            }
+        });
+    }
 
     if ($('shipping-address-select') != null) {
         Event.observe('shipping-address-select', 'change', function(event) {
@@ -132,6 +145,12 @@
 
 function checkAnnouncementBox(event, triggerElm) {
     if (null != $('parcel_announcement_box')) {
+        var equalAddress = true;
+        if ($('billing:use_for_shipping_yes')) {
+            equalAddress = $('billing:use_for_shipping_yes').checked;
+        } else if ($('shipping:same_as_billing')) {
+            equalAddress = $('shipping:same_as_billing').checked;
+        }
         if ((null != $('billing-address-select')) && $('billing-address-select').getValue()) {
             // currently an existing address is selected, request country code
             new Ajax.Request(BASE_URL + 'dhlaccount/account/countrycode', {
@@ -141,7 +160,7 @@
                     toggleAnnouncementBox(
                         triggerElm,
                         (transport.responseText == 'DE'),
-                        $('billing:use_for_shipping_yes').checked,
+                        equalAddress,
                         $('billing:dhl-account').getValue()
                     );
                     selected_address = $('billing-address-select').getValue();
@@ -156,7 +175,7 @@
             toggleAnnouncementBox(
                 triggerElm,
                 ($('billing:country_id').getValue() == 'DE'),
-                $('billing:use_for_shipping_yes').checked,
+                equalAddress,
                 dhlAccount
             );
         }
@@ -234,9 +253,11 @@
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
