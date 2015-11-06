---
layout: default
title: Argento Default Configuration
description: ArgentoArgento configuration
keywords: "ArgentoArgento, configuration, navigation style, button colors, page font, sidebar font, page title, "
category: Argento
---

# Argento Configuration

You can find theme settings at `System > Configuration > TM Argento Themes > Argento`

#### Background

![Background settings](/images/argento/default/configuration-background.jpg)

Argento Default theme allows you to set up the background for the following sections:

Option | Description
-------|------------
Body | Visible, when boxed layout is used. Otherwise container background covers body
Page content | Different page font can be applied
Top toolbar container | Black stripe at the top of the page
Header container | Header itself, including navigation
Navigation container | Top navigation stripe 
Navigation | Top links navigation block
Footer toolbar container | Footer stripe with newsletter block and social icons 
Footer CMS container | Footer CMS block 
Footer container | Footer without cms part

#### Scroll up element

You can edit the background color and the hover state background color.

![Font settings](/images/argento/default/configuration-scroll-elements.jpg)

#### Top navigation styles

You can change font, color, background for top level categories
and for the rest of levels separately.

![Navigation settings](/images/argento/default/configuration-top-navigation.jpg)

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

![Tabs settings](/images/argento/default/configuration-tabs.jpg)

#### Page title and sidebar fonts

Want to include nice webfont and apply it to the page titles? Use this section
for this purpose.

There are separate options for the following titles:

- Page title
- Sidebar title
- Product name link in listing
- Product collateral blocks font

![Font settings](/images/argento/default/configuration-fonts.jpg)

#### Additional css styles and includes

With additional css styles option, you can apply any css changes, that are not
listed above.

![Css settings](/images/argento/pure2/configuration/css.png)
