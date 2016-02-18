---
layout: default
title: Amasty Order Attributes integration
description: Firecheckout integration with Amasty Order Attributes
keywords: Amasty_Orderattr
category: Firecheckout
---

# Amasty Orderattr

 1. Open `js/amasty/amorderattr/payment.js` and apply the following patch:

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

 2. Open `app/code/local/Amasty/Orderattr/Model/Observer.php` and apply the 
    following patch:

    ```diff
    @@ -473,6 +473,10 @@
                 if (!Mage::helper('core')->isModuleEnabled('Amasty_Scheckout')) {
                     $html = $this->_prepareFrontendHtml($transport, 'billing');
                 }
    +        } elseif ($block instanceof Mage_Checkout_Block_Onepage_Billing) {
    +            if ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'billing', '</ul>', false);
    +            }
             }
     
             $blockClass = Mage::getConfig()->getBlockClassName('checkout/onepage_shipping');
    @@ -481,12 +485,18 @@
                 if (!Mage::helper('core')->isModuleEnabled('Amasty_Scheckout')) {
                     $html = $this->_prepareFrontendHtml($transport, 'shipping');
                 }
    +        } elseif ($block instanceof Mage_Checkout_Block_Onepage_Billing) {
    +            if ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'shipping', '</ul>', false);
    +            }
             }
     
             $blockClass = Mage::getConfig()->getBlockClassName('checkout/onepage_shipping_method');
             //if ($block instanceof Mage_Checkout_Block_Onepage_Shipping_Method) {
             if ($blockClass == get_class($block)) {
                 if (Mage::helper('core')->isModuleEnabled('Amasty_Scheckout')) {
                     $html = $this->_prepareFrontendHtml($transport, 'shipping_method', '</div>', false);
    +            } elseif ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'shipping_method', '</div>', false);
                 } else {
                     $html = $this->_prepareFrontendHtml($transport, 'shipping_method');
    @@ -497,6 +507,8 @@
             //if ($block instanceof Mage_Checkout_Block_Onepage_Payment) {
             if ($blockClass == get_class($block)) {
                 if (Mage::helper('core')->isModuleEnabled('Amasty_Scheckout')) {
                     $html = $this->_prepareFrontendHtml($transport, 'payment', '</div>', false);
    +            } elseif ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'payment', '</div>', false);
                 } else {
                     $html = $this->_prepareFrontendHtml($transport, 'payment', '</form>');
    ```
