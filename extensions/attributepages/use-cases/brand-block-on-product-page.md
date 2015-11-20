---
layout: default
title: Display brand block on product page
description: Display brand block on product page
keywords: "attributepages, brand block, product page"
category: Attributepages
---

# Display brand block on product page

Brand block can be added to the product page with `Inline php code`,
`Layout update xml` or `Cms widget interface`. Below you'll find description
on how to use each of the proposed ways.

#### Table of Contents

- [Screenshot](#screenshot)
- [Inline php code](#inline-php-code)
- [Layout update xml](#layout-update-xml)
- [Cms widget interface](#cms-widget-interface)

### Screenshot

![Brand block on product page](/images/attributepages/use-cases/brand_block_on_product_page.png)

### Inline php code

You can add the code below in any template, that is shown on product page.

To add block right after product name, you'll need to edit
`app/design/frontend/YOUR_PACKAGE/YOUR_THEME/template/catalog/product/view.phtml`

See the [list of available attributepages/product helper methods][product_helper_methods]

```php
echo Mage::helper('attributepages/product')
    ->setProduct($_product)
    ->setAttributeCode(array(
        'brand',
        'gender'
    ))
    ->setImageType('thumbnail')
    ->setCssClass('list-block')
    ->setParentPageLinkTitle(array(
        'brand'  => 'Browse all brands',
        'gender' => false
    ))
    ->setUseImage(array(
        'brand'  => true,
        'gender' => false
    ))
    ->setUseLink(array(
        'brand'  => true,
        'gender' => false
    ))
    ->setSize(38, 17)
    ->setKeepFrame(false)
    ->toHtml();
```

### Inline block directive

Inline block could be used inside cms blocks or third-party modules blocks, that
are rendered on the product page.

That is how the brand block is shown on [ArgentoFlat](/argento/flat/#brand-logo-on-product-page) and
[ArgentoPure2](/argento/pure2/product-page/#brand-information) themes.

See the [list of available product_option block methods][product_option_block_methods]

```
{% raw %}{{block type="attributepages/product_option" attribute_code="brand" css_class="hidden-label" width="180" height="90" use_image="1" image_type="image" use_link="1" template="tm/attributepages/product/options.phtml"}}{% endraw %}
```

### Layout update xml

See the [list of available product_option block methods][product_option_block_methods]

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

### Cms widget interface

> This feature is available since version 1.3.3

![Widget popup](/images/attributepages/widget.png)

You can add this widget to the product page at `Cms > Widgets` page with
following layout update instructions:

![Layout update instructions](/images/attributepages/cms_widget_layout_updates.png)

##### Related Articles
- [Attributepages product helper][product_helper]
- [Product option block][product_option_block]

[product_helper]: /extensions/attributepages/widgets-and-blocks/product-option-helper/ "'attributepages/product' helper"
[product_helper_methods]: /extensions/attributepages/widgets-and-blocks/product-option-helper/#helper-methods "List of available 'attributepages/product' helper methods"
[product_option_block]: /extensions/attributepages/widgets-and-blocks/product-option-block/ "'Product option' block"
[product_option_block_methods]: /extensions/attributepages/widgets-and-blocks/product-option-block/#block-methods "List of available 'Product option' methods"
