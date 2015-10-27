---
layout: default
title: PostcodeAnywhere integration
description: Firecheckout integration with PostcodeAnywhere
keywords: PostcodeAnywhere
category: Firecheckout
---

# PostcodeAnywhere

 1. Open `app/design/frontend/base/default/layout/captureplus.xml` and add the
 following code:

    ```xml
    <firecheckout_index_index>
        <reference name="content">
            <block type="captureplus/scriptinclude" name="captureplus_scriptinclude"  template="captureplus/scriptinclude.phtml" />
        </reference>
    </firecheckout_index_index>
    ```

 2. Open `app/design/frontend/base/default/template/captureplus/scriptinclude.phtml`
 and find the next line:

    ```javascript
    control = new pca.Address(fields, options);
    ```

    Add the following code after this line:

    ```javascript
    if (typeof checkout !== 'undefined' && checkout.update) {
        var updateUrl = checkout.urls.billing_address
        for (var i in addressFields) {
            if (0 === addressFields[i].indexOf('shipping')) {
                updateUrl = checkout.urls.shipping_address
            }
            break;
        }
        control.listen("populate", function (details) {
            checkout.update(updateUrl);
        });
    }
    ```
