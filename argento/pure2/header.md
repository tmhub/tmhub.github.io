---
layout: default
title: Argento Pure 2.0 Header
description: ArgentoPure 2.0 header configuration
keywords: "ArgentoPure, pure, pure2, header, logo, search, navigation, sticky navigation"
category: Argento
---

# Argento Pure 2.0 Header

![Pure 2.0 header](/images/argento/pure2/header/header.png)

### Logo

###### Step 1

To replace demo logo with your own, please upload your image to
`skin/frontend/argento/pure2_custom/images/logo.png` via ftp manager.

If your image has different name or file format, you will need to proceed to step 2.

###### Step 2

Navigate to Magento configuration: `System > Configuration > Design > Header` and
change values of `Logo Image Src` and `Small Logo Image Src` options according
to your file name.

###### Step 3

In order to provide sharp images for devices with high DPI ratio (retina displays),
you'll need to upload twice large logo's as follows:

`skin/frontend/argento/pure2_custom/images/logo@2x.png` in case if original logo
name was `logo.png`

OR

`skin/frontend/argento/pure2_custom/images/logoname@2x.gif` in case if original logo
name was `logoname.gif`

### Search

Pure 2.0 theme utilize AjaxSearch module for the search functionality. You can
configure Suggestion popup and Search engine settings at
`System > Configuration > Templates-Master > Ajax Search`

### Navigation

Pure 2.0 theme utilize [NavigationPro](/navigationpro/) module for top navigation.
You can configure Menu items at `Templates-Master > Navigation Pro`.

Please read the following docs about NavigationPro features:

- [NavigationPro docs](/navigationpro/)
- [Argento Navigation Setup](/argento/navigation-setup/)

### Sticky Navigation

Sticky navigation is enabled by default for wide and long screens. If you would
like to disable sticky navigation, you can use the following methods:

 -  [Argento Pure 2.0 configuration](/argento/pure2/configuration/#sticky-header-and-sidebar)
 -  Disable Sticky Navigation using [custom layout update file](/argento/theme-customization/small-changes/#custom-layout-update-file)

    ```
    <remove name="sticky_header"/>
    ```
