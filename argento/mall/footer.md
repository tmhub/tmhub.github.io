---
layout: default
title: Argento Mall Footer
description: Argento Mall footer configuration
keywords: "ArgentoMall, argento, footer, company information, links, copyright, contacts"
category: Argento
---

# Argento Mall Footer

![Argento Mall footer](/images/argento/mall/footer.jpg)

### Company information

You can add or remove additional links, change phone number and text in
`Cms > Static Blocks > footer` block. 

Block code is:

```html
<div class="box footer-links-cms">
    <div class="head"><span>Informational</span></div>
    <ul class="col2-set">
        <li class="col-1">
            <ul>
                <li><a href="{{store direct_url="about"}}">About Us</a></li>
                <li><a href="{{store direct_url="our-company"}}">Our company</a></li>
                <li><a href="{{store direct_url="press"}}">Press</a></li>
                <li><a href="{{store direct_url="contacts"}}">Contact Us</a></li>
                <li><a href="{{store direct_url="location"}}">Store location</a></li>
            </ul>
        </li>
        <li class="last col-2">
            <ul>
                <li><a href="{{store direct_url="privacy"}}">Privacy policy</a></li>
                <li><a href="{{store direct_url="delivery"}}">Delivery information</a></li>
                <li><a href="{{store direct_url="returns"}}">Returns policy</a></li>
            </ul>
        </li>
    </ul>
</div>
```

### Additional links block

You can find the code of the block at `app/design/frontend/base/default/layout/page.xml` file.

```xml
<block type="page/html_footer" name="footer" as="footer" template="page/html/footer.phtml">
<block type="page/template_links" name="footer_links" as="footer_links" template="page/template/links.phtml"/>
```

Please notice, that all links are collected from different xml files. For example, if you want to edit the Advanced search link, you have to find `app/design/frontend/base/default/layout/catalogsearch.xml` file. Then please enter the following code:

```xml
<reference name="footer_links">
    <action method="addLink" translate="label title" module="catalogsearch" ifconfig="catalog/seo/search_terms">
        <label>Search Terms</label>
        <url helper="catalogsearch/getSearchTermUrl" />
        <title>Search Terms</title>
    </action>
    <action method="addLink" translate="label title" module="catalogsearch">
        <label>Advanced Search</label>
        <url helper="catalogsearch/getAdvancedSearchUrl" />
        <title>Advanced Search</title>
    </action>
</reference>
```
### Copyright block

You can change the copyright block by navigating to `System > Configuration > General > Design`.
The copyright information can be edited in the footer field.

