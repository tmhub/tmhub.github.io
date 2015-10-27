---
layout: default
title: Argento theme complex changes
description: How to apply complex changes to argento theme
keywords: "argento, argento design, argento customization, customize argento"
category: Argento
---

# Complex changes

### Argento custom theme

*Available since Argento 1.5.0*

This method could be used to override not just css styles but templates and
layout files.

You can even [apply changes per store views!](#custom-theme-per-store-view)

 1. Create new folder inside Argento package.

    The name of this folder should include the current active argento theme name
    with `_custom` suffix:

    ```
    app/design/frontend/argento/argento_custom  - ArgentoArgento override
    app/design/frontend/argento/mall_custom     - ArgentoMall override
    ```

 2. Copy any file you would like to change into this folder.

    For example:

    ```
    app/design/frontend/argento/mall_custom/template/catalog/product/list.phtml
    app/design/frontend/argento/mall_custom/layout/local.xml
    skin/frontend/argento/mall_custom/css/custom.css
    skin/frontend/argento/pure_custom/js/custom.js
    ```

 3. Make the changes and save the file
 4. Flush Magento cache

### Custom theme per store view

*Available since Argento 1.5.4*

Custom could be activated per Store View.

Just use the suffix with store_code (`_custom_en`, `_custom_default`).
See the examples below:

```
app/design/frontend/argento/argento_custom_en
app/design/frontend/argento/mall_custom_fr
skin/frontend/argento/pure_custom_en
skin/frontend/argento/pure_custom_fr
```
