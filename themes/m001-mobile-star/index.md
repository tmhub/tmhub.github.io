---
layout: default
title: Magento Mobile Star Theme (M001)
description: Magento mobile star theme documentation
keywords: "Magento Mobile Star Theme, m001"
category: m001
---

## Mobile Star theme installation

#### Copy all files into your magento directory

 Simply copy all files from "template source x.x.x" directory into your magento store directory.

#### Turn your magento cache off

 Navigate to ```Admin -> System -> Manage Cache``` and disable cache for your store.

#### Adjust WISIWYG editor settings

 Navigate to ```Admin -> System -> Configuration > Content Management``` and set WYSIWYG editor to "Disabled by Default" mode.

#### Install homepage

 You don't need to make any changes to your homepage.
 However, if you want to add some blocks to the homepage, navigate to ```Admin -> CMS -> Manage Pages -> Homepage```

 1. Change content of Layout Update XML at Design tab to add some blocks
 2. Use ```reference="content.mobile"``` instead of ```reference="content"```

#### Modify default slider

 Change default slider at ```Admin -> CMS -> Easyslide```

#### Create static blocks

 Navigate to ```Admin -> CMS -> Static Blocks```

 1. Create block ```homepage``` with following code:

    ```html
    {% raw %}{{block type="easyslide/slider" name="homepage.m001" slider_id="default_m001"}}
    {{block type="catalog/navigation" name="home.nav" template="catalog/navigation/top.phtml"}}
    <script type="text/javascript">
     new MobileNavigation();
    </script>

    {{widget type="highlight/product_new" title="New Products" products_count="4" template="highlight/product/sidebar/list.phtml" class_name="highlight-new"}}
    {{widget type="highlight/product_special" title="Special Products" products_count="4" template="highlight/product/sidebar/list.phtml" class_name="highlight-special"}}
    {{widget type="highlight/product_reports_viewed" title="Recently Viewed" products_count="15" template="highlight/product/sidebar/list.phtml" class_name="highlight-recently"}}

    {{block type="newsletter/subscribe" name="left.newsletter" template="newsletter/subscribe.phtml"}}{% endraw %}
    ```

 2. Create block ```footer_links_mobile``` with following code:

    ```html
    <ul>
        <li><a href="{% raw %}{{store direct_url="about-magento-demo-store"}}{% endraw %}">About Us</a></li>
        <li><a href="{% raw %}{{store direct_url="customer-service"}}{% endraw %}">Customer Service</a></li>
        <li class="last"><a href="{% raw %}{{store direct_url="contacts"}}{% endraw %}">Contact Us</a></li>
    </ul>
    ```

#### Add "Switch to desktop" and "Switch to mobile version" links

 1. Navigate to ```Admin->Cms->Static Blocks``` page and open ```footer_links_mobile``` block. Add the following content to the bottom of the block:

    ```html
    <ul>
        <li class="last"><a href="{% raw %}{{store direct_url="mobileswitcher/index/desktop"}}{% endraw %}" rel="nofollow">Desktop Version</a></li>
    </ul>
    ```

 2. Open the ```footer_link``` static block of your desktop theme and add the following link to it:

    ```html
    <a href="{% raw %}{{store direct_url="mobileswitcher/index/mobile"}}{% endraw %}" rel="nofollow">Mobile Version</a>
    ```

#### Selecting Theme in admin configuration
 Please navigate to ```Admin -> System -> Configuration -> Design -> Themes``` and add exception `m001` to the fields Layouts, Templates and Skins. Please also add Matched Expression in order to detect mobile devices
 ```iPhone|iPod|BlackBerry|Palm|Googlebot-Mobile|Mobile|mobile|mobi|Windows Mobile|Safari Mobile|Android|Opera Mini```

#### That's all. Navigate to your home page and check how your new store looks.
 If you have any problems with templates installtion please contact us at [templates-master.com/contacts/](http://templates-master.com/contacts/) and we will help you with template installation for free.