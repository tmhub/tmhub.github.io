---
layout: default
title: Braintree integration
permalink: /firecheckout/supported-modules/braintree.html
---

# Braintree

Open `app/design/frontend/base/default/template/braintree/form.phtml`
and find the following code:

```javascript
if ($$('#onestepcheckout-form').first() && !loggedIn)
{
    $('id_create_account').observe('change', function() {
        $('<?php echo $_code ?>_store_in_vault_div').toggle();
    });
}
```

replace it with:

```javascript
if ($$('#onestepcheckout-form').first() && !loggedIn)
{
    $('id_create_account').observe('change', function() {
        $('<?php echo $_code ?>_store_in_vault_div').toggle();
    });
} else if ($('firecheckout-form') && !loggedIn) {
    window.braintree = Braintree.create('<?php echo $_model->getConfigData('client_side_encryption_key') ?>');
}
```
