---
layout: default
title: Argento Pure Homepage
description: Argento Pure homepage
keywords: "Argento pure, argento theme, homepage, slider, easycatalogimages, tabs, highlight, banner"
category: Argento
---

# Argento Pure Homepage

Homepage content is editable at `Cms > Pages` interface.

### Slider

![Homepage](/images/argento/pure/slider.jpg)

Slider is powered by EasySlider module. You can manage each slide and animation
effects at `Templates-Master > Easyslide` backend page.

Slider is placed by widget. The following code is used to display
the slider on the homepage:

```html
<div class="homeslider">
    {% raw %}{{widget type="easyslide/insert" slider_id="argento_pure"}}{% endraw %}
</div>
```

### Categories

![Categories](/images/argento/pure/categories.jpg)

Categories block is powered by [EasyCatalogImages](/easycatalogimages/) module.

This block is inserted using magento widget functionality. The following code
is used to show block on the homepage:

```html
{% raw %}{{widget type="easycatalogimg/widget_list" category_count="4" column_count="4" show_image="1" resize_image="1" image_width="180" image_height="180" subcategory_count="1" template="tm/easycatalogimg/list.phtml"}}
```

### Horizontal banner

![Banner](/images/argento/pure/homepage-banner.jpg)

The banner is powered by EasyBanner module. You can add or configure banners at
`Templates-Master > Easybanner`.

You can look at the code that was used to show the homepage banner:

```html
<div class="hidden-tablet hidden-phone">
    {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-home-content"}}{% endraw %}
</div>
```

### Tabs

Homepage tabs - is a highlight block, transformed into tabs with javascript.

![Tabs](/images/argento/pure/homepage-tabs.jpg)

The following code is used to show tabs on the homepage:

```html
<div class="tab-container">
    {{widget type="highlight/product_new" title="New arrivals" products_count="12" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-new" page_title="All new products &raquo;"}}
    {{widget type="highlight/product_bestseller" title="Bestsellers" products_count="12" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-bestsellers" page_title="All bestsellers &raquo;"}}
    {{widget type="highlight/product_attribute_yesno" attribute_code="recommended" title="Recommended products" products_count="12" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-attribute-recommended"}}
    {{widget type="highlight/product_special" title="On sale" products_count="12" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-special" page_title="All on sale products &raquo;"}}
    <div class="block-about block-highlight">
        <div class="block-title"><span>About Us</span></div>
        <div class="block-content" style="padding: 7px 7px;">
            <div class="col3-set">
                <div class="col-1">
                    <p style="line-height:1.2em;"><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi luctus. Duis lobortis. Nulla nec velit. Mauris pulvinar erat non massa. Suspendisse tortor turpis, porta nec, tempus vitae, iaculis semper, pede.</small></p>
                    <p style="color:#888; font:1.2em/1.4em georgia, serif;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi luctus. Duis lobortis. Nulla nec velit. Mauris pulvinar erat non massa. Suspendisse tortor turpis, porta nec, tempus vitae, iaculis semper, pede. Cras vel libero id lectus rhoncus porta.</p>
                </div>
                <div class="col-2">
                    <p><strong style="color:#de036f;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi luctus. Duis lobortis. Nulla nec velit.</strong></p>
                    <p>Vivamus tortor nisl, lobortis in, faucibus et, tempus at, dui. Nunc risus. Proin scelerisque augue. Nam ullamcorper. Phasellus id massa. Pellentesque nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc augue. Aenean sed justo non leo vehicula laoreet. Praesent ipsum libero, auctor ac, tempus nec, tempor nec, justo. </p>
                    <p>Maecenas ullamcorper, odio vel tempus egestas, dui orci faucibus orci, sit amet aliquet lectus dolor et quam. Pellentesque consequat luctus purus. Nunc et risus. Etiam a nibh. Phasellus dignissim metus eget nisi. Vestibulum sapien dolor, aliquet nec, porta ac, malesuada a, libero. Praesent feugiat purus eget est. Nulla facilisi. Vestibulum tincidunt sapien eu velit. Mauris purus. Maecenas eget mauris eu orci accumsan feugiat. Pellentesque eget velit. Nunc tincidunt.</p>
                </div>
                <div class="col-3">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi luctus. Duis lobortis. Nulla nec velit. Mauris pulvinar erat non massa. Suspendisse tortor turpis, porta nec, tempus vitae, iaculis semper, pede. Cras vel libero id lectus rhoncus porta. Suspendisse convallis felis ac enim. Vivamus tortor nisl, lobortis in, faucibus et, tempus at, dui. Nunc risus. Proin scelerisque augue. Nam ullamcorper </p>
                    <p><strong style="color:#de036f;">Maecenas ullamcorper, odio vel tempus egestas, dui orci faucibus orci, sit amet aliquet lectus dolor et quam. Pellentesque consequat luctus purus.</strong></p>
                    <p>Nunc et risus. Etiam a nibh. Phasellus dignissim metus eget nisi.</p>
                    <div class="divider"></div>
                    <p>To all of you, from all of us at Magento Demo Store - Thank you and Happy eCommerce!</p>
                    <p style="line-height:1.2em;"><strong style="font:italic 2em Georgia, serif;">John Doe</strong><br/><small>Some important guy</small></p>
                </div>
            </div>
        </div>
    </div>
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
```

### Brands Slider

Brands slider is a simple cms content, powered with javascript to make slider.

![Brands Slider](/images/argento/pure/homepage-brands-slider.jpg)

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
                <li><a href="#"><img src="{{skin url="images/catalog/brands/gucci.jpg"}}" alt="" width="150" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/lv.jpg"}}" alt="" width="100" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/ck.jpg"}}" alt="" width="130" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/chanel.jpg"}}" alt="" width="170" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/guess.jpg"}}" alt="" width="130" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/versace.jpg"}}" alt="" width="145" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/gucci.jpg"}}" alt="" width="150" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/lv.jpg"}}" alt="" width="100" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/ck.jpg"}}" alt="" width="130" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/chanel.jpg"}}" alt="" width="170" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/guess.jpg"}}" alt="" width="130" height="80"/></a></li>
                <li><a href="#"><img src="{{skin url="images/catalog/brands/versace.jpg"}}" alt="" width="145" height="80"/></a></li>
            </ul>
        </div>
        <script type="text/javascript">
            new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
        </script>
    </div>
</div>
```

