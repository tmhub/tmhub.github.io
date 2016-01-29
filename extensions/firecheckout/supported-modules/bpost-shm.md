---
layout: default
title: Bpost ShippingManager(ShM) integration
description: Firecheckout integration with Bpost ShippingManager
keywords: Bpost_ShM, Bpost ShippingManager
category: Firecheckout
---

# Bpost ShM

Module is works out of the box, hovewer if you would like to use GoogleMaps
at firecheckout page, you should switch to Onecolumn firecheckout mode or
apply the following changes for Two Columns mode:

 1. Create [custom.css](/extensions/firecheckout/using-customcss-and-customjs/#change-firecheckout-styles) 
    file:

    `skin/frontent/base/default/tm/firecheckout/css/custom.css`

 2. Add the following styles and save the file.

    ```css
    .col2-fire-set .col-fire-2 .col-1,
    .col2-fire-set .col-fire-2 .col-2 {
        width: auto;
        float: none;
    }
    #bpostShm {
        padding: 0 !important;
        border: none !important;
    }
    ```

Here is how it looks like:

![Bpost GoogleMap](/images/firecheckout/integration/bpost-shm/bpost_map.png)
