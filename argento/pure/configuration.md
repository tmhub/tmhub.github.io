---
layout: default
title: Argento Pure Configuration
description: ArgentoPure configuration
keywords: "Argento pure, configuration, navigation style, button colors, page font, sidebar font, page title, "
category: Argento
---

# Argento Configuration

You can find theme settings at `System > Configuration > TM Argento Themes > Argento Pure`

#### Background

![Background settings](/images/argento/pure/configuration-background.jpg)

Argento Pure theme allows you to set up the background for the following sections:

Option | Description
-------|------------
Body | Visible, when boxed layout is used. Otherwise container background covers body
Page content | Different page font can be applied

#### Scroll up element

You can edit the background color and the hover state background color.

![Font settings](/images/argento/default/configuration-scroll-elements.jpg)

#### Top navigation

You can change font, color, background for navigation container, top level categories
and for the rest of levels separately.

![Navigation settings](/images/argento/pure/configuration-top-navigation.jpg)

#### Buttons

There are settings for primary, alternate and "Add to cart" button on product page:

- Background
- Font color
- Hover state settings

![Button setting](/images/argento/pure/configuration-buttons.jpg)

#### Button styles

You can use the Ultimate CSS Gradient Generator in order to generate css code for button you like. Copy the code output and save it to the `System > Configuration > Templates Master > [Your Theme] > Addional css > Css styles` field.

```css
button.button span {
    border-radius: 6px;
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 1px 2px 2px -1px rgba(0, 0, 0, 0.3);
    background: #f3920b;
    background: -moz-linear-gradient(top, #FFAF12 0%, #ED8108 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFAF12), color-stop(100%,#ED8108));
    background: -webkit-linear-gradient(top, #FFAF12 0%,#ED8108 100%);
    background: -o-linear-gradient(top, #FFAF12 0%,#ED8108 100%);
    background: -ms-linear-gradient(top, #FFAF12 0%,#ED8108 100%);
    background: linear-gradient(to bottom, #FFAF12 0%,#ED8108 100%);
}
```

#### Product page tabs fonts and colors

You can change font and color settings for the product page tabs. There are
separate options for :hover and :active tab states also.

![Tabs settings](/images/argento/pure/configuration-tabs.jpg)

#### Page title and sidebar fonts

You can apply the webfont to page titles. There are separate options for the following titles:

- Page title
- Sidebar title
- Product name link in listing
- Product collateral blocks font

![Font settings](/images/argento/pure/configuration-fonts.jpg)

#### Additional css styles and includes

With additional css styles option, you can apply any css changes, that are not
listed above.

![Css settings](/images/argento/pure2/configuration/css.png)
