---
layout: default
title: Argento Default Header
description: Argento Default header configuration
keywords: "Argento default, header, logo, search, navigation, sticky navigation"
category: Argento
---

# Argento Default theme Header

![Argento default theme header](/images/argento/default/header.jpg)

### Custom header links block

In order to edit the custom header links block, please navigate to `CMS > Static blocks > header_links`. The default block's code is

```html
    <ul class="links header-links">
    <li class="first"><a href="{% raw %}{{store url=""}}{% endraw %}">support</a></li>
    <li><a href="{{store url=""}}">faq</a></li>
    <li class="last"><a href="{% raw %}{{store url=""}}{% endraw %}">knowledge base</a></li>
    </ul>
```

### Language switcher block

The call of this block is located in `app/design/frontend/argento/default/template/page/html/header.phtml`.

Please look at the Line 33 : `<?php echo $this->getChildHtml('store_language') ?>`

### Welcome message

In order to edit Magento default welcome message string, please go `System > Configuration > Design > Header page`. Make changes in the `Welcome Text field`. 

### Default top links block

This block is based on container created in page.xml file.

```xml
    <block type="page/html_header" name="header" as="header">
     <block type="page/template_links" name="top.links" as="topLinks"/>
```

Each link is created at corresponding module xml file. For example, `My account link` is created in customer.xml file with the following code:

```xml
    <action method="addLink" translate="label title" module="customer">
    <label>My Account</label>
    <url helper="customer/getAccountUrl"/>
    <title>My Account</title>
    <prepare/>
    <urlParams/>
    <position>10</position>
    <liParams/>
    <aParams>rel="nofollow"</aParams>
    </action>
```

### Logo

###### Step 1

In order to replace demo logo with your own, please upload your image to
`skin/frontend/argento/argento/images/logo.gif` via ftp manager.

If your image has different name or file format, you will need to proceed to step 2.

###### Step 2

Navigate to Magento configuration: `System > Configuration > Design > Header` and
change values of `Logo Image Src` and `Small Logo Image Src` options according
to your file name.

###### Step 3

In order to provide sharp images for devices with high DPI ratio (retina displays),
you'll need to upload twice large logo's as follows:

`skin/frontend/argento/argento/images/logo.gif` in case if original logo
name was `logo.gif`

### Header Callout

In order to edit this block, please navigate to `CMS > Static Blocks > Header Collout`.
The default block code is:

```xml
<img width="160" height="60" class="header-callout hidden-phone hidden-tablet" src="{% raw %}{{skin url="images/media/callout_customer_support.gif"}}{% endraw %}" alt="Toll-Free Customer Support 24/7" style="margin: 5px 0 0 50px; max-width: 180px; max-height: 80px;"/>
```

![Argento default theme header callout](/images/argento/default/header-callout.jpg)

### Top Cart block

Argento Default theme utilizes Ajax Pro module for the cart block's functioning in the top of the page. You can find the code in `app/design/frontend/argento/default/template/ajaxpro/top/headerCart.phtml`.

### Search

Argento Default theme utilizes Ajax Search module for the search functionality. You can
configure Suggestion popup and Search engine settings at
`System > Configuration > Templates-Master > Ajax Search`

### Navigation

Argento Default theme utilizes [NavigationPro](/navigationpro/) module for top navigation.
You can configure Menu items at `Templates-Master > Navigation Pro`.

Please read the following docs about NavigationPro features:

- [NavigationPro docs](/navigationpro/)
- [Argento Navigation Setup](/argento/navigation-setup/)


