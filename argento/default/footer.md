---
layout: default
title: Argento Default theme Footer
description: Argento Default theme footer configuration
keywords: "ArgentoArgento, default, argento default, footer, social icons, links, copyright, contacts"
category: Argento
---

# Argento Default Theme Footer

![Argento Default theme footer](/images/argento/default/footer-links.jpg)

### Newsletter block

You can find the Code of the block at `app/design/frontend/argento/default/template/newsletter/subscribe.phtml` file.

### Social icons

You can add or remove additional links in `Cms > Static Blocks > footer_social` block.

Here is a full list of supported icons:

```html
<div class="footer-social">
  <span class="label">Join our community</span>
  <ul class="icons">
    <li class="facebook"><a href="facebook.com">Facebook</a></li>
    <li class="twitter"><a href="twitter.com">Twitter</a></li>
    <li class="youtube"><a href="youtube.com">YouTube</a></li>
    <li class="rss"><a href="rss.com">Rss</a></li>
  </ul>
</div>
```

### Company information

You can add or remove additional links, change phone number and text in
`Cms > Static Blocks > footer` block. 

Block code is:

```html
<ul class="footer-links">
  <li><div class="h6">About us</div>
    <ul>
      <li><a href="{{store direct_url="about"}}">About Us</a></li>
      <li><a href="{{store direct_url="our-company"}}">Our company</a></li>
      <li><a href="{{store direct_url="carriers"}}">Carriers</a></li>
      <li><a href="{{store direct_url="shipping"}}">Shipping</a></li>
    </ul>
  </li>
  <li><div class="h6">Customer center</div>
    <ul>
      <li><a href="{{store direct_url="customer/account"}}">My Account</a></li>
      <li><a href="{{store direct_url="sales/order/history"}}">Order Status</a></li>
      <li><a href="{{store direct_url="wishlist"}}">Wishlist</a></li>
      <li><a href="{{store direct_url="exchanges"}}">Returns and Exchanges</a></li>
    </ul>
  </li>
  <li><div class="h6">Info</div>
    <ul>
      <li><a href="{{store direct_url="privacy"}}">Privacy policy</a></li>
      <li><a href="{{store direct_url="delivery"}}">Delivery information</a></li>
      <li><a href="{{store direct_url="returns"}}">Returns policy</a></li>
    </ul>
  </li>
  <li class="last"><div class="h6">Contacts</div>
    <ul>
      <li><a href="{{store direct_url="contacts"}}">Contact Us</a></li>
      <li><a href="{{store direct_url="location"}}">Store location</a></li>
    </ul>
  </li>
</ul>
```

### Contacts block

You can edit the contacts at `Cms > Static Blocks > footer_contacts`.

Block code is:

```html
<div class="footer-contacts">
  <div class="h6">Visit Argento  Store</div>
  <address>
    221B Baker Street<br/>
    West Windsor, NJ  08550<br/>
    <strong>1.800.555.1903</strong><br/>
  </address>
  <a href="{{store url="map"}}">get directions</a><br/>
  <img width="200" height="60" style="margin-top: 10px;" src="{{skin url="images/security_sign.gif"}}" srcset="{{skin url="images/security_sign@2x.gif"}} 2x" alt="Security Seal"/>
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

### Short footer layout

Short footer layout is used on checkout page to increase conversion rate.

You can disable short footer using [custom layout update file](/argento/theme-customization/small-changes/#custom-layout-update-file)

```xml
<short_header_footer>
    <reference name="footer">
        <action method="setTemplate"><template>page/html/footer.phtml</template></action>
    </reference>
</short_header_footer>
```
