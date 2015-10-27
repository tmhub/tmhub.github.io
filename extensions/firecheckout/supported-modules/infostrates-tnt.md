---
layout: default
title: Infostrates Tnt integration
description: Firecheckout integration with Infostrates Tnt
keywords: Infostrates_Tnt
category: Firecheckout
---

## Infostrates Tnt

Open `skin/frontend/default/default/js/tnt/tnt.js`.

 1. Find the following lines:

    ```javascript
    new Ajax.Request(url,{
        method:'post',
        parameters:{street:street,description:description,postcode:postcode,city:city,info_comp:info_comp}
    });
    ```

    Replace them with:

    ```javascript
    new Ajax.Request(url, {
        method: 'post',
        onComplete: function(response) {
            document.fire('inforstrates:shippingMethodTntCompleted', response);
        },
        parameters:{street:street,description:description,postcode:postcode,city:city,info_comp:info_comp}
    });
    ```

 2. Find the following line:

    ```javascript
    var radioGrp = document['forms']['co-shipping-method-form']['tnt_ville'];
    ```

    Replace it with:

    ```javascript
    var radioGrp = $$('input[name="tnt_ville"]');
    ```

 3. Find the following lines:

    ```javascript
    if(!radioValue && $("tnt_ville1").checked){
        var radioValue = $("tnt_ville1").value;
    }
    ```

    Replace them with:

    ```javascript
    if(!radioValue && $("tnt_ville1") && $("tnt_ville1").checked){
        var radioValue = $("tnt_ville1").value;
    }
    ```

Save the file and disable js minification.
