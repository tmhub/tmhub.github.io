---
layout: default
title: Ship and pay combo integration
permalink: "/firecheckout/supported-modules/mymonki-ship2pay/"
description: Firecheckout integration with Ship2Pay
keywords: "Ship2Pay, Mymonki"
category: Firecheckout
---

# Ship2Pay

The following config options should be changed as follows:

`System > Configuration > TM Checkout > Firecheckout > Ajax save and reload rules`

- Payment methods depends on: Add `Order Total` option.
- Order total (Review) depends on: Add `Shipping Method` value.

![Ship2Pay integration settings](/images/firecheckout/integration/mymonky-ship2pay/configuration.png)
