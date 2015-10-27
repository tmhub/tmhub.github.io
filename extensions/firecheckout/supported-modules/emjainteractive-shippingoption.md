---
layout: default
title: Emjainteractive ShippingOption integration
description: Firecheckout integration with Emjainteractive ShippingOption
keywords: Emjainteractive_ShippingOption
category: Firecheckout
---

# Emjainteractive ShippingOption

 1. Open `app/code/local/Emjainteractive/ShippingOption/etc/config.xml` and find the following section:

    ```xml
    <controller_action_predispatch_checkout_onepage_saveShippingMethod>
        <observers>
            <emjainteractive_shippingoption_observer>
                <class>emjainteractive_shippingoption/observer</class>
                <method>saveShippingMethod</method>
            </emjainteractive_shippingoption_observer>
        </observers>
    </controller_action_predispatch_checkout_onepage_saveShippingMethod>
    ```

 2. Replace it with:

    ```xml
    <controller_action_predispatch_checkout_onepage_saveShippingMethod>
        <observers>
            <emjainteractive_shippingoption_observer>
                <class>emjainteractive_shippingoption/observer</class>
                <method>saveShippingMethod</method>
            </emjainteractive_shippingoption_observer>
        </observers>
    </controller_action_predispatch_checkout_onepage_saveShippingMethod>

    <controller_action_predispatch_firecheckout_index_saveShippingMethod>
        <observers>
            <emjainteractive_shippingoption_observer>
                <class>emjainteractive_shippingoption/observer</class>
                <method>saveShippingMethod</method>
            </emjainteractive_shippingoption_observer>
        </observers>
    </controller_action_predispatch_firecheckout_index_saveShippingMethod>
    ```

 3. Clear Magento cache
