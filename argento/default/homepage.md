---
layout: default
title: Argento Default theme Homepage
description: Argento Default theme homepage
keywords: "ArgentoArgento, default, argento theme, homepage, slider, easycatalogimages, tabs, highlight, brands, banner"
category: Argento
---

# Argento Default theme Homepage

Homepage content is editable at `Cms > Pages` interface.

### Slider

Slider is powered by EasySlider module. You can manage each slide and animation
effects at `Templates-Master > Easyslide` backend page.

Slider is placed by widget. The following code is used to display
the slider on the homepage:

```html
<div class="col-1">
    {% raw %}{{widget type="easyslide/insert" slider_id="argento_default"}}{% endraw %}
</div>
```
![Slider](/images/argento/default/homepage-slider.jpg)

### Vertical Banners

The banner is powered by EasyBanner module. You can add or configure banners at
`Templates-Master > Easybanner`.

You can look at the code that was used to show the homepage banner:

```html
<div class="col-2 hidden-tablet hidden-phone">
    {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-home-top"}}{% endraw %}
</div>
```
![Banner](/images/argento/default/homepage-vertical-banners.jpg)

### Categories

Categories block is powered by [EasyCatalogImages](/easycatalogimages/) module.

This block is inserted using magento widget functionality. The following code
is used to show block on the homepage:

```html
{% raw %}{{widget type="easycatalogimg/widget_list" category_count="4" column_count="4" show_image="1" resize_image="1" image_width="180" image_height="180" subcategory_count="5" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
```
![Categories](/images/argento/default/homepage-categories.jpg)

### Horizontal Banner

The banner is powered by EasyBanner module. You can add or configure banners at
`Templates-Master > Easybanner`.

You can look at the code that was used to show the homepage banner:

```html
<div class="hidden-tablet hidden-phone">
    {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-home-content"}}{% endraw %}
</div>
```
![Banner](/images/argento/default/homepage-horizontal-banner.jpg)

### Tabs

Homepage tabs - is a highlight block, transformed into tabs with javascript.

The following code is used to show tabs on the homepage:

```html
<div class="promo-home-content col2-set">
    <div class="col-1">
        <div class="tab-container">
            {% raw %}{{widget type="highlight/product_new" title="New arrivals" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-new" page_title="See all new products &raquo;"}}
            {{widget type="highlight/product_special" title="Sale" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-special" page_title="See all on sale products &raquo;"}}
            {{widget type="highlight/product_attribute_yesno" attribute_code="coming_soon" title="Coming soon" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-attrbiute-coming_soon"}}{% endraw %}
        </div>
        <script type="text/javascript">
            new TabBuilder();
        </script>
    </div>
    <div class="col-2">
        {% raw %}{{widget type="highlight/product_bestseller" title="Bestsellers" products_count="3" column_count="3" template="tm/highlight/product/sidebar/list-link.phtml" class_name="highlight-bestsellers" page_title="See all bestsellers &raquo;"}}
        {{widget type="highlight/product_popular" title="Popular Products" products_count="3" column_count="3" template="tm/highlight/product/sidebar/list-link.phtml" class_name="highlight-popular" page_title="See all popular products &raquo;"}}{% endraw %}
    </div>
</div>
```
![Tabs](/images/argento/default/homepage-tabs.jpg)

### Brands Slider

Brands slider is a simple cms content, powered with javascript to make slider.

Look at the code, that was used to show the brands slider:

```html
<div class="block brands-home hidden-phone">
    <div class="block-title">
        <span>Featured Brands</span>
    </div>
    <div class="block-content">
        <a href="#" id="left">Left</a>
        <a href="#" id="right">Right</a>
        <div id="slider-brands-container" class="slider-wrapper">
            <ul class="list-brands slider-brands" id="slider-brands">
                <li><a href="#"><img src="{{skin url="images/catalog/brands/sony.jpg"}}" alt="" width="128" height="73"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/apple.jpg"}}" alt="" width="70" height="73"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/garmin.jpg"}}" alt="" width="154" height="74"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/htc.jpg"}}" alt="" width="124" height="74"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/intel.jpg"}}" alt="" width="103" height="74"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/motorola.jpg"}}" alt="" width="204" height="76"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/sony.jpg"}}" alt="" width="128" height="73"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/apple.jpg"}}" alt="" width="70" height="73"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/garmin.jpg"}}" alt="" width="154" height="74"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/htc.jpg"}}" alt="" width="124" height="74"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/intel.jpg"}}" alt="" width="103" height="74"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/motorola.jpg"}}" alt="" width="204" height="76"/></a></li>
            </ul>
        </div>
        <script type="text/javascript">
            new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
        </script>
    </div>
</div>
```
![Brands Slider](/images/argento/default/brands-slider.jpg)



