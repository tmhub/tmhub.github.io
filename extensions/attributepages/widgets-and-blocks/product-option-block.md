---
layout: default
title: Product option block
description: Product option block could be used to show product brand logo at product page
keywords: "product option helper"
category: Attributepages
---

# Product option block

Product option block could be used to show brand logo (or any other attribute)
**for a single product** with php, layout xml update or widget interface.

> It's not recommended to use block for a product collection. Use specially optimized
> [product option helper](/extensions/attributepages/widgets-and-blocks/product-option-helper)
> for collections.

Table of Contents

- [Block methods](#block-methods)
- [Inline php code](#inline-php-code)
- [Layout xml code](#layout-xml-update)
- [Widget interface](#widget-interface)

### Block methods

{% capture block_methods %}{% include_relative includes/block_methods.md %}{% endcapture %}
{{ block_methods | markdownify }}

### Inline php code

```php
<?php
    echo $this->getLayout()->createBlock('attributepages/product_option')
        ->setProduct($_product)
        ->setTemplate('tm/attributepages/product/options.phtml')
        ->setAttributeCode('brand')
        ->toHtml()
?>
```

### Layout xml update

Product will be taken from `Mage::registry` automatically.

```xml
<reference name="product.info.extrahint">
    <block type="attributepages/product_option" template="tm/attributepages/product/options.phtml" name="attributepage_brand">
        <action method="setAttributeCode"><value>brand</value></action>
        <action method="setUseImage"><value>1</value></action>
        <action method="setImageType"><value>thumbnail</value></action>
        <action method="setWidth"><value>45</value></action>
        <action method="setHeight"><value>15</value></action>
        <action method="setUseLink"><value>1</value></action>
        <action method="setCssClass"><value>hidden-label</value></action>
    </block>
</reference>
```

### Widget interface

> This feature is available since version 1.3.3

Product will be taken from `Mage::registry` automatically.

![Widget popup](/images/attributepages/widget.png)

You can add this widget to the product page at `Cms > Widgets` page with
following layout update instructions:

![Layout update instructions](/images/attributepages/cms_widget_layout_updates.png)

##### Related articles

- [Product option helper](/extensions/attributepages/widgets-and-blocks/product-option-helper/)
- [Display brand block on product page](/extensions/attributepages/use-cases/brand-block-on-product-page/#inline-block-directive)
