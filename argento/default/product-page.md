---
layout: default
title: Argento Default theme Product Page
description: Argento Default product page
keywords: "Argento, default, label, product page, brand information, services sidebar, colorswatches, tabs, soldtogehter"
category: Argento
---

# Argento Default theme Product Page

### Layout

Argento Default is using `page_two_columns_right` layout for the product page. To
change it to another one, create [custom.xml][custom_xml] file and add the
following instruction:

```xml
<catalog_product_view>
    <update handle="page_two_columns_left"/>
</catalog_product_view>
```

Possible values for handle variable:

```
page_two_columns_left
page_two_columns_right
page_three_columns
page_one_column
```

### Content

#### Images

{::options parse_block_html="true" /}
<div class="mdl-grid"><div class="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet">

![Product Image](/images/argento/default/product-page-image.jpg)

</div><div class="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet">

Product image and gallery is powered by LightboxPro module, that has a lot of
configuration optins at `System > Configuration > Template-Master > LightboxPro`
section.

It allows you to configure the following options:

- Image dimensions
- Gallery controls
- Overlay settings
- Popup settings

</div></div>

#### Product Labels

The display of the label on product is powered by Prolabels module. You can add custom label or assign it to any items on the Product page at `Templates-Master > Prolabels` backend page.

#### Tabs

![Tabs](/images/argento/default/product-page-tabs.jpg)

Argento tabs is powered by EasyTabs module. You can add or remove additional tabs
from `Templates-Master > Easy Tabs` page.

The following tabs are shown by default:

- Product Description
- Additional Information
- Tags
- Reviews
- Questions

All of these tabs are standard Magento features except `Questions`. It's an AskIt
powered block.

This block is very handy for customers that are not sure about the product or
sevices and have some questions to ask.

#### Soldtogether blocks

Soldtogether powered blocks. You can customize these blocks
from  `System > Configuration > Tempaltes-Master > SoldTogether` section.

Configuration provides the following options:

- Products count
- Columns count
- Amazon style for `Frequently bought together` block

##### Frequently bought together

You can edit the block by navigating to `System > Configuration > Tempaltes-Master > SoldTogether > Frequently Bought Together`

![Frequently bought together](/images/argento/default/product-page-frequently-bought.jpg)

##### Customers who bought this item also bought

You can edit the block by navigating to `System > Configuration > Tempaltes-Master > SoldTogether > Customer Bought Together`

![Customers who bought this item also bought](/images/argento/default/product-page-who-bought-also-bought.jpg)

[custom_xml]: /argento/theme-customization/small-changes/#custom-layout-update-file "custom.xml layout"
[fontawesome]: http://fontawesome.io/icons/ "FontAwesome Icons"
[colorswatches]: http://sherodesigns.com/tutorial-configurable-swatches-in-magento/ "Catalog Configurable Swatches tutorial"
