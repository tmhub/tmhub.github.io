---
layout: default
title: Argento 2 Essence
description: Argento 2 Essence documentation
keywords: >
    magento 2 responsive template, magento 2 themes, magento 2 template,
    magento themes
category: Argento 2
---

# Argento for Magento 2.x installation instructions

* [Installation](#installation)
* [List of included modules](#included-modules)
* [List of included themes](#included-themes)

### Installation

 1. Get extension source:

    In case you have archive from our site:
    `unzip <argento.zip> -d <magento_root>`

 2. Enable modules and run upgrades:

    ```
    bin/magento module:enable\
        Swissup_Ajaxsearch\
        Swissup_Core\
        Swissup_Easycatalogimg\
        Swissup_EasySlide\
        Swissup_Easytabs\
        Swissup_Fblike\
        Swissup_Highlight\
        Swissup_ProLabels\
        Swissup_Reviewreminder\
        Swissup_RichSnippets\
        Swissup_SlickCarousel\
        Swissup_SoldTogether\
        Swissup_Testimonials
    bin/magento setup:upgrade
    ```

 3. Magento's built-in WYSIWYG Editor is buggy, and we insist upon disabling it
    by default.

    Navigate to `Stores > Configuration > General > Content Management` and change
    `Enable WYSIWYG Editor` option to `Disabled by Default` to prevent problems with
    homepage and cms blocks content.

 4. Create the homepage with following content:

    ```html
    <div class="argento-grid">
        <div class="item col-md-11">
            {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_essence"}}{% endraw %}
        </div>
        <div class="item col-md-5 argento-grid cols-xs-3 cols-md-1 no-padding">
            <a class="item" href="{% raw %}{{store url="delivery"}}{% endraw %}"><img src="{% raw %}{{view url="images/callouts/delivery.gif"}}{% endraw %}"/></a>
            <a class="item" href="{% raw %}{{store url="galaxy-s3"}}{% endraw %}"><img src="{% raw %}{{view url="images/callouts/galaxy_s3.gif"}}{% endraw %}"/></a>
            <a class="item" href="{% raw %}{{store url="roku-2-xs"}}{% endraw %}"><img src="{% raw %}{{view url="images/callouts/roku2_xs.gif"}}{% endraw %}"/></a>
        </div>
    </div>

    {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}{% endraw %}

    <div><a href="{% raw %}{{store url="hp-envy-17"}}{% endraw %}"><img src="{% raw %}{{view url="images/callouts/hp_envy_17.jpg"}}{% endraw %}"/></a></div>

    <div class="argento-grid">
        <div class="blocks-main item col-md-11" data-mage-init='{"argentoTabs": {}}'>
            {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="View All New Products" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
            {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offers" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
            {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Coming soon" attribute_code="coming_soon" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
        </div>
        <div class="sidebar blocks-secondary item col-md-5 argento-grid cols-xs-1 cols-sm-2 cols-md-1 no-padding">
            <div class="item">{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\SideReview"}}{% endraw %}</div>
            <div class="item">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="3" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Bestsellers" min_popularity="1" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}</div>
            <div class="item">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Popular" title="Popular Products" products_count="3" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Popular Products" min_popularity="1" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}</div>
        </div>
    </div>

    <div class="block widget block-promo block-carousel">
        <div class="block-title">
            <strong>Featured Brands</strong>
        </div>
        <div class="block-content">
            <div data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 6, "dots": false, "autoplay": true, "variableWidth": true}}'>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/sony.jpg"}}{% endraw %}" alt="" width="128" height="73"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/apple.jpg"}}{% endraw %}" alt="" width="70" height="73"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/garmin.jpg"}}{% endraw %}" alt="" width="154" height="74"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/htc.jpg"}}{% endraw %}" alt="" width="124" height="74"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/intel.jpg"}}{% endraw %}" alt="" width="103" height="74"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/motorola.jpg"}}{% endraw %}" alt="" width="204" height="76"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/sony.jpg"}}{% endraw %}" alt="" width="128" height="73"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/apple.jpg"}}{% endraw %}" alt="" width="70" height="73"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/garmin.jpg"}}{% endraw %}" alt="" width="154" height="74"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/htc.jpg"}}{% endraw %}" alt="" width="124" height="74"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/intel.jpg"}}{% endraw %}" alt="" width="103" height="74"/></a></div>
                <div><a href="#"><img src="{% raw %}{{view url="images/brands/motorola.jpg"}}{% endraw %}" alt="" width="204" height="76"/></a></div>
            </div>
        </div>
    </div>
    ```

 5. Create `header_cms_links` cms block with following content:

    ```html
    <ul class="header links header-cms-links">
        <li class="first"><a href="{% raw %}{{store url="support"}}{% endraw %}">support</a></li>
        <li><a href="{% raw %}{{store url="faq"}}{% endraw %}">faq</a></li>
        <li class="last"><a href="{% raw %}{{store url="knowledgebase"}}{% endraw %}">knowledge base</a></li>
    </ul>
    ```

 6. Create `footer_cms_content` cms block with following content:

    ```html
    <div class="argento-grid">
        <ul class="item col-md-12 footer links argento-grid cols-sm-2 cols-md-4">
            <li class="item">
                <div class="h4">About us</div>
                <ul>
                    <li><a href="{% raw %}{{store direct_url="about"}}{% endraw %}">About Us</a></li>
                    <li><a href="{% raw %}{{store direct_url="our-company"}}{% endraw %}">Our company</a></li>
                    <li><a href="{% raw %}{{store direct_url="carriers"}}{% endraw %}">Carriers</a></li>
                    <li><a href="{% raw %}{{store direct_url="shipping"}}{% endraw %}">Shipping</a></li>
                </ul>
            </li>
            <li class="item">
                <div class="h4">Customer center</div>
                <ul>
                    <li><a href="{% raw %}{{store direct_url="customer/account"}}{% endraw %}">My Account</a></li>
                    <li><a href="{% raw %}{{store direct_url="sales/order/history"}}{% endraw %}">Order Status</a></li>
                    <li><a href="{% raw %}{{store direct_url="wishlist"}}{% endraw %}">Wishlist</a></li>
                    <li><a href="{% raw %}{{store direct_url="exchanges"}}{% endraw %}">Returns and Exchanges</a></li>
                </ul>
            </li>
            <li class="item">
                <div class="h4">Info</div>
                <ul>
                    <li><a href="{% raw %}{{store direct_url="privacy"}}{% endraw %}">Privacy policy</a></li>
                    <li><a href="{% raw %}{{store direct_url="delivery"}}{% endraw %}">Delivery information</a></li>
                    <li><a href="{% raw %}{{store direct_url="returns"}}{% endraw %}">Returns policy</a></li>
                </ul>
            </li>
            <li class="item">
                <div class="h4">Contacts</div>
                <ul>
                    <li><a href="{% raw %}{{store direct_url="contacts"}}{% endraw %}">Contact Us</a></li>
                    <li><a href="{% raw %}{{store direct_url="location"}}{% endraw %}">Store location</a></li>
                </ul>
            </li>
        </ul>

        <div class="item col-md-4 footer-contacts">
            <div class="h4">Visit Argento Store</div>
            <address style="margin-bottom: 10px;">
                221B Baker Street<br>
                West Windsor, NJ 08550<br>
                <strong>1.800.555.1903</strong><br>
            </address>
            <a href="{% raw %}{{store direct_url="map"}}{% endraw %}" title="Show map">get directions</a><br>
            <img width="200" height="60" style="margin-top: 10px;" src="{% raw %}{{view url="images/security_sign.gif"}}{% endraw %}" srcset="{% raw %}{{view url="images/security_sign@2x.gif"}}{% endraw %} 2x" alt="Security Seal"/>
        </div>
    </div>
    ```

 7. Create `footer_social_icons` cms block with following content:

    ```html
    <div class="social-icons">
      Join Our Community
      <a href="https://facebook.com/" class="icon icon-facebook">
        <span class="fa-stack">
          <i class="fa fa-square fa-stack-2x"></i>
          <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a href="https://twitter.com/" class="icon icon-twitter">
        <span class="fa-stack">
          <i class="fa fa-square fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a href="https://facebook.com/" class="icon icon-youtube">
        <span class="fa-stack">
          <i class="fa fa-square fa-stack-2x"></i>
          <i class="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a href="{% raw %}{{store url="rss"}}{% endraw %}" class="icon icon-rss">
        <span class="fa-stack">
          <i class="fa fa-square fa-stack-2x"></i>
          <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
        </span>
      </a>
    </div>
    ```

 8. Navigate to `Stores > Configuration > Design > Design Theme` and apply
    Argento Essence theme.

 9. Navigate to `Stores > Attributes > Product`, add `coming_soon attribute`,
    and apply it for products you need to show on homepage tabs.

10. Navigate to `Swissup > EasySlide` and create new slider with following values:

    ```
    Title: argento_essence
    Identifier: argento_essence
    ```

    Then switch to `Slides` tab and upload your images.

11. That's all. Now you can check frontend or configure our modules at
    `Stores > Configuration > Swissup`
