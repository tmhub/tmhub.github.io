---
layout: default
title: Argento Mall Homepage
description: Argento Mall homepage
keywords: "ArgentoMall, argento theme, homepage, slider, easycatalogimages, tabs, highlight, banner"
category: Argento
---

# Argento Mall Homepage

Homepage content is editable at `Cms > Pages` interface.

![Homepage](/images/argento/mall/homepage-slider-baner.jpg)

### Slider

Slider is powered by EasySlider module. You can manage each slide and animation
effects at `Templates-Master > Easyslide` backend page.

Slider is placed by widget. The following code is used to display
the slider on the homepage:

```html
<div class="col-1">
    {% raw %}{{widget type="easyslide/insert" slider_id="argento_mall"}}{% endraw %}
</div>
```
### Free shipping Banner

The banner is powered by EasyBanner module. You can add or configure banners at
`Templates-Master > Easybanner`.

You can look at the code that was used to show the homepage banner:

```html
<div class="col-2">
    {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-mall-home-top"}}{% endraw %}
</div>
```

### Newsletter subscribe

Please use the following code in order to display this block: 

```html
{% raw %}{{block type="newsletter/subscribe" name="homepage.newsletter" template="newsletter/subscribe.phtml"}}{% endraw %}
```

### Sidebar navigation

The following code is used in order to display the sidebar navigation:

```html
{% raw %}{{block type="navigationpro/navigation" template="tm/navigationpro/sidebar.phtml" name_in_layout="navpro-homepage-left" menu_name="argento_mall_left" enabled="1"}}{% endraw %}
```

### Homepage content blocks

![Homepage content blocks](/images/argento/mall/homepage-content-block.jpg)

#### Deal of the week

Block code is:

```html
<div class="col-1 col-mobile-50">
    {% raw %}{{block type="highlight/product_special" name="homepage.special" title="Deal of the week" class_name="block block-alt" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}{% endraw %}
</div>

```

#### Editor choice

Block code is: 

```html
<div class="col-2 col-mobile-50">
    {% raw %}{{block type="highlight/product_attribute_yesno" attribute_code="recommended" class_name="editor-choice  block block-alt" name="homepage.editor_choice" title="Editor choice" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}{% endraw %}
</div>
```

#### Video of the day

Block code is: 

```html
<div class="video-container">
    <object><param name="movie" value="http://www.youtube.com/v/6BQfCoqbubE"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param wmode="transparent"><embed src="http://www.youtube.com/v/6BQfCoqbubE" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="250" height="201" wmode="transparent"></object>
</div>
<p><small>Amazing Canon Rebel XSi commercial that I saw on TV the other day.</small></p>
```

#### Featured Products

In order to display the block with Featured Products, please use the following code:

```html
{% raw %}{{block type="highlight/product_featured" name="homepage.featured" class_name="block block-featured-homepage" title="Featured products" products_count="6" column_count="3" template="tm/highlight/product/grid-wide.phtml"}}{% endraw %}
```
![Featured products](/images/argento/mall/homepage-featured-products.jpg)

### New Products Slider

New Products slider is a simple cms content, powered with javascript to make slider.

Look at the code, that was used to show this slider:

```html
{% raw %}{{block type="highlight/product_new" name="homepage.new" title="New products" products_count="30" template="tm/highlight/product/slider.phtml"}}{% endraw %}
```
![New Ptoducts Slider](/images/argento/mall/homepage-new-products-slider.jpg)



