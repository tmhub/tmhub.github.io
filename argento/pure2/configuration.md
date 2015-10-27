---
layout: default
title: Argento Pure 2.0 Configuration
description: ArgentoPure 2.0 configuration
keywords: "ArgentoPure, pure, configuration"
category: Argento
---

# Argento Pure 2.0 Configuration

You can find theme settings at `System > Configuration > TM Argento Themes > Pure 2.0`

#### Sticky header and sidebar

These options allows you to control status of sticky header and sidebar.

![Sticky header and sidebar](/images/argento/pure2/configuration/sticky_elements.png)

Plase note, that there is an internal logic for enabling sticky elements on
Pure 2.0 theme. **Sticky elements are disabled for small screens** to prevent bad
customer experience with overlapped elements.

Element | Rules to enable sticky element
--------|-------------------------------
Sticky header | (min-width: 769px) and (min-height: 751px) OR (min-width: 1250px) and (min-height: 501px)
Sticky sidebar | (min-width: 979px) and (min-height: 751px)

#### Full screen and boxed layout

Pure 2.0 theme supports both boxed and full screen layout types. Boxed layout is
used to make visible body background aside of the site content. Full width layout
is used to make the extra wide site or to use wide jumbotrons among the site.

![Layout settings](/images/argento/pure2/configuration/layout.png)

**Screenshots**

Wide jumbotrons layout (default) | Full width layout | Boxed layout
---------------------------------|-------------------|-------------
![Wide jumbotrons](/images/argento/pure2/configuration/layout/resized/wide_jumbotrons.png) | ![Full width layout](/images/argento/pure2/configuration/layout/resized/full_width.png) | ![Boxed layout](/images/argento/pure2/configuration/layout/resized/boxed.png)
**Settings** | **Settings** | **Settings**
Page width: 100% | Page width: 100% | Page width: 1024px
Containers width: 100% | Containers width: 100% | Containers width: 100%
Containers max-width: 1024px | Containers max-width: 95% | Containers max-width: 1024px
 | | Body background: Nice pattern from [subtlepatterns.com](http://subtlepatterns.com/)

#### Background images and colors

![Background settings](/images/argento/pure2/configuration/background.png)

Pure 2.0 allows you to setup background for the following sections:

Option | Description
-------|------------
Body | Visible, when boxed layout is used. Otherwise .container background covers body
Top toolbar container | Black stripe at the top of the page
Header container | Header itself, including navigation
Content container | Left, right and central columns container
Main content | Left, right and central columns background
Footer container | Footer without cms part

#### Top navigation styles

You can change font, color, background for the top level categories
and rest of the levels separately.

![Navigation settings](/images/argento/pure2/configuration/navigation.png)

#### Button colors

There are settings for primary, alternate and "Add to cart" button on product page:

- Border color
- Background
- Font color
- Hover state settings

![Buttons settings](/images/argento/pure2/configuration/button.png)

#### Product page tabs fonts and colors

You can change font and color settings for the product page tabs. There are
separate options for :hover and :active tab states also.

![Tabs settings](/images/argento/pure2/configuration/tabs.png)

#### Page title and sidebar fonts

Want to include nice webfont and apply it to the page titles? Use this section
for this purpose.

There are separate options for the following titles:

- Page, sidebar, containers title
- Product collateral blocks font
- Sidebar title

![Font settings](/images/argento/pure2/configuration/font.png)

#### Additional css styles and includes

With additional css styles option, you can apply any css changes, that are not
listed above.

![Css settings](/images/argento/pure2/configuration/css.png)
