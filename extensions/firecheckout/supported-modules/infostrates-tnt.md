---
layout: default
title: Infostrates Tnt integration
permalink: /firecheckout/supported-modules/infostrates-tnt.html
---

## Infostrates Tnt

Open `skin/frontend/default/default/js/tnt/tnt.js` and find the following lines:

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
