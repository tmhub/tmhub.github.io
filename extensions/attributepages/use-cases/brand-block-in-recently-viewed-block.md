---
layout: default
title: Display brand block in recently viewed products block
description: Display brand block in recently viewed list
keywords: "attributepages, brand block, recently viewed block"
category: Attributepages
---

# Display brand block in recently viewed products block

#### Table of Contents

- [Screenshot](#screenshot)
- [Inline php code](#inline-php-code)

### Screenshot

![Brand block in recently viewed products block](/images/attributepages/use-cases/brand_block_in_recently_viewed_block.png)

### Inline php code

You should add the code below in recently viewed list template.

Usually you can find it at
`app/design/frontend/YOUR_PACKAGE/YOUR_THEME/template/reports/product_viewed.phtml`

If you can't find the template to edit, you can always find it with
`System > Configuration > Developer > Debug > Template Path Hints` option.

<!-- See the [list of available attributepages/product helper methods][product_helper_methods] -->

```php
<?php
    echo Mage::helper('attributepages/product')
        ->setCollection($_products)
        ->setProduct($_item)
        ->setAttributeCode('brand')
        ->setImageType('thumbnail')
        ->setCssClass('hidden-label list-block')
        ->setSize(40, 20)
        ->setShowParentPage(true)
        ->setParentPageLinkTitle('View other brands')
        ->toHtml();
?>
```

##### Related Articles
- [Attributepages product helper][product_helper]

[product_helper]: /extensions/attributepages/product-helper/ "'attributepages/product' helper"
[product_helper_methods]: /extensions/attributepages/product-helper/#methods "List of available 'attributepages/product' helper methods"
