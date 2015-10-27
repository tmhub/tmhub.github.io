---
layout: default
title: Magento Absolute Theme (F001)
description: Magento absolute theme documentation
keywords: "Magento Absolute Theme, f001, free magento theme"
category: f001
---

# Magento Absolute Theme (F001)

## Installation

#### Deploy module

Unpack archive to the Magento root directory, disable compilation and clear cache.

Or, if you are using [modman](https://github.com/colinmollenhour/modman) you can
deploy the module with command line:

```
cd /path/to/magento
modman clone git@github.com:tmhub/core.git
modman clone git@github.com:tmhub/catalog-configurable-swatches.git
modman clone git@github.com:tmhub/templatef001.git
```

#### Run installer

1. Logout from Magento backend and login again.
2. Navigate to `Templates Master > Modules` menu.
3. Find the `TM_Templatef001` theme in the list.
4. Click on `Manage` link.
5. Select the store(s) where you wish to install theme.
6. Press `Run` button.

## Configuration

#### Change color theme

1. Navigate to `System > Configuration > Design`.
2. Make sure that `Package > Current Package Name` is set to `f001`.
3. Set the color theme with `Themes > Skin (Images / CSS)` option:
    - default
    - green
    - grey
    - orange
    - pink
    - red
    - sea_green
    - silver
    - violet
    - yellow
