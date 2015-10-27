---
layout: default
title: Argento theme small changes
description: How to apply small changes to argento theme
keywords: "argento, argento design, argento customization, customize argento"
category: Argento
---

# Small changes

1. [Backend configurator](#backend-configurator)
2. [Custom styles and javascript](#custom-styles-and-javascript)
3. [Custom layout update file](#custom-layout-update-file)

### Backend configurator

Basic customization is available with Magento backend configuration since
version 1.3.0 (See the `System > Configuration > Templates Master`).

**Available configurable styles**

* Background
  * Body
  * Header
  * Footer
  * Content
* Top navigation for desktop and mobile devices
  * Top level styles
  * Rest of the levels
* Sidebar blocks font and background
* Tabs on the homepage and product page
* Fonts
  * Page title
  * Block title
  * Product name link in listing
  * Product page collateral titles
* Ability to set the custom css styles
* Ability to include additional head links

_**Each theme has different elements to customize**_

### Custom styles and javascript

 1. Create `custom.css` or `custom.js` file inside active argento theme skin
 folder.

    For example:

    ```
    skin/frontend/argento/argento/css/custom.css
    skin/frontend/argento/mall/css/custom.css
    ```

    OR

    ```
    skin/frontend/argento/argento/js/custom.js
    skin/frontend/argento/mall/js/custom.js
    ```

 2. Add css/js code to the new file and save it
 3. Flush Magento cache

### Custom layout update file

*This feature is available since Argento 1.5.2.*

Argento will automatically include `custom.xml` file from active theme layout
directory. All you need is just to create `custom.xml` file and include your
changes to it.

For example:

```
app/design/frontend/argento/argento/layout/custom.xml
app/design/frontend/argento/mall/layout/custom.xml
```

Example of file contents:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<layout version="0.1.0">
    <default>
        <remove name="left.newsletter"/>
    </default>
</layout>
```
