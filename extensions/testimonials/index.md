---
layout: default
title: Testimonials
description: Testimonials documentation
category: Testimonials
---

### Animated list block for side panel.

Shows rotating testimonials list in side panel.

 *  Using widget:

    ```
    {% raw %}
    {{widget type="testimonials/widget_list" show_block_design="1" items_number="5" view_time="10000" anim_duration="1000"}}
    {% endraw %}
    ```

 *  Using layout XML:

    ```XML
    <reference name='left'>
    <block type="testimonials/widget_list" name="testimonials">
    <action method="setShowBlockDesign"><flag>0</flag></action>
    <action method="setItemsNumber"><value>5</value></action>
    <action method="setViewTime"><value>10000</value></action>
    <action method="setAnimDuration"><value>1000</value></action>
    </block>
    </reference>
    ```

    Options:

    - `show_block_design` - add/remove block title and link.
    - `items_number` - number of testimonials to show.
    - `view_time` - view time of each item.
    - `anim_duration` - speed of change animation.

### Review block for side panel.
Shows number of testimonials and average testimonial rating in side panel.

 *  Using widget:

    ```
    {% raw %}
    {{widget type="testimonials/widget_review" show_block_design="1"}}
    {% endraw %}
    ```

 *  Using layout XML:

    ```XML
    <reference name='left'>
    <block type="testimonials/widget_review" name="testimonials">
    <action method="setShowBlockDesign"><flag>0</flag></action>
    </block>
    </reference>
    ```

    Options:

    - `show_block_design` - add/remove block title and link.

### Full testimonials list.
Full testimonials list to use on custom CMS pages.

 *  Using widget:

    ```
    {% raw %}
    {{widget type="testimonials/widget_listFull" show_title="1"}}
    {% endraw %}
    ```

 *  Using layout XML:

    ```XML
    <reference name='content'>
    <block type="testimonials/widget_listFull" name="testimonials">
    <action method="setShowTitle"><flag>1</flag></action>
    </block>
    </reference>
    ```

    Options:

    `show_title` - show/hide testimonials page title.

### Add new testimonial form.
Testimonials submit form to use on custom CMS pages.

 *  Using widget:

    ```
    {% raw %}
    {{widget type="testimonials/widget_form"}}
    {% endraw %}
    ```

 *  Using layout XML:

    ```XML
    <reference name='content'>
    <block type="testimonials/widget_form" name="testimonials">
    </block>
    </reference>
    ```

### Testimonial submit form captcha
To enable captcha on testimonial submit form go to
`Admin > System > Configuration > Customers > Customer Configuration > CAPTCHA`,
select `Testimonials Form` in `Forms` field and press `Save config` button.

![Captcha Form](http://i.imgur.com/yt5dyW3.png)

### Testimonial submit form captcha in widget
To show captcha in testimonial submit form inserted with widget, you need to include captcha javascript
to cms page. Go to `Design` tab of CMS page edit form, insert following xml code in `Layout Update XML` field and press `Save Page` button:

```xml
<reference name="head">
   <action method="addJs"><file>mage/captcha.js</file></action>
</reference>
```