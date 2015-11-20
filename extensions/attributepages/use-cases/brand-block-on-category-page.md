---
layout: default
title: Display brand block on category page
description: Display brand block on category page
keywords: "attributepages, brand block, category page, listing"
category: Attributepages
---

# Display brand block on category page

You can add the code below in product list template, that is shown on category page.

Usually you can find it at
`app/design/frontend/YOUR_PACKAGE/YOUR_THEME/template/catalog/product/list.phtml`

### Example 1

![Brand block on category page](/images/attributepages/use-cases/brand_block_on_category_page.png)

```php
<?php
    echo Mage::helper('attributepages/product')
        ->setCollection($_productCollection)
        ->setProduct($_product)
        ->setAttributeCode(array('brand', 'gender'))
        ->setImageType('thumbnail')
        ->setCssClass('hidden-label a-center')
        ->setUseLink(array(
            'brand'  => true,
            'gender' => false
        ))
        ->setSize(38, 17)
        ->setKeepFrame(false)
        ->toHtml();
?>
```

See the [list of available attributepages/product helper methods][product_helper_methods]

### Example 2

![Brand block on category page](/images/attributepages/use-cases/brand_block_on_category_page_list_mode.png)

```php
<?php
    echo Mage::helper('attributepages/product')
        ->setCollection($_productCollection)
        ->setProduct($_product)
        ->setAttributeCode(array('brand', 'gender'))
        ->setImageType('thumbnail')
        ->setCssClass('hidden-label')
        ->setSize(38, 17)
        ->setKeepFrame(false)
        ->toHtml();
?>
```

See the [list of available attributepages/product helper methods][product_helper_methods]

##### Related Articles
- [Attributepages product helper][product_helper]

[product_helper]: /extensions/attributepages/widgets-and-blocks/product-option-helper/ "'attributepages/product' helper"
[product_helper_methods]: /extensions/attributepages/widgets-and-blocks/product-option-helper/#helper-methods "List of available 'attributepages/product' helper methods"
