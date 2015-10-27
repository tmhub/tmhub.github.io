---
layout: default
title: Argento Pure 2.0 Homepage
description: ArgentoPure 2.0 homepage
keywords: "ArgentoPure, pure, pure2, homepage, slider, easycatalogimages, tabs, highlight, brands, banner"
category: Argento
---

# Argento Pure 2.0 Homepage

Homepage content is editable at `Cms > Pages` interface.

### Slider

![Slider](/images/argento/pure2/homepage/slider.jpg)

Slider is powered by EasySlider module. You can manage each slide and animation
effects at `Templates-Master > Easyslide` backend page.

Slider is inserted in homepage with widget. The following code is used to show
the slider on the homepage:

```html
<div class="jumbotron jumbotron-slider jumbotron-image">
    <div class="container wow fadeIn">
        {% raw %}{{widget type="easyslide/insert" slider_id="argento_pure2"}}{% endraw %}
    </div>
</div>
```

### Categories

![Categories](/images/argento/pure2/homepage/easycatalogimages.png)

Categories block is powered by [EasyCatalogImages](/easycatalogimages/) module.

This block is inserted using magento widget functionality. The following code
is used to show block on the homepage:

```html
<div class="jumbotron">
    <div class="container">
        <div class="block block-dotted">
            <div class="block-title"><span>The Essentials</span></div>
            <div class="block-content">
                {% raw %}{{widget type="easycatalogimg/widget_list" background_color="255,255,255" category_count="4" subcategory_count="6" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
            </div>
        </div>
    </div>
</div>
```

### Tabs

![Tabs](/images/argento/pure2/homepage/tabs.png)

Homepage tabs - is a highlight blocks, transformed into tabs with javascript.

The following code is used to show tabs on the homepage:

```html
<div class="jumbotron">
    <div class="container">
        <div class="tab-container">
            {% raw %}{{widget type="highlight/product_special" title="Sale" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-special" page_title="Shop Sale"}}
            {{widget type="highlight/product_bestseller" title="Bestsellers" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-bestsellers" page_title="Shop Bestsellers"}}
            {{widget type="highlight/product_popular" title="Popular" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-popular" page_title="Shop Popular"}}
            {{widget type="highlight/product_attribute_yesno" attribute_code="recommended" title="Editor's Choise" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-attribute-recommended"}}
            {{widget type="highlight/product_new" title="New arrivals" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-new" page_title="Shop New"}}{% endraw %}
        </div>
        <script type="text/javascript">
            new TabBuilder();
            new IScroll($$('.tab-container .tabs-wrapper')[0], {
                click: true,
                tap  : true,
                bindToWrapper: true,
                scrollX: true,
                scrollY: false
            });
        </script>
    </div>
</div>
```

### Brands Slider

![Brands Slider](/images/argento/pure2/homepage/brandsslider.png)

Brands slider is a simple cms content, powered with javascript to make slider.

Code, used for brands slider:

```html
<div class="jumbotron">
    <div class="container">
        <div class="block block-brands argento-slider wow fadeIn" data-wow-delay="0.2s">
            <div class="block-title"><span>Our Brands</span></div>
            <div class="block-content">
                <a href="#" id="left" class="trigger trigger-left"><i class="fa fa-4x fa-angle-right"></i></a>
                <a href="#" id="right" class="trigger trigger-right"><i class="fa fa-4x fa-angle-left"></i></a>
                <div id="slider-brands-container" class="slider-wrapper">
                    <ul class="list-slider" id="slider-brands">
                        <li class="item"><a href="#"><img src="{% raw %}{{skin url="images/catalog/brands/gucci.jpg"}}{% endraw %}" alt="" width="150" height="80"/></a></li>
                        <li class="item" ><a href="#"><img src="{% raw %}{{skin url="images/catalog/brands/lv.jpg"}}{% endraw %}" alt="" width="100" height="80"/></a></li>
                        ...
                    </ul>
                </div>
                <script type="text/javascript">
                    new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
                </script>
            </div>
        </div>
    </div>
</div>
```

### Free Delivery Banner

![Banner](/images/argento/pure2/homepage/banner.png)

Free delivery banner is powered by EasyBanner module. Banners are editable at
`Templates-Master > Easybanner` page.

Code, used to show homepage banner:

```html
<div class="jumbotron">
    <div class="container block-homepage-banner">
        {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-pure2-home"}}{% endraw %}
    </div>
</div>
```
