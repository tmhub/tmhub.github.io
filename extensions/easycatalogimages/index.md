---
layout: default
title: EasyCatalogImages
description: Categories and subcategories listing with images or thumbnails
keywords: "easycatalogimages, category, subcategory"
category: EasyCatalogImages
---

# Easy Catalog Images

EasyCatalogImages allows you to show category listing of the specified parent category.

It's very helpful to improve browsing experience in categories with a lot of
child categories.

![EasyCatalogImages at category page](/images/easycatalogimages/category_page.png)

## Contents

1.  [Configuration](#configuration)
2.  [Block options](#options)
3.  [Custom usage examples](#custom-usage)
    1. [Inline php code](#inline-php-code)
    2. [Layout xml code](#layout-xml-code)
    3. [Inline block for magento cms filter](#inline-block-for-magento-cms-filter)
4.  [Use cases](#use-cases)
    1. [Show block below the category title](#show-block-below-the-category-title)
    2. [Show block for certain category only](#show-block-for-certain-category-only)
    3. [Remove block from certain category](#remove-block-from-certain-category)
    4. [Display images near subcategories](#display-images-near-subcategories)
5. [Compatibility issues](#compatibility-issues)

### Configuration

![EasyCatalogImages configuration](/images/easycatalogimages/configuration.png)

**General**

- Enabled
- Use category image, when thumbnail is not available
- Use image helper to resize images
- Background color

**Category page**

- Enabled for default categories
- Enabled for anchor categories
- Hidden, when filter or pagination is used
- Number of categories to show
- Columns count
- Show images
- Image width
- Image height
- Number of subcategories to show

**Automated Image Assignment**

Have a lot of categories without images?

This option will help you fill the categories thumbnails with image of the
first product of each category.

### Options

You can find how to use these options in the [Custom Usage](#custom-usage) section.

Option                      | Values                    | Description
----------------------------|---------------------------|----------------------------
background_color            | rgb color code            | Background color what will be used to fill background of resized image, if needed
category_count              | integer                   | Count of categories to show
category_id                 | integer\|null(default)    | Parent category, do not set to use current category
category_to_hide            | comma separated ids       | Categories to hide from output
category_to_show            | comma separated ids       | Categories to show
column_count                | integer                   | Columns count
hide_when_filter_is_used    | boolean                   | Ability to hide block, if filter is applied or current page > 1
image_width                 | integer                   | Image width, px
image_height                | integer                   | Image height, px
resize_image                | boolean                   | Flag, that indicating to use image resizer or not
show_image                  | boolean                   | Show image flag
subacategory_count          | integer                   | Count of subcategories
template                    | string(tm/easycatalogimg/list.phtml) | Template to use
use_image_attribute         | boolean                   | Use image attribute, if thumbnail is not available

### Custom Usage

Below you will find examples of custom usage of the module block with all available options.

##### Inline call to use in magento cms blocks and pages

![EasyCatalogImages widget](/images/easycatalogimages/widget.png)

```
{% raw %}{{widget type="easycatalogimg/widget_list" category_count="100" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
```

##### Inline php code

```php
echo $this->getLayout()
    ->createBlock('easycatalogimg/list')
    ->setTemplate('tm/easycatalogimg/list.phtml')
    ->setEnabledForAnchor(true)
    ->setEnabledForDefault(true)
    ->setCategoryCount(4)
    ->setSubcategoryCount(3)
    ->setColumnCount(4)
    ->setShowImage(true)
    ->setImageWidth(200)
    ->setImageHeight(200)
    ->setHideWhenFilterIsUsed(false)
    ->setCategoryId(8)
    ->setCategoryToHide('1,2,3')
    ->setCategoryToShow('4,5,6')
    ->toHtml();
```

##### Layout xml code

```php
<block type="easycatalogimg/list" name="subcategories" template="tm/easycatalogimg/list.phtml">
    <action method="setColumnCount"><count>4</count></action>
    <action method="setShowImage"><flag>1</flag></action>
    <action method="setImageHeight"><height>200</height></action>
    <action method="setImageWidth"><width>200</width></action>
    <action method="setCategoryCount"><count>4</count></action>
    <action method="setSubcategoryCount"><count>3</count></action>
    <action method="setResizeImage"><flag>1</flag></action>
    <action method="setUseImageAttribute"><flag>1</flag></action>
    <action method="setEnabledForAnchor"><flag>1</flag></action>
    <action method="setEnabledForDefault"><flag>1</flag></action>
    <action method="setHideWhenFilterIsUsed"><flag>0</flag></action>
    <action method="setCategoryId"><category>8</category></action>
    <action method="setCategoryToHide"><category>1,2,3</category></action>
    <action method="setCategoryToShow"><category>4,5,6</category></action>
</block>
```

### Use cases

##### Show block below the category title

1.  Navigate to `System > Configuration > TM > EasyCatalogImages > Category` and
disable the following options:

    ```
    Enabled for default categories
    Enabled for anchor categories
    ```

2.  Open `app/design/frontend/base/default/template/catalog/category/view.phtml`

    **Please note that, your theme may override this template, so you need to edit your
theme template, instead of this one.**

3.  Add the following code, where you wish to:

    ```php
    <?php
        echo $this->getLayout()
            ->createBlock('easycatalogimg/widget_list')
            ->setTemplate('tm/easycatalogimg/list.phtml')
            ->setCategoryCount(10)
            ->toHtml();
    ?>
    ```

    See the additional options at [inline php code](#inline-php-code) section.

4. Save the file and clear the cache.

##### Show block for certain category only

1.  Navigate to `CMS > Static Blocks` and create new block with following content:

    ```
    Block Title:    EasyCatalogImages
    Identifier:     EasyCatalogImages
    Store View:     All Store Views
    Status:         Enabled
    Content:        {% raw %}{{widget type="easycatalogimg/widget_list" category_count="100" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml" hide_when_filter_is_used="1"}}{% endraw %}
    ```

2.  Navigate to `System > Configuration > TM > EasyCatalogImages > Category` and
disable the following options:

    ```
    Enabled for default categories
    Enabled for anchor categories
    ```

3.  Navigate to `Catalog > Manage Categories`
4.  Select some the category
5.  Switch to `Display Settings` tab and set the following values:

    ```
    Display Mode:   Static block and products
    CMS Block:      EasyCatalogImages
    ```

6. Save category and clear the cache.

##### Remove block from certain category

1.  Navigate to `Catalog > Manage Categories`
2.  Select some the category
3.  Switch to `Custom Design` tab and add the following code
    to `Custom Layout Update` field:

    ```php
    <remove name="subcategories"/>
    ```

4. Save category and clear the cache.

##### Display images near subcategories

![Images near subcategory links](https://i.cloudup.com/KZcvUg47g_-3000x3000.png)

1.  Open `app/design/frontend/base/default/template/tm/easycatalogimg/list.phtml`
    and find the following lines:

    ```php
    <li>
        <a href="<?php echo $_subcategory->getUrl() ?>"
            title="<?php echo $this->htmlEscape($_subcategory->getName())?>"
            class="category-name child-category"><?php
            echo $this->htmlEscape($_subcategory->getName());
        ?></a>
    </li>
    ```

2.  Replace them with:

    ```php
    <li>
        <a href="<?php echo $_subcategory->getUrl() ?>"
            title="<?php echo $this->htmlEscape($_subcategory->getName())?>"
            class="category-name child-category"
            ><img src="<?php echo Mage::helper('easycatalogimg/image')->resize($this->getImage($_subcategory), 60, 60) ?>"
                width="60"
                height="60"
                alt="<?php echo $this->htmlEscape($_subcategory->getName()) ?>"
            /><?php
            echo $this->htmlEscape($_subcategory->getName());
        ?></a>
    </li>
    ```

3.  Save file and clear the cache
4.  Add the css styles to your theme to make subcategory links look nice:

    ```css
    .easycatalogimg .list-subcategories li {
        background: none !important;
        padding: 0 !important;
        line-height: 60px !important;
    }
    .easycatalogimg .list-subcategories li a {
        text-decoration: none !important;
    }
    .easycatalogimg .list-subcategories li img {
        margin-right: 4px !important;
    }
    ```

### Compatibility issues

#### Amasty Shopby extension

Extension option 'Hidden, when filter or pagination is used' does not work properly with Shopby extension from Amasty.

Solving - remove few lines at `app/code/local/Amasty/Shopby/Block/Catalog/Layer/View.php` in method `_prepareLayout()`. Below is code that has to be removed/commented:

```php
if($productsBlock = Mage::app()->getLayout()->getBlock('category.products')) {
    $productsBlock->getCmsBlockHtml();
}
```
