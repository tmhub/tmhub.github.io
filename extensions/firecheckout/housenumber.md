---
layout: default
title: Housenumber field
description: Converting second street line into househumber field
keywords: housenumber
category: Firecheckout
---

# Housenumber field

Firecheckout can convert the second street line field into housenumber.
All you need is to call the javascript initialization from firecheckout page.

 1. Create `custom.js` file. [Using custom.css and custom.js][custom_js]
 2. Add the following code inside created `custom.js`

    ```javascript
    <script type="text/javascript">
    //<![CDATA[
    document.observe('dom:loaded', function() {
        var addressTypes = ['billing', 'shipping'];
        addressTypes.each(function(addressType) {
            if (!$(addressType + '-new-address-form')) {
                return;
            }
            new FC.Housenumber(addressType, {
                required: ['IE', 'CH'],
                optional: ['*'],
                label: "<?php echo $this->__('House Number') ?>"
            });
        });
    });
    //]]>
    </script>
    ```

#### Result:

![Housenumber](https://i.cloudup.com/Xyf-odeu37-3000x3000.png)

[custom_js]: /extensions/firecheckout/using-customcss-and-customjs/#add-custom-javascript-at-firecheckout-page "How to use custom.js file"
