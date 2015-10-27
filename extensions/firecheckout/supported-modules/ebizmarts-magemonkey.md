---
layout: default
title: Ebizmarts MageMonkey integration
description: Firecheckout integration with Ebizmarts MageMonkey
keywords: "Ebizmarts_MageMonkey, mailchimp"
category: Firecheckout
---

# Ebizmarts MageMonkey

 1. Open `app/code/community/Ebizmarts/MageMonkey/etc/config.xml` and find the following lines:

    ```xml
    <controller_action_postdispatch_checkout_onepage_saveOrder>
        <observers>
           <monkey_subscribe_checkout>
               <class>monkey/observer</class>
               <method>registerCheckoutSubscribe</method>
           </monkey_subscribe_checkout>
        </observers>
    </controller_action_postdispatch_checkout_onepage_saveOrder>
    ```

 2. Replace them with:

    ```xml
    <controller_action_postdispatch_checkout_onepage_saveOrder>
        <observers>
           <monkey_subscribe_checkout>
               <class>monkey/observer</class>
               <method>registerCheckoutSubscribe</method>
           </monkey_subscribe_checkout>
        </observers>
    </controller_action_postdispatch_checkout_onepage_saveOrder>
    <controller_action_postdispatch_firecheckout_index_saveOrder>
        <observers>
           <monkey_subscribe_checkout>
               <class>monkey/observer</class>
               <method>registerCheckoutSubscribe</method>
           </monkey_subscribe_checkout>
        </observers>
    </controller_action_postdispatch_firecheckout_index_saveOrder>
    ```

 3. Navigate to `FireCheckout` configuration and disable
 "Show Subscribe to newsletter" option
 4. Navigate to `MageMonkey` configuration and enable "Show on checkout" option
 5. Clear Magento cache
