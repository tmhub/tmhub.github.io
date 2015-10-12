---
layout: default
title: Argento Pure 2.0 Configuration
permalink: "/argento/pure2/configuration/"
description: ArgentoPure 2.0 configuration
keywords: "ArgentoPure, pure, configuration"
category: Argento
---

# Argento Pure 2.0 Configuration

You can find theme settings at `System > Configuration > TM Argento Themes > Pure 2.0`.

#### Sticky header and sidebar

These options allows you to control status of sticky header and sidebar.

Plase note, that there is an internal logic for enabling sticky elements on
Pure 2.0 theme. **Sticky elements are disabled for small screens** to prevent bad
customer experience with overlapped elements.

Element | Rules to enable sticky element
--------|-------------------------------
Sticky header | (min-width: 769px) and (min-height: 751px) OR (min-width: 1250px) and (min-height: 501px)
Sticky sidebar | (min-width: 979px) and (min-height: 751px)

#### Full screen and boxed layout

###### Boxed layout settings

Option | Value
-------|------
Page width | 1024px
Containers width | 100%
Containers max-width | 1920px
Body background | Nice pattern from [subtlepatterns.com](http://subtlepatterns.com/)

###### Full width layout settings

Option | Value
-------|------
Page width | 100%
Containers width | 100%
Containers max-width | 1920px

#### Background images and colors

Option | Description
-------|------------
Body | Visible, when boxed layout is used. Otherwise .container background covers body
Top toolbar container | Black stripe at the top of the page
Header container | Header itself, including navigation
Content container | Left, right and central columns container
Main content | Left, right and central columns background
Footer container | Footer without cms part

#### Top navigation styles

You are allowed to change font, color, background for the top level categories
and rest of the levels separately.

#### Button colors

There are settings for primary, alternate and "Add to cart" button on product page:

- Border color
- Background
- Font color
- Hover state settings

#### Product page tabs fonts and colors

You can change font and color settings for the product page tabs. There are
separate options for :hover and :active tab states also.

#### Page title and sidebar fonts

Want to include nice webfont and apply it to the page titles? Use this section
for this purpose.

There are separate options for the following titles:

- Page, sidebar, containers title
- Product collateral blocks font
- Sidebar title

#### Additional css styles and includes

With additional css styles option, you can apply any css changes, that are not
listed above.
