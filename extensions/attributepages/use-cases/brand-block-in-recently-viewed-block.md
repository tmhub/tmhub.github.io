---
layout: default
title: Display brand block in recently viewed products block
description: Display brand block in recently viewed list
keywords: "attributepages, brand block, recently viewed block"
category: Attributepages
---

# Display brand block in recently viewed products block

You should add the code below in recently viewed list template.

Usually you can find it at
`app/design/frontend/YOUR_PACKAGE/YOUR_THEME/template/reports/product_viewed.phtml`

If you can't find the template to edit, you can always find it with
`System > Configuration > Developer > Debug > Template Path Hints` option.

### Screenshot

![Brand block in recently viewed products block](/images/attributepages/use-cases/brand_block_in_recently_viewed_block.png)

### Code

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

See the [list of available attributepages/product helper methods][product_helper_methods]

##### Related Articles
- [Attributepages product helper][product_helper]

[product_helper]: /extensions/attributepages/widgets-and-blocks/product-option-helper/ "'attributepages/product' helper"
[product_helper_methods]: /extensions/attributepages/widgets-and-blocks/product-option-helper/#helper-methods "List of available 'attributepages/product' helper methods"
