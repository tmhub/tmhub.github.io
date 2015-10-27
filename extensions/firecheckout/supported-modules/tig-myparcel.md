---
layout: default
title: Tig_MyParcel integration
keywords: "Tig_MyParcel, parcel"
category: Firecheckout
---

# Tig_MyParcel

 1. Open `app/design/frontend/base/default/template/myparcel/pakjegemak.phtml` and find the following lines:

    ```javascript
    if(undefined === formulier)
    {
        // onestepcheckout
        formulier = parent.parent.window.opener.document.forms['onestepcheckout-form'];
    }
    ```

 2. Replce them with

    ```javascript
    if(undefined === formulier)
    {
        // onestepcheckout
        formulier = parent.parent.window.opener.document.forms['onestepcheckout-form'];
    }

    if(undefined === formulier)
    {
        // firecheckout
        formulier = parent.parent.window.opener.document.forms['firecheckout-form'];
    }
    ```

 3. Save the file and clear cache
