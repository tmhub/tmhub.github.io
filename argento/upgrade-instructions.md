---
layout: default
title: Argento Upgrade Instructions
description: Argento Upgrade Instructions
keywords: "argento update, argento upgrade"
category: Argento
---

# Argento Upgrade Instructions

### Version 1.7.0 — 1.7.1

 -  Backup all your changes
 -  Put the store on maintenance mode.
 -  Navigate to `System > Tools > Compilation` and disable compilation.
 -  Unpack new Argento version over the old one.
 -  Delete following files:

    ```
    app/code/local/TM/SoldTogether/controllers/Adminhtml/CustomerController.php
    app/code/local/TM/SoldTogether/controllers/Adminhtml/OrderController.php
    ```

 -  Navigate to `System > Cache Management` flush cache storage and disable cache.

### Version 1.6.1 — 1.6.2

- Backup all your changes
- Put the store to the maintenance mode.
- Navigate to `System > Tools > Compilation` and disable compilation.
- If you've made a changes into `local.xml`, save them separately,
    because it's content will be erased.
- Unpack the new Argento version over the old one.
- Navigate to `System > Cache Management` flush cache storage and disable cache.


### Version 1.6.0 — 1.6.1

- Backup all your changes
- Put the store to the maintenance mode.
- Navigate to `System > Tools > Compilation` and disable compilation.
- Unpack the new Argento version over the old one.
- Navigate to `System > Cache Management` flush cache storage and disable cache.
- Navigate to `Templates Master > Modules` and update themes.

**Update homepage content**

Replace following string with the new ones:

```
all_title > page_title
grid-link.phtml > grid.phtml
```

For example:

```diff
<div class="promo-home-content col2-set">
    <div class="col-1">
        <div class="tab-container">
-           {% raw %}{{widget type="highlight/product_new" title="New arrivals" products_count="6" column_count="3" template="tm/highlight/product/grid-link.phtml" class_name="highlight-new" all_title="See all new products"}}
-           {{widget type="highlight/product_special" title="Sale" products_count="6" column_count="3" template="tm/highlight/product/grid-link.phtml" class_name="highlight-special" all_title="See all on sale products"}}
+           {{widget type="highlight/product_new" title="New arrivals" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-new" page_title="See all new products &raquo;"}}
+           {{widget type="highlight/product_special" title="Sale" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-special" page_title="See all on sale products &raquo;"}}{% endraw %}
            {{widget type="highlight/product_attribute_yesno" attribute_code="coming_soon" title="Coming soon" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-attrbiute-coming_soon"}}
        </div>
```

### Version 1.5.4 — 1.6.0

 -  Backup all your changes
 -  Put the store to the maintenance mode.
 -  Navigate to `System > Tools > Compilation` and disable compilation.
 -  Unpack the new Argento version over the old one.
 -  Navigate to `System > Cache Management` flush cache storage and disable cache.
 -  Navigate to `Templates Master > Modules` and update themes.
 -  Remove the following files:

    ```
    app/design/frontend/argento/default/layout/FacebookLB.xml
    app/design/frontend/argento/default/template/facebooklb
    skin/frontend/argento/default/images/bg_x.png
    skin/frontend/argento/default/js/app.js
    ```

### Version 1.5.3 — 1.5.4

- Backup all your changes
- Put the store to the maintenance mode.
- Navigate to `System > Tools > Compilation` and disable compilation.
- Unpack the new Argento version over the old one.
- Navigate to `System > Cache Management` flush cache storage and disable cache.
- Navigate to `Templates Master > Modules` and update themes.
- Remove the `app/design/frontend/argento/default/template/tm/lightboxpro` folder from Argento theme.

### Version 1.5.2 — 1.5.3

