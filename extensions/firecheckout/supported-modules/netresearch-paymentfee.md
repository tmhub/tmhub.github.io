---
layout: default
title: Netresearch PaymentFee integration
description: Firecheckout integration with Netresearch PaymentFee
keywords: "Netresearch_PaymentFee, billsafe"
category: Firecheckout
---

# Netresearch PaymentFee

Open `app/code/community/Netresearch/PaymentFee/etc/config.xml`

and find the following code:

```xml
<controller_action_predispatch_checkout_onepage_savePayment>
    <observers>
        <paymentfee>
            <type>singleton</type>
            <class>paymentfee/observer</class>
            <method>handlePaymentFee</method>
        </paymentfee>
    </observers>
</controller_action_predispatch_checkout_onepage_savePayment>
```

Replace it with:

```xml
<controller_action_predispatch_checkout_onepage_savePayment>
    <observers>
        <paymentfee>
            <type>singleton</type>
            <class>paymentfee/observer</class>
            <method>handlePaymentFee</method>
        </paymentfee>
    </observers>
</controller_action_predispatch_checkout_onepage_savePayment>
<controller_action_predispatch_firecheckout_index_savePayment>
    <observers>
        <paymentfee>
            <type>singleton</type>
            <class>paymentfee/observer</class>
            <method>handlePaymentFee</method>
        </paymentfee>
    </observers>
</controller_action_predispatch_firecheckout_index_savePayment>
```

Save the changes and clear the cache.
