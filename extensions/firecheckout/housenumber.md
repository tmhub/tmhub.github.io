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

 1. Create `custom.js` file - [Using custom.css and custom.js][custom_js]
 2. Add the following code inside created `custom.js`

    ```js
    document.observe('dom:loaded', function() {
        var addressTypes = ['billing', 'shipping'];
        addressTypes.each(function(addressType) {
            if (!$(addressType + '-new-address-form')) {
                return;
            }
            new FC.Housenumber(addressType, {
                required: ['IE', 'CH'],
                optional: ['*'],
                label: Translator.translate('House Number')
            });
        });
    });
    ```

 3. Let's translate the field! Create `custom.phtml` file -
    [Using custom.phtml][custom_phtml]
 4. Add the following content into this file:

    ```html
    <script>
        Translator.add('House Number', "<?php echo $this->__('House Number') ?>");
    </script>
    ```

 5. Add translations to your theme csv file -
    `app/design/frontend/argento/default/locale/de_DE/translate.csv`:

    ```csv
    "House Number","Hausnummer"
    ```

#### Result:

![Housenumber](https://i.cloudup.com/Xyf-odeu37-3000x3000.png)

[custom_js]: /extensions/firecheckout/using-customcss-and-customjs/#add-custom-javascript-at-firecheckout-page "How to use custom.js file"
[custom_phtml]: /extensions/firecheckout/using-customphtml/ "How to use custom.phtml file"
