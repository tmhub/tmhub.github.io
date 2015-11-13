---
layout: default
title: Argento Pure Footer
description: Argento Pure footer configuration
keywords: "Argento pure, argento, footer, customer information, links, newsletter subscribe, about us, social icons, copyright"
category: Argento
---

# Argento Pure Footer

![Argento Pure footer](/images/argento/pure/footer.jpg)

### Customer information

You can add or remove additional links, change phone number and text in
`Cms > Static Blocks > footer` block. 

Block code is:

```html
<div class="block block-footer-links">
    <div class="block-title"><span>Customer Information</span></div>
        <div class="block-content">
            <ul class="footer-links">
              <li>
                <ul>
                  <li><a href="{{store direct_url="block"}}">Blog</a></li>
                  <li><a href="{{store direct_url="location"}}">Store locator</a></li>
                  <li><a href="{{store direct_url="media"}}">Media</a></li>
                  <li><a href="{{store direct_url="help-center"}}">Help Center</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="{{store direct_url="customer/account"}}">My Account</a></li>
                  <li><a href="{{store direct_url="sales/order/history"}}">Order Status</a></li>
                  <li><a href="{{store direct_url="wishlist"}}">Wishlist</a></li>
                  <li><a href="{{store direct_url="exchanges"}}">Returns and Exchanges</a></li>
                </ul>
              </li>
              <li class="last">
                <ul>
                  <li><a href="{{store direct_url="our-company"}}">Our Company</a></li>
                  <li><a href="{{store direct_url="about"}}">About us</a></li>
                  <li><a href="{{store direct_url="careers"}}">Careers</a></li>
                  <li><a href="{{store direct_url="shipping"}}">Shipping</a></li>
                </ul>
              </li>
            </ul>
        </div>
    </div>
</div>
```

### About us

You can edit the text in `Cms > Static Blocks > footer` block. 

The block code is:

```html
<div class="block footer-about">
    <div class="block-title"><span>About us</span></div>
        <div class="block-content">
            <p>Argento is more than just another template created for Magento. It was created right from the ground based on the best ecommerce stores practices.</p>
        </div>
    </div>
</div>
```

### Social icons

You can add or remove additional links in `Cms > Static Blocks > footer_social` block.

Here is a full list of supported icons:

```html
<div class="block footer-social">
    <div class="block-title"><span>Join our community</span></div>
        <div class="block-content">
            <ul class="icons">
                <li class="facebook"><a href="facebook.com">Facebook</a></li>
                <li class="twitter"><a href="twitter.com">Twitter</a></li>
                <li class="youtube"><a href="youtube.com">YouTube</a></li>
                <li class="rss"><a href="rss.com">Rss</a></li>
            </ul>
        </div>
    </div>
</div>
```

### Newsletter subscribe

Please use the following code in order to display this block: 

```html
{% raw %}{{block type="newsletter/subscribe" name="newsletter.footer" template="newsletter/subscribe.phtml"}}{% endraw %}
```

### Call us block

```html
<div class="block footer-call-us">
    <div class="block-title"><span>Call us</span></div>
        <div class="block-content">
            <p class="footer-phone">1.800.555.1903</p>
            <p>We're available 24/7. Please note the more accurate the information you can provide us with the quicker we can respond to your query.</p>
        </div>
    </div>
</div>
```

### Copyright block

You can change the copyright block by navigating to `System > Configuration > General > Design`.
The copyright information can be edited in the footer field.

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
