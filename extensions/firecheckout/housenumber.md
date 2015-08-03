---
layout: default
title: Housenumber field
permalink: /firecheckout/housenumber/
description: Converting second street line into househumber field
keywords: housenumber
category: Firecheckout
---

# Housenumber field

Firecheckout can convert the second street line field into housenumber.
All you need is to call the javascript initialization from firecheckout page.

![Housenumber](https://i.cloudup.com/Xyf-odeu37-3000x3000.png)

Add the following javascript to the firecheckout page:

```javascript
<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    var addressTypes = ['billing', 'shipping'];
    addressTypes.each(function(addressType) {
        if (!$(addressType + '-new-address-form')) {
            return;
        }
        new FireCheckout.Housenumber(addressType, {
            required: ['IE', 'CH'],
            optional: ['*'],
            label: "<?php echo $this->__('House Number') ?>"
        });
    });
});
//]]>
</script>
```

### Example

You can place it to the bottom of `app/design/frontend/base/default/template/tm/firecheckout/checkout.phtml`.

1. Copy this file to your store theme folder: `app/design/frontend/[PACKAGE]/[THEME]/template/tm/firecheckout/checkout.phtml`
2. Add the javascript to the bottom of the file.
