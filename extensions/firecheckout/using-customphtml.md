---
layout: default
title: Using custom.phtml template
description: "Using custom.phtml to add custom php code at firecheckout page"
keywords: "firecheckout modifications, custom, phtml, php"
category: Firecheckout
---

# Using custom.phtml template

> This feature is available since Firecheckout 3.4.0

To add additional php code at firecheckout page, you can create `custom.phtml`
file at `app/design/frontend/[PACKAGE/THEME]/template/tm/firecheckout` folder.

The file will be automatically included at the firecheckout page at the bottom 
of content column.

> Please note, that this file could be used for php and javascript code only.
> **Do not use it for visible content**

##### Related Articles
- [House number field - add tranlations](/extensions/firecheckout/housenumber/)
- [Dependent fields - add tranlations](/extensions/firecheckout/dependent-fields/)

