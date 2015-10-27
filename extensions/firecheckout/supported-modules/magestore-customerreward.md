---
layout: default
title: MageStore Customerreward integration
description: Firecheckout integration with MageStore Customerreward
keywords: "MageStore_Customerreward, rewards"
category: Firecheckout
---

# MageStore Customerreward

This module redefines the ```checkout/payment/methods.phtml``` template and we
need to add firecheckout reload to customerreward template.

 1. Open ```customerreward/checkout/payment/methods.phtml``` file and find the
 following lines (~153-163):

    ```javascript
    onComplete: function(xhr) {
        if (xhr.responseText.isjsON()) {
            var response = xhr.responseText.evalJSON();
            if (response.updatepayment) {
                $('checkout-payment-method-load').update(response.html);
            } else {
                $('customerreward-mask').hide();
                $('customerreward-payment-method').show();
            }
        }
    }
    ```

 2. Replace them with:

    ```javascript
                onComplete: function(xhr) {
                    if (xhr.responseText.isJSON()) {
                        var response = xhr.responseText.evalJSON();
                        if (response.updatepayment) {
                            $('checkout-payment-method-load').update(response.html);
                        } else {
                            $('customerreward-mask').hide();
                            $('customerreward-payment-method').show();
                        }
                    }
                    if (typeof FireCheckout !== 'undefined') {
                        checkout.update(checkout.urls.shopping_cart);
                    }
                }
    ```

 3. Find these lines again (~344-356) and add firecheckout update function inside it too.
