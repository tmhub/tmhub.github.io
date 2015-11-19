---
layout: default
title: Display brand block on category page
description: Display brand block on category page
keywords: "attributepages, brand block, category page, listing"
category: Attributepages
---

# Display brand block on category page

#### Table of Contents

- [Screenshot](#screenshot)
- [Inline php code](#inline-php-code)

### Screenshot

Grid Mode | List Mode
:---------|:---------
![Brand block on category page](/images/attributepages/use-cases/brand_block_on_category_page.png) | ![Brand block on category page](/images/attributepages/use-cases/brand_block_on_category_page_list_mode.png)

### Inline php code

You can add the code below in product list template, that is shown on category page.

Usually you can find it at
`app/design/frontend/YOUR_PACKAGE/YOUR_THEME/template/catalog/product/list.phtml`

<!-- See the [list of available attributepages/product helper methods][product_helper_methods] -->

Code that was used for grid mode screenshot:

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

Code that was used for list mode screenshot:

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

##### Related Articles
- [Attributepages product helper][product_helper]

[product_helper]: /extensions/attributepages/product-helper/ "'attributepages/product' helper"
[product_helper_methods]: /extensions/attributepages/product-helper/#methods "List of available 'attributepages/product' helper methods"
