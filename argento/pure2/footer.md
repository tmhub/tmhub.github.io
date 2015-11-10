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

Here is a full list of supported icons:

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
