---
layout: default
title: Argento Pure 2.0 Footer
description: ArgentoPure 2.0 footer configuration
keywords: "ArgentoPure, pure, pure2, footer, social icons, links, call us"
category: Argento
---

# Argento Pure 2.0 Footer

![Pure 2.0 footer](/images/argento/pure2/footer/footer.png)

### Social icons

You can add or remove additional links in `Cms > Static Blocks > footer_social` block.

Here is a full list of supported icons right "from the box":

```html
<div class="block block-social">
    <ul class="icons">
        <li class="twitter"><a href="twitter.com">Twitter</a></li>
        <li class="facebook"><a href="facebook.com">Facebook</a></li>
        <li class="youtube"><a href="youtube.com">YouTube</a></li>
        <li class="rss"><a href="rss.com">Rss</a></li>
        <li class="gplus"><a href="plus.google.com">Google+</a></li>
        <li class="linkedin"><a href="linkedin.com">LinkedIn</a></li>
        <li class="pinterest"><a href="pinterest.com">Pinterest</a></li>
    </ul>
</div>
```

You can add icon of any other site or service (instagram, wikipedia, vimeo etc). Use custom CSS code below to do this:

```css
.footer-cms .block-social .icons .custom_class_name { background: <default_color>; }
.footer-cms .block-social .icons .custom_class_name:hover { background: <hover_color>; }
.footer-cms .block-social .icons .custom_class_name a:before { content: '\<fa_hex_code>'; }
```

`custom_class_name` - replace with your CSS class name.

`<default_color>` - color of icon.

`<hover_color>` - color of icon when cursor points on it.

`\<fa_hex_code>` - hex code of font-awesome symbol (if hex code is `[&#xf259;]`, then `<fa_hex_code>` = `f259`). Font-awesome symbols with its codes you can find at [Font-Awesome Cheatsheet](https://fortawesome.github.io/Font-Awesome/cheatsheet/).

Add modified [custom CSS](../../theme-customization/small-changes/#custom-styles-and-javascript) to your theme. And add html to footer_social block.

```html
<li class="custom_class_name"><a href="someurl">icon title</a></li>
```

#### Add instagram to social icons

Here is ready to use CSS and HTML code according to instruction above.

Custom CSS:

```css
.footer-cms .block-social .icons .instagram { background: #ccc; }
.footer-cms .block-social .icons .instagram:hover { background: #325b83; }
.footer-cms .block-social .icons .instagram a:before { content: '\f16d'; }
```

HTML for footer_social:

```html
<li class="instagram"><a href="instagram.com">Instagram</a></li>
```

### Company information, Call Us

You can add or remove additional links, change phone number and text in
`Cms > Static Blocks > footer` block.

### Short footer layout

Short footer layout is used on checkout page to increase conversion rate.

You can disable short footer using [custom layout update file](/argento/theme-customization/small-changes/#custom-layout-update-file)

```
<short_header_footer>
    <reference name="footer">
        <action method="setTemplate"><template>page/html/footer.phtml</template></action>
    </reference>
</short_header_footer>
```
