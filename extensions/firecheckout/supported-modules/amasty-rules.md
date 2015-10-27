---
layout: default
title: Amasty Rules integration
description: Firecheckout integration with Amasty Rules
keywords: Amasty_Rules
category: Firecheckout
---

# Amasty Rules

Amasty rules are used by `Amasty_Payrestriction` and `Amasty_Shiprestriction`,
so this integration fixes the issues with that modules too.

Apply the following patch to the `app/code/local/Amasty/Rules/Model/Rule/Condition/Total.php`:

```diff
--- a/app/code/local/Amasty/Rules/Model/Rule/Condition/Total.php
+++ b/app/code/local/Amasty/Rules/Model/Rule/Condition/Total.php
@@ -9,6 +9,10 @@
 class Amasty_Rules_Model_Rule_Condition_Total extends Mage_SalesRule_Model_Rule_Condition_Combine {

     private $_passedRules = array();
+
+    private $_condArray = array();
+
+    private $_attrElementValue = null;

     public function __construct()
     {
@@ -107,17 +111,20 @@
         foreach ($this->getConditions() as $condObj) {
             if (!in_array( $condObj->getId(),$this->_passedRules  )){
                 $this->_passedRules[] = $condObj->getId();
-                $condArray[] = $condObj->validate($object);
+                $this->_condArray[] = $condObj->validate($object);
             }
         }

-        if ( empty($condArray) ){
+        if ( empty($this->_condArray) ){
             return $this->validateAttribute($object->getData($this->getAttribute()));
         }

-        $fieldName = $this->getAttributeElement()->getValue();
+        if (null === $this->_attrElementValue) {
+            $this->_attrElementValue = $this->getAttributeElement()->getValue();
+        }
+        $fieldName = $this->_attrElementValue;
         $v = Mage::getSingleton('amrules/calculator')
-            ->getSingleTotalField($id, $fieldName, $condArray, $this->getAggregator());
+            ->getSingleTotalField($id, $fieldName, $this->_condArray, $this->getAggregator());

         return $this->validateAttribute($v);
     }
```

Save the file and disable compilation mode if needed.
