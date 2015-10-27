---
layout: default
title: Navigationpro Dropdown Columns
description: How to use dropdown columns in navigationpro module
keywords: "navigationpro, menu, dropdown columns"
searchterms: "status exceptions, subcategories, direction, vertical, horizontal"
category: Navigationpro
---

# Dropdown columns

Dropdown columns tab gives you control over dropdown content of selected
category. By default, dropdown columns has subcategory column only. But you may
add [additional columns](#widget-or-plain-html) aside of subcategory listing, or
even replace [subcategory column](#subcategories) with custom block.

## Contents
- [Backend Interface](#backend)
  - [Status Exceptions](#status-exceptions)
  - Column types:
    - [Subcategories](#subcategories)
    - [Widget or Plain Html](#widget-or-plain-html)
- Use Cases:
  - [Replace standard subcategories dropdown with Easy Catalog Images widget](easycatalogimages-widget/)

### Backend

Each type of dropdown column provide configuration options that can be used to
customize menu according to your needs.

Subcategories column | Widget Column
---------------------|--------------
<img src="https://cldup.com/Rws2bTnfVb-3000x3000.png" height="400" alt="Subacategory column"/> | <img src="https://cldup.com/5ynGb3Efpt-3000x3000.png" height="400" alt="Widget column"/>

**General options:**

 - [Status](#status)
   - [Exceptions](#status-exceptions)
 - Column Type
   - [Subcategories](#subcategories)
   - [Widget or Plain Html](#widget-or-plain-html)
 - Title
 - Width
 - Sort Order
 - Css Id
 - Css class
 - Css styles

#### Status
Status option allows to disable column.

###### Status exceptions
Status exceptions allows you to configure menu visibility per device. You can
disable large dropdowns to provide best experience for your mobile customers.

The screenshot below shows how you can hide large dropdown, to improve site
perfomance on phones, but show it for tablet devices.

![Status Exceptions](https://cldup.com/mHxtgh7m8a-3000x3000.png)

> When client UserAgent matches multiple expressions - the last matched rule
will be used

### Column types

#### Subcategories
Subcategories dropdown is used to render and configure child categories look
and feel.

![Subcategories dropdown](https://cldup.com/Rws2bTnfVb-3000x3000.png)

**Subcategories column options:**

 - Menu Style
   - Dropdown
   - Accordion
 - Levels, to show per dropdown
 - Columns count
 - [Items Direction](#items-direction)
   - [Horizontal](#horizontal)
   - [Vertical](#vertical)

#### Items Direction
Direction option allows you to select most suitable rendering mode for your store
or particular subcategory only.

###### Horizontal
Categories are rendered line by line. Rows visually separated from each other.
Recommended, when there is almost the same subcategories count in each category.

![frontend-horizontal](https://cloud.githubusercontent.com/assets/306080/8001136/53ecf454-0b6b-11e5-9b5a-445b647f5a33.png)

###### Vertical
Categories are separated vertically. There is no visual difference between rows.
This mode is recommended to use, when each category has different subcategory
children count.

![frontend-vertical](https://cloud.githubusercontent.com/assets/306080/8001411/3a283580-0b6e-11e5-9213-04f6cd04173f.png)
