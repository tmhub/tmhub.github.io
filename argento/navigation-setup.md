---
layout: default
title: Argento Top Navigation Setup
permalink: "/argento/navigation-setup/"
description: How to make Argento-like top navigation menu
category: Argento
---

## Argento dropdowns with widgets included

### Contents

1. [Home Link](#home-link)
2. [Shop By subcategories dropdown](#shop-by-subcategories-dropdown)
3. [Categories dropdown](#categories-dropdown)
4. [TV & Video Featured Block](#tv--video-featured-block)
5. [Books EasyBanner in Dropdown](#books-easybanner-in-dropdown)
6. [Sale with Highlight:Special block dropdown](#sale-with-highlightspecial-block-dropdown)
7. [Brands with AttributePages Widget](#brands-with-attributepages-widget)


### Home Link
- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose first category (i.e. TV & Video)

![First Category](http://i.imgur.com/KePmbGL.png)

- Go to "Sibling" tab and add **code** for content field:

```html
<a href="{% raw %}{{store url='home'}}{% endraw %}" title="Home" class="nav-a">Home</a>
```
- Set negative SortOrder to put **Home** before current category (i.e. -30)

![Sibling](http://i.imgur.com/nxrczcE.png)

### Shop By subcategories dropdown

![Shopby](http://i.imgur.com/gZOgXcx.png)

- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose first category (i.e. TV & Video)

![First Category](http://i.imgur.com/KePmbGL.png)

- Go to "Sibling" tab and add **Shop By** to content field
- Set negative SortOrder to put **ShopBy** before current category (i.e. -20)
- Set "Dropdown CSS styles" (i. e. "width: 960px;padding: 10px 0;")

![Shop By](http://i.imgur.com/fxNPQts.png)

- Go to **"Dropdown content"** field and insert following code:

```
{% raw %}{{widget type="easycatalogimg/widget_list" category_id="category/3" category_count="100" subcategory_count="2" column_count="4" show_image="1" image_width="170" image_height="170" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
```
or in Widget interface:

![ECI ](http://i.imgur.com/qWG4Q1X.png)

### Categories dropdown

![Categories](http://i.imgur.com/KpsrzRE.png)

- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose first category (i.e. TV & Video)

![First Category](http://i.imgur.com/KePmbGL.png)

- Go to "Sibling" tab and add **Categories** to content field
- Set negative SortOrder to put **Categories** before current category (i.e. -10)
- Set "Dropdown CSS styles" (i. e. "width: 660px;padding: 10px 0;text-align:left;")

![Categories](http://i.imgur.com/vozeysA.png)

- Go to **"Dropdown content"** field and insert following code:

```
{% raw %}{{widget type="easycatalogimg/list" enabled_for_anchor="1" enabled_for_default="1" category_id="category/3" category_count="100" subcategory_count="100" column_count="3" show_image="0" template="tm/easycatalogimg/list.phtml" category_to_hide="39,42"}}{% endraw %}
```
or in Widget interface:

![EasyCatalogImages](http://i.imgur.com/clbWCrO.png)

### TV & Video Featured Block

![TvVideo](http://i.imgur.com/z5A6RXE.png)

- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose first category (i.e. TV & Video)
- Dropdown columns > Custom > Add New Coumn
- Add Widget or Plain HTML

![Widget](http://i.imgur.com/gr1p3ie.png)

- Content:

```
{% raw %}{{widget type="highlight/product_featured" title="Featured Product" products_count="1" column_count="1" template="tm/highlight/product/list.phtml" class_name="highlight-featured" category_filter="35"}}{% endraw %}
```
- Or insert it in **Widget** interface

![widget](http://i.imgur.com/uVgeAbG.png)

- Set width (i.e. 450px;)

- Make sure that you have set any products as **Featured**

### Books EasyBanner in Dropdown

![books](http://i.imgur.com/6dNSUd8.png)

- Go to `TemplatesMaster>EasyBanners>ManageBanners`
- Create EasyBanner (i. e. "books-category")

![banner1](http://i.imgur.com/CsDQJep.png)
![banner2](http://i.imgur.com/azmolkJ.png)

- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose category (i.e. Books)
- Go to **"Dropdown Columns"**
- Add New Dropdown column
- Set **Type: Widget or Plain HTML**
- Set **Width** (i.e. 220px)
- Set positive **Sort Order** to show right after categories content (i.e. 50)

![widget-settings](http://i.imgur.com/2hHyjVR.png)

- Use WYSIWYG editor to insert **EasyBanner Widget**  to content field (i.e. "books-category" )

![widget-insert](http://i.imgur.com/QHJniGt.png)


### Sale with Highlight:Special block dropdown

![special](http://i.imgur.com/F9xc0ra.png)

- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose category (i.e. Sale)
- Go to "Dropdown columns" tab and add choose **Mode = "Custom"**
- Add New Dropdown column
- Set **Type: Widget or Plain HTML**
- Set **Width** (i.e. 650px)
- Set positive **Sort Order** (i.e. 55)

![specialSettings](http://i.imgur.com/s2gns5r.png)

- Use WYSIWYG editor to insert **Highlight: Special Products**  to content field

![specialWidget](http://i.imgur.com/DmdVZpI.png)

- Or add following **code**

```
{% raw %}{{widget type="highlight/product_special" title="Special Products" products_count="3" column_count="3" template="highlight/grid-short.phtml" class_name="highlight-special-navpro" }}{% endraw %}
```

### Brands with AttributePages Widget

![brands](http://i.imgur.com/OVvm3FV.png)

- Create Attribute Page (.i.e. "brands") using `TemplatesMaster>AttributePages>ManagePages`

( Check More at [AttributePages Manual](http://templates-master.com/magento-attributes-and-brands-pages-extension-user-manual))

- Go to `Admin>TemplatesMaster>NavigationPro>top`
- Choose category (i.e. Sale)
- Go to "Sibling" tab and add URL to content field (i.e. "Brands") that links to your attribute page

```html
<a class="nav-a hidden-tablet" href="{% raw %}{{store url="brands"}}{% endraw %}">Brands</a>
```

- Set positive **SortOrder** to put **Brands** sibling after current category (i.e. 50)
- Set **Dropdown css styles** some width for your dropdown (i.e. 950px)

![brandsDropdown](http://i.imgur.com/5QZtNxf.png)

- Use WYSIWYG editor to insert **AttributePages: Options List**  to **Dropdown content** field

![brandsWidget](http://i.imgur.com/oIMWdnm.png)
