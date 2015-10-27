---
layout: default
title: Argento Top Navigation Setup
description: How to make Argento-like top navigation menu
category: Argento
---

# Argento Top Navigation

### Contents

- [Home Link](#home-link)
- [Shop By dropdown](#shop-by-dropdown)
- [Categories dropdown](#categories-dropdown)
- [Featured Product dropdown](#featured-product-dropdown)
- [EasyBanner dropdown](#easybanner-dropdown)
- [Special Products dropdown](#special-products-dropdown)
- [Brands dropdown](#brands-dropdown)

### Home Link

 1. Navigate to `Templates-Master > NavigationPro` and expand top menu in left tree
 2. Choose first visible category

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 3. Switch to `Siblings` tab and add new sibling with following values:

    ```
    Content: <a href="{% raw %}{{store url='home'}}{% endraw %}" title="Home" class="nav-a">Home</a>
    Sort Order: -30
    ```

    ![Sibling](http://i.imgur.com/nxrczcE.png)

### Shop By dropdown

![Shopby](http://i.imgur.com/gZOgXcx.png)

 1. Navigate to `Templates-Master > NavigationPro` and expand top menu in left tree
 2. Select first visible category

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 3. Switch to `Siblings` tab and add new sibling with following values:

    ```
    Content: Shop By
    Sort Order: -20
    Dropdown CSS styles: width: 960px; padding: 10px 0;
    Dropdown content: Insert Easy Catalog Images widget using WYSIWYG editor
    ```

    Don't forget to set `Root category` field for Easy Catalog Images widget

    ![Shop By](http://i.imgur.com/fxNPQts.png)

### Categories dropdown

![Categories](http://i.imgur.com/KpsrzRE.png)

 1. Navigate to `Templates-Master > NavigationPro` and expant top menu in left tree
 2. Choose first visible category

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 3. Switch to `Siblings` tab and new sibling with following values:

    ```
    Content: Categories
    Sort Order: -10
    Dropdown css styles: width: 660px; padding: 10px 0; text-align:left;
    Dropdown Content: Insert Easy Catalog Images widget using WYSIWYG editor
    ```

    ![Categories](http://i.imgur.com/vozeysA.png)

### Featured Product dropdown

![Featured Product dropdown](http://i.imgur.com/z5A6RXE.png)

 1. Make sure that you have set at least one product as featured (Check the
    `featured` attribute value at product edit page)
 2. Navigate to `Templates-Master > NavigationPro` and expand top menu in left tree
 3. Choose category you wish to edit

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 4. Switch to `Dropdown columns` tab, select `Custom` mode and add new column
    with following values:

    ```
    Type: Widget or Plain HTML
    Content: Insert Hightlight: Featured Products widget using WYSIWYG editor
    Width: 450px
    ```

    ![Widget](http://i.imgur.com/gr1p3ie.png)

### EasyBanner dropdown

![books](http://i.imgur.com/6dNSUd8.png)

 1. Navigate to `Templates-Master > EasyBanners > Manage Banners` and add new banner
    that will be shown in dropdown.
 2. Navigate to to `Templates-Master > NavigationPro` and expand top menu in left tree
 3. Choose category to edit

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 4. Switch to `Dropdown columns` tab, select `Custom` mode and add new column
    with following values:

    ```
    Type: Widget or Plain HTML
    Content: Insert EasyBanner widget using WYSIWYG editor
    Width: 220px
    Sort Order: 50
    ```

    ![Easybanner column settings](http://i.imgur.com/2hHyjVR.png)

### Special Products dropdown

![special](http://i.imgur.com/F9xc0ra.png)

 1. Navigate to to `Templates-Master > NavigationPro` and expand top menu in left tree
 2. Choose category to edit

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 3. Switch to `Dropdown columns` tab, select `Custom` mode and add new column
    with following values:

    ```
    Type: Widget or Plain HTML
    Content: Insert Hightlight: Special Products widget using WYSIWYG editor
    Width: 650px
    Sort Order: 55
    ```

    ![Highlight dropdown settings](http://i.imgur.com/s2gns5r.png)

### Brands dropdown

![Brands dropdown](http://i.imgur.com/OVvm3FV.png)

 1. Create Attribute Page using `Templates-Master > AttributePages > ManagePages`
    if didn't create it before.

    Check More at [AttributePages Manual](http://templates-master.com/magento-attributes-and-brands-pages-extension-user-manual)

 2. Navigate to `Templates-Master > NavigationPro` and expand top menu in left tree
 3. Choose category to edit

    ![Selected category](http://i.imgur.com/KePmbGL.png)

 4. Switch to `Siblings` tab and add new sibling with following values:

    ```
    Content: <a class="nav-a hidden-tablet" href="{% raw %}{{store url="brands"}}{% endraw %}">Brands</a>
    Sort Order: 50
    Dropdown css styles: 950px
    Dropdown content: Insert Attribute Page: Option List widget using WYSIWYG editor
    ```

    ![Attribute Page widget settings](http://i.imgur.com/5QZtNxf.png)