- Backup all your changes
- Put the store to the maintenance mode.
- Navigate to `System > Tools > Compilation` and disable compilation.
- [Prepare your logo for mobile devices](/argento/faq/#prepare-logo-image-for-mobile-device)
- Unpack the new Argento version over the old one.
- Navigate to `System > Cache Management` flush cache storage and disable cache.
- Navigate to `Templates Master > Modules` and update themes
- If you are using Magento 1.7 or older - proceed to [1.7 guide](/argento/faq/#magento-17-and-older)

### Version 1.5.1 — 1.5.2

 -  Backup all your changes
 -  Navigate to `System > Tools > Compilation` and disable compilation.
 -  Navigate to `System > Cache Management` flush cache storage and disable cache.
 -  Unpack the new Argento version over the old one.
 -  Remove the following files from the filesystem:

    ```
    app/design/frontend/argento/default/layout/prolabels.xml
    app/design/frontend/argento/default/template/customer/account/navigation.phtml
    ```

 -  Navigate to `Templates-Master > Easytabs` and edit the review and tags titles:

    ```
    Reviews: Reviews&nbsp;({% raw %}{{eval code="getReviewsCollection()->count()"}}{% endraw %})
    Tags: Tags&nbsp;({% raw %}{{eval code="getCount()"}}{% endraw %})
    ```

 -  ArgentoPure homepage changes

    Find the following code:

    ```js
    <script type="text/javascript">
        new TabBuilder();
    </script>
    ```

    Replace it with:

    ```js
    <script type="text/javascript">
        new TabBuilder();
        new IScroll($$('.tab-container .tabs-wrapper')[0], {
            click: true,
            tap  : true,
            bindToWrapper: true,
            scrollX: true,
            scrollY: false
        });
    </script>
    ```

 -  ArgentoMall homepage changes

    Find the following code:

    ```html
    <div class="col3-set">
        <div class="col-1">
            {% raw %}{{block type="highlight/product_special" name="homepage.special" title="Deal of the week" class_name="block block-alt" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}{% endraw %}
        </div>
        <div class="col-2">
            {% raw %}{{block type="highlight/product_attribute_yesno" attribute_code="recommended" class_name="editor-choice  block block-alt" name="homepage.editor_choice" title="Editor choice" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}{% endraw %}
        </div>
    ```

    and replace it with:

    ```html
    <div class="col3-set">
        <div class="col-1 col-mobile-50">
            {% raw %}{{block type="highlight/product_special" name="homepage.special" title="Deal of the week" class_name="block block-alt" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}{% endraw %}
        </div>
        <div class="col-2 col-mobile-50">
            {% raw %}{{block type="highlight/product_attribute_yesno" attribute_code="recommended" class_name="editor-choice  block block-alt" name="homepage.editor_choice" title="Editor choice" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}{% endraw %}
        </div>
    ```

 -  Navigate to `Templates Master > Modules` in Magento backend
    - Press `Manage` link on your active theme (If you use multiple themes, click on each one)
    - Without selecting anything, press `Run` button to call the upgrade operations
 - That's all. You are now using Argento 1.5.2

### Version 1.4.0 — 1.5.0

 -  Backup all your changes
 -  Navigate to `System > Tools > Compilation` and disable compilation.
 -  Navigate to `System > Cache Management` flush cache storage and disable cache.
 -  Unpack the new Argento version over the old one.
 -  Navigate to `Templates Master > Modules` in Magento backend
    - Press `Manage` link on your active theme (If you use multiple themes, click on each one)
    - Without selecting anything, press `Run` button to call the upgrade operations
 -  That's all. You are now using Argento 1.5.0

### Version 1.3.2 — 1.4.0

 -  Eastabs class was renamed from .tabs to .easytabs. If you where using backend
    theme configurator then you need to open and save it again.
 -  Remove the following files:

    ```
    app/design/frontend/argento/default/template/page/html/notices.phtml
    ```

 -  Navigate to System > Tools > Compilation and run compilation process if you
    are using it. Otherwise proceed to the next step.
 -  Navigate to System > Cache Management and flush cache storage.
 -  That's all. You are now using Argento 1.4.0

### Version 1.3.0 — 1.3.1

- Navigate to Templates Master > Modules and run Argento upgrades
- Navigate to System > Tools > Compilation and run compilation process if you are using it. Otherwise proceed to the next step.
- Navigate to System > Cache Management and flush cache storage.
- That's all. You are now using Argento 1.3.1

The following files are not used anymore and could be deleted:

```
app/design/adminhtml/default/default/layout/easytabs.xml
app/design/adminhtml/default/default/layout/soldtogether.xml
app/design/frontend/argento/default/layout/ajaxsearch.xml
app/design/frontend/argento/default/layout/easycatalogimg.xml
app/design/frontend/argento/default/layout/soldtogether.xml
app/design/frontend/argento/default/template/ajaxsearch
app/design/frontend/argento/default/template/soldtogether
app/design/frontend/base/default/layout/easytabs.xml
app/design/frontend/base/default/template/easytabs
app/design/frontend/default/default/layout/ajaxsearch.xml
app/design/frontend/default/default/layout/easycatalogimg.xml
app/design/frontend/default/default/layout/soldtogether.xml
app/design/frontend/default/default/template/ajaxsearch
app/design/frontend/default/default/template/soldtogether
media/catalog/category/easycatalogimg/no_image.gif
skin/frontend/argento/default/css/ajaxsearch.css
skin/frontend/argento/default/css/easycatalogimg.css
skin/frontend/argento/default/css/soldtogether.css
skin/frontend/argento/default/images/ajaxsearch
skin/frontend/argento/default/images/soldtogether
skin/frontend/argento/default/js/ajaxsearch.js
skin/frontend/base/default/css/easytabs.css
skin/frontend/default/default/css/ajaxsearch.css
skin/frontend/default/default/css/easycatalogimg.css
skin/frontend/default/default/css/soldtogether.css
skin/frontend/default/default/images/ajaxsearch
skin/frontend/default/default/images/soldtogether/Plus.png
skin/frontend/default/default/js/ajaxsearch.js
```

### Version 1.2.0 — 1.3.0

 -  Rename the following files and directories. You can also remove them, but rename
    is safe in case if you've made some modifications and do not want to lost them.

    These files will now be taken from `app/design/frontend/base/default`
    and `skin/frontend/base/default` folders:

    ```
    app/design/frontend/argento/argento/template/page/html/head.phtml => app/design/frontend/argento/argento/template/page/html/head.phtml.off
    app/design/frontend/argento/default/layout/askit.xml              => app/design/frontend/argento/default/layout/askit.xml.off
    app/design/frontend/argento/default/layout/customer.xml           => app/design/frontend/argento/default/layout/customer.xml.off
    app/design/frontend/argento/default/layout/easytabs.xml           => app/design/frontend/argento/default/layout/easytabs.xml.off
    app/design/frontend/argento/default/template/askit                => app/design/frontend/argento/default/template/askit.off
    app/design/frontend/argento/default/template/easytabs             => app/design/frontend/argento/default/template/easytabs.off
    app/design/frontend/argento/pure/template/page/html/head.phtml    => app/design/frontend/argento/pure/template/page/html/head.phtml.off
    app/design/frontend/default/default/layout/askit.xml              => app/design/frontend/default/default/layout/askit.xml.off
    app/design/frontend/default/default/layout/easytabs.xml           => app/design/frontend/default/default/layout/easytabs.xml.off
    app/design/frontend/default/default/template/askit                => app/design/frontend/default/default/template/askit.off
    app/design/frontend/default/default/template/easytabs             => app/design/frontend/default/default/template/easytabs.off
    skin/frontend/argento/default/css/askit.css                       => skin/frontend/argento/default/css/askit.css.off
    skin/frontend/argento/default/css/easytabs.css                    => skin/frontend/argento/default/css/easytabs.css.off
    skin/frontend/argento/default/images/thumb_down_askit.png         => skin/frontend/argento/default/images/thumb_down_askit.png.off
    skin/frontend/argento/default/images/thumb_up_askit.png           => skin/frontend/argento/default/images/thumb_up_askit.png.off
    skin/frontend/argento/default/js/askit.js                         => skin/frontend/argento/default/js/askit.js.off
    skin/frontend/default/default/css/askit.css                       => skin/frontend/default/default/css/askit.css.off
    skin/frontend/default/default/css/easytabs.css                    => skin/frontend/default/default/css/easytabs.css.off
    skin/frontend/default/default/images/thumb_down_askit.png         => skin/frontend/default/default/images/thumb_down_askit.png.off
    skin/frontend/default/default/images/thumb_up_askit.png           => skin/frontend/default/default/images/thumb_up_askit.png.off
    skin/frontend/default/default/js/askit.js                         => skin/frontend/default/default/js/askit.js.off
    ```

 -  If you have had manually configured EasyTabs extension, then you need to
    navigate to `TemplatesMaster > EasyTabs` and configure it again.
 -  Navigate to `System > Tools > Compilation` and run compilation process if you
    are using it. Otherwise proceed to the next step.
 -  Navigate to `System > Cache Management` and flush cache storage.
 -  That's all. You are now using Argento 1.3.0
