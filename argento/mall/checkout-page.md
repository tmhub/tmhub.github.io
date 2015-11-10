---
layout: default
title: Argento Mall Checkout Page
description: Argento Mall checkout page
keywords: "Argento, argento mall checkout, short header and footer layout"
category: Argento
---

# Argento Mall Checkout Page

### Short header and footer layout

Short header and footer layout is used to increse conversion rate.

You can disable short header and footer using [custom layout update file][custom_xml]

```xml
<short_header_footer>
    <reference name="header">
        <action method="setTemplate"><template>page/html/header.phtml</template></action>
    </reference>
    <reference name="footer">
        <action method="setTemplate"><template>page/html/footer.phtml</template></action>
    </reference>
</short_header_footer>
```

[custom_xml]: /argento/theme-customization/small-changes/#custom-layout-update-file "custom.xml layout"
