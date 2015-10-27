---
layout: default
title: Navigationpro Siblings
description: How to use siblings in navigationpro module
keywords: "navigationpro, menu, siblings"
searchterms: status exceptions
category: Navigationpro
---

# Siblings

Siblings - are the previous and next items around single category item:

![Siblings on the frontend](https://cldup.com/hvdEiUQwrF-3000x3000.png)

## Contents
- [Backend Interface](#backend)
  - [Status Exceptions](#status-exceptions)
- Use Cases:
  - [Create "Shop By" sibling with subcategories dropdown content](shop-by-with-dropdown-content/)
  - [Create "Brands" sibling with dropdown content](brands-with-dropdown-content/)
  - [Create "Browse By" sibling with attributepages list](browse-by-with-attributepages-list/)

### Backend

Siblings tab gives you control over previous and next items around single category
item. With the help of this tab you can add link to the homepage and any other custom
pages before or after any category.

![Siblings](https://cldup.com/ct6_Pie7rq-3000x3000.png)

**Available options:**

 - [Status](#status)
   - [Exceptions](#status-exceptions)
 - Content
 - Dropdown Content
 - Sort Order
 - Dropdown css styles

#### Status
Status option allows to disable sibling.

###### Status exceptions
Status exceptions allows you to configure sibling visibility per device. You can
disable some siblings to provide best experience for your mobile customers.

The screenshot below shows how you can hide sibling with large dropdown content,
to improve site perfomance on phones, but show it for tablet devices.

![Status Exceptions](https://cldup.com/mHxtgh7m8a-3000x3000.png)

> When client UserAgent matches multiple expressions - the last matched rule
will be used
