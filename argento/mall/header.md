---
layout: default
title: Argento Mall Header
description: Argento Mall header configuration
keywords: "Argento Mall, header, logo, search, navigation, welcome message, language switcher"
category: Argento
---

# Argento Mall Header

![Argento Mall header](/images/argento/mall/header.jpg)

### Custom header links block

In order to edit the custom header links block, please navigate to `CMS > Static blocks > header_links`. The default block's code is

```html
<ul class="header-links">
    <li class="first"><a href="{{store url="contacts"}}">support</a></li>
    <li><a href="{{store url="faq"}}">faq</a></li>
    <li class="last"><a href="{{store url="knowledgebase"}}">knowledge base</a></li>
</ul>
```

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
`skin/frontend/argento/mall/images/logo.gif` via ftp manager.

If your image has different name or file format, you will need to proceed to step 2.

###### Step 2

Navigate to Magento configuration: `System > Configuration > Design > Header` and
change values of `Logo Image Src` and `Small Logo Image Src` options according
to your file name.

###### Step 3

In order to provide sharp images for devices with high DPI ratio (retina displays),
you'll need to upload twice large logo's as follows:
`skin/frontend/argento/mall/images/logo.gif` in case if original logo
name was `logo.gif`

### Top Cart block

Argento Mall utilizes Ajax Pro module for the cart block's functioning in the top of the page. You can find the code in `app/design/frontend/argento/mall/template/ajaxpro/top/headerCart.phtml`.

### Search

Argento Mall utilizes Ajax Search module for the search functionality. You can
configure Suggestion popup and Search engine settings at
`System > Configuration > Templates-Master > Ajax Search`

### Navigation

Argento Mall utilizes [NavigationPro](/navigationpro/) module for top navigation.
You can configure Menu items at `Templates-Master > Navigation Pro`.

Please read the following docs about NavigationPro features:

- [NavigationPro docs](/navigationpro/)
- [Argento Navigation Setup](/argento/navigation-setup/)


