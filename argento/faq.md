---
layout: default
title: Argento Frequently Asked Questions
description: Argento Frequently Asked Questions
keywords: "argento faq, short header, floatbar, collapsed category description, layout, argento logo"
category: Argento
---

# Argento FAQ

1. [How to disable short header and footer layout?](#how-to-disable-short-header-and-footer-layout)
2. [How to add additional item to the floatbar navigation?](#how-to-add-additional-item-to-the-floatbar-navigation)
3. [How to disable category description collapse?](#how-to-disable-category-description-collapse)
4. [How to disable category description collapse for specific category?](#how-to-disable-category-description-collapse-for-specific-category)
5. [How to add text collapse just like the category description?](#how-to-collapse-any-another-block)
6. [How to change layout for specific category?](#how-to-change-layout-for-specific-category)
7. [Magento 1.7 and older](#magento-17-and-older)
8. [Prepare logo image for mobile device](#prepare-logo-image-for-mobile-device)
9. [How to disable Questions tab on product page?](#how-to-disable-questions-tab-on-product-page)

### How to disable short header and footer layout?

*This feature is available since Argento 1.5.2.*

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) `custom.xml` layout file
 2. Add the following code:

    ```xml
    <short_header_footer>
        <reference name="header">
            <action method="setTemplate"><template>page/html/header.phtml</template></action>
        </reference>
        <reference name="footer">
            <action method="setTemplate"><template>page/html/footer.phtml</template></action>
        </reference>
    </short_header_footer>
    ```

### How to add additional item to the floatbar navigation?

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) `custom.xml` layout file
 2. Add the following code:

    ```xml
    <argento_bottomnavbar_catalog>
        <reference name="before_body_end">
            <block type="core/text" name="catalog_bottomnavbar_additional">
                <action method="setText"><text><![CDATA[
<script type="text/javascript">
document.observe('bottomnavbar:init', function() {
    BottomNavbar.add(
        Translator.translate('Title'), // title in navbar ribbon
        '.toolbar-bottom .sort-by' // block selector to show
    );
    BottomNavbar.add(
        '.block-layered-nav .block-title span', // title selector for navbar ribbon
        '.block-layered-nav' // block selector to show
    );
});
</script>
                ]]></text></action>
            </block>
        </reference>
    </argento_bottomnavbar_catalog>
    ```

    `argento_bottomnavbar_catalog` - is the handle that argento uses for the following pages:

    ```
    catalog_category_default
    catalog_category_layered
    catalogsearch_advanced_result
    catalogsearch_result_index
    ```

    You may add item for specific page only. To do that, change the
    `argento_bottomnavbar_catalog` handle to another.

### How to disable category description collapse?

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) `custom.xml` layout file
 2. Add the following code inside:

    ```xml
    <remove name="collapsed_category_description"/>
    ```

### How to disable category description collapse for specific category?

Open category in backend view. Add the following code to the category layout
update xml instructions:

```xml
<remove name="collapsed_category_description"/>
```

### How to collapse any another block?

Apply the following layout update xml to the page:

```xml
<reference name="before_body_end">
    <block type="core/text" name="collapsed_colmain">
        <action method="setText"><text><![CDATA[
<script type="text/javascript">
var collapsed = new CollapsedElement();
collapsed.init('.col-main', {
maxHeight: 250,
height: 100
});
</script>
        ]]></text></action>
    </block>
</reference>
```

### How to change layout for specific category?

 1. Open `Admin > Catalog > Category` and select category.
 2. Switch to `Custom design` tab.
 3. Add the following content to `Custom layout update`:

    ```xml
    <reference name="root">
        <action method="setTemplate"><template>page/2columns-right.phtml</template></action>
    </reference>
    ```

    Possible values for template variable:

    ```
    page/2columns-left.phtml
    page/2columns-right.phtml
    page/3columns.phtml
    page/1column.phtml
    ```

### Magento 1.7 and older

Copy `header.phtml` and `header_short.phtml` files from your theme to `_custom`
theme. For example:

```
app/design/frontend/argento/default/template/page/html/header.phtml
app/design/frontend/argento/default/template/page/html/header_short.phtml
copy to:
app/design/frontend/argento/argento_custom/template/page/html/header.phtml
app/design/frontend/argento/argento_custom/template/page/html/header_short.phtml

OR

app/design/frontend/argento/mall/template/page/html/header.phtml
app/design/frontend/argento/mall/template/page/html/header_short.phtml
copy to:
app/design/frontend/argento/mall_custom/template/page/html/header.phtml
app/design/frontend/argento/mall_custom/template/page/html/header_short.phtml
```

Then open these files and find the following code:

```
<?php echo $this->getChildHtml('welcome') ?>
```

Replace it with:

```
<?php echo $this->getWelcome() ?>
```

Save the files and clear the cache.

### Prepare logo image for mobile device

To make your logo look crisp on devices with high pixel ratio value
you should create the double sized logo from the vector logo source.

Move your standard and double sized logos to the `custom` skin folder:

```
skin/frontend/argento/{theme}_custom/images/{logo_name}.gif
skin/frontend/argento/{theme}_custom/images/{logo_name}@2x.gif
```

 **{theme}** - is the theme name that you are using
 **{logo_name}** - is the name of your original logo file

For example:

```
skin/frontend/argento/mall_custom/images/logo.gif
skin/frontend/argento/mall_custom/images/logo@2x.gif
OR
skin/frontend/argento/argento_custom/images/storeLogo.png
skin/frontend/argento/argento_custom/images/storeLogo@2x.png
```

### How to create full width block at CMS page

 1. Find your CMS page unique classname i. e. `.cms-about` (usually it's located
    in <body class="CMS-ABOUT"> tag).
 2. Go to your [custom.css](../theme-customization/small-changes/#custom-styles-and-javascript)
    file and add following code using your CMS page selector:

    ```css
    .cms-about .main {
       max-width: 100%;
       padding: 0;
    }
    ```

 3. It will make your page content expand to full page width.
 4. In case you want to leave some blocks the **fixed width**, wrap them with `<div class="container">BLOCK CONTENT HERE</div>`

### How to disable Questions tab on product page

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) or edit existing `custom.xml` layout file of your theme.
 2. Add the following code inside:

    ```xml
    <catalog_product_view>
        <reference name="product.info.tabs">
            <action method="unsetChild" module="askit" ifconfig="askit/general/enabled">
                <alias>askit_tabbed</alias>
            </action>
        </reference>
    </catalog_product_view>
    ```

 3. Flush cache