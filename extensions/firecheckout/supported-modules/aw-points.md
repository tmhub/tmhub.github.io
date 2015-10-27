---
layout: default
title: AW Points integration
description: Firecheckout integration with AheadWorks Points
keywords: AW_Points
category: Firecheckout
---

# AW Points

 1. Open `/app/code/local/AW/Points/Block/Checkout/Onepage/Payment/Methods.php`
 2. Find the following lines:

    ```php
    $this->setTemplate('aw_points/checkout/onepage/payment/' . $magentoVersionTag . '/methods.phtml');

    return parent::_toHtml();
    }
    ```

 3. Replace it with:

    ```php
    $this->setTemplate('aw_points/checkout/onepage/payment/' . $magentoVersionTag . '/methods.phtml');

    if ('firecheckout' === $this->getRequest()->getRouteName()) {
        $this->setTemplate('tm/firecheckout/checkout/payment/methods.phtml');
    }

    return parent::_toHtml();
    ```

 4. Refresh cache and try to use points at firecheckout page.
