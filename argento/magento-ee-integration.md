---
layout: default
title: Magento Enterprise Edition Integration
description: Argento integration with Magento Enterprise Edition
keywords: "Magento EE, EasyTabs, rule based products"
category: Argento
---

# Magento EE Integration

### EasyTabs

##### Replacing upsell and related product blocks with EE rule-based blocks

Argento doesn't provide ready to use rule-based blocks for EasyTabs extension. If you want to use Enterprise Edition rule-based upsell and related product blocks you need to replace community blocks with enterprise manually.

 1. Navigate to EasyTabs page in backend: `Templates Master > Easy Tabs`
 2. Select `Related Products` and  `We Also Recommend` items in grid and disable
 them.
 3. Create new tabs with following configuration:

    **Upsell Products**

    ```
    Title     : We Also Recommend
    Alias     : targetrule_upsell_products
    Block type: EasyTabs Custom Block
    Sort Order: 4
    Status    : Enabled
    Store View: All Store Views
    Block     : enterprise_targetrule/catalog_product_list_upsell
    Template  : targetrule/catalog/product/list/upsell.phtml
    Unset     : product.info::upsell_products
    ```

    **Related Products**

    ```
    Title     : Related products
    Alias     : targetrule_related_products
    Block type: EasyTabs Custom Block
    Sort Order: 5
    Status    : Enabled
    Store View: All Store Views
    Block     : enterprise_targetrule/catalog_product_list_related
    Template  : targetrule/catalog/product/list/related.phtml
    Unset     : right::catalog.product.related
    ```

 4. Configure blocks with Magento settings

    `System > Configuration > Catalog > Rule-Based Product Relations > Maximum Number of Products in Related Products List`

    `System > Configuration > Catalog > Rule-Based Product Relations > Maximum Number of Products in Upsell Product List`

 5. Flush Cache Storage at `System > Cache Management`
