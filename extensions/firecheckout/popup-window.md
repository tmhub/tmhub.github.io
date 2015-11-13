---
layout: default
title: Custom Popup Window
description: Creating custom popup on firecheckout page
keywords: popup window
category: Firecheckout
---

# Custom Popup Window

The code below will add a `Important Information on Delivery Date` link with
onclick observer.

```html
<a href="javascript:void(0)" class="delivery-information-link">Important Information on Delivery Date</a>

<div id="delivery-information-window" style="display: none;">
    <div class="page-title">
        <span>Important Information on Delivery Date</span>
    </div>
    <div class="content">
        <p>Content</p>
    </div>
</div>

<script type="text/javascript">
var deliveryInfo = new FC.Window({
    triggers: {
        information: {
            el    : $$('.delivery-information-link'),
            event : 'click',
            window: $('delivery-information-window'),
            size: {
                maxWidth: 400
            }
        }
    }
});
</script>
```
