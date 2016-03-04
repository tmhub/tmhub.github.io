---
layout: default
title: Xonu_Directdebit integration
description: Firecheckout integration with Xonu Directdebit
keywords: Xonu_Directdebit
category: Firecheckout
---

# Xonu_Directdebit

 1. Open `app/code/community/Xonu/Directdebit/etc/config.xml` and find following lines:

    ```xml
    <controller_action_predispatch_checkout>
        <observers>
            <xonu_directdebit_observer>
                <class>xonu_directdebit/agreements</class>
                <method>controllerActionPredispatchCheckout</method>
            </xonu_directdebit_observer>
        </observers>
    </controller_action_predispatch_checkout>
    ```

    Replace them with:

    ```xml
    <controller_action_predispatch_checkout>
        <observers>
            <xonu_directdebit_observer>
                <class>xonu_directdebit/agreements</class>
                <method>controllerActionPredispatchCheckout</method>
            </xonu_directdebit_observer>
        </observers>
    </controller_action_predispatch_checkout>

    <controller_action_predispatch_firecheckout>
        <observers>
            <xonu_directdebit_observer>
                <class>xonu_directdebit/agreements</class>
                <method>controllerActionPredispatchCheckout</method>
            </xonu_directdebit_observer>
        </observers>
    </controller_action_predispatch_firecheckout>
    ```

 2. Navigate to `System > Configuration > TM Checkout > Firecheckout > Ajax Save and reload rules`
    and add `Payment Methods` value to `Agreements depends on` option:

    ![Argeements reload option](/images/firecheckout/integration/xonu-directdebit/configuration.png)
