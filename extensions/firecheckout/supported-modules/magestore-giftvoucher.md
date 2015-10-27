---
layout: default
title: Magestore Giftvoucher integration
description: Firecheckout integration with Magestore Giftvoucher
keywords: Magestore_Giftvoucher
category: Firecheckout
---

# Magestore Giftvoucher

 1. Open `skin/frontend/base/default/js/magestore/giftvoucher.js`
    and find the following code:

    ```javascript
    if (typeof(save_shipping_method) != 'undefined')
        save_shipping_method(shipping_method_url);
    ```

 2. Replace all occurrences of this code with:

    ```js
    document.fire('giftvoucher:success');
    if (typeof(save_shipping_method) != 'undefined')
        save_shipping_method(shipping_method_url);
    ```

    and save the file.

 3. Disable javascript merge/minification if needed.
