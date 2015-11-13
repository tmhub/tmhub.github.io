---
layout: default
title: Using dependent fields component
description: "How to add dependencies between firecheckout form fields"
keywords: "dependent fields, dependency, company vs person radios"
category: Firecheckout
---

# Dependent Fields

> This component available since Firecheckout 3.0

Dependent fields component allows to add dependencies between value of one form
field and another field status.

#### Table of contents

- [FC.DependentFields component methods](#fcdependentfields-component-methods)
- [Supported rule argument notations in addRule method](#supported-rule-argument-notations)
- Examples
    - [How to add phone to country relation](#example-1-how-to-add-phone-to-country-relation)
    - [How to add Company vs Person radios](#example-2-how-to-add-company-vs-person-radios)
- [Screenshot](#screenshot)

#### FC.DependentFields component methods

Method          | Argentuments      | Description
----------------|-------------------|--------------
addRule         | identifier, rule  | Add new rule with unique identifier
checkAll        |                   | Manually check all rules
check           | identifier        | Manually check relation by identifier
setFieldStatus  | field, status     | Manually change field status (`optional`, `required`, `hidden`)

###### Supported `rule` argument notations:

Short notation

```js
{
    field: 'billing:country_id',
    value: 'US',
    dependentField: 'billing:company',
    match: 'hidden',
    unmatch: 'required'
}
```

Full Notation. (Fields are combined with `AND` operator)

```js
{
    fields: {
        'billing:country_id': ['US', 'GB'],         // Selectbox
        'billing:city': '*',                        // Any non empty value
        'billing:register_account': true            // Checkbox
        's_method_freeshipping_freeshipping': false // Radio
    },
    dependentField: ['billing:company', 'billing:email'],
    match: {
        status: 'hidden',
        method: function() {
            alert('match');
        }
    },
    unmatch: {
        status: 'required',
        method: function() {
            alert('unmatch');
        }
    }
}
```


#### Example 1. How to add phone to country relation

Example, that makes phone field required for `US` and hidden for other countries:

 1. Create `custom.js` file. [Using custom.css and custom.js][custom_js]
 2. Add the following code into this file

    ```js
    document.observe('dom:loaded', function() {
        FC.DependentFields.addRule(
            'phone_to_country',                     // unique rule identifier
            {
                field: 'billing:country_id',        // field to watch
                value: 'US',                        // value to compare with field value, can be an array
                dependentField: 'billing:telephone',// dependent field, can be an array
                match: 'required',                  // field status, when field.value equals value
                unmatch: 'hidden'                   // field status, when field.value not equals value
            }
        );
    });
    ```

#### Example 2. How to add Company vs Person radios

In this tutorial we will add two radio inputs to the billing address form,
that will trigger Company and VAT fields to be shown or hidden.

 1. Create `custom.js` file. [Using custom.css and custom.js][custom_js]
 2. Add the following code into this file

    ```js
    document.observe('dom:loaded', function() {
        // code, that will add the radios on the top of the billing address
        $('billing:firstname').up('li').insert({
            before: [
                '<li class="control" style="padding: 5px 0;">',
                    '<input type="radio" id="radio_company" name="radio_company_person"/>',
                    '<label for="radio_company" style="margin: 0 4px">Company</label>',
                    '<input type="radio" id="radio_person" checked="checked" name="radio_company_person"/>',
                    '<label for="radio_person" style="margin: 0 4px">Person</label>',
                '</li>'
            ].join('')
        });

        // code that will control other fields status and visibility depending on
        // selected radio button
        FC.DependentFields.addRule(
            'company_vs_person',
            {
                field: 'radio_company',
                value: true,
                dependentField: ['billing:company', 'billing:vat_id', 'billing:taxvat'],
                match: 'required',
                unmatch: 'hidden'
            }
        );
    });
    ```

#### Screenshot

![Company vs Person Radio buttons](/images/firecheckout/dependent-fields/radio_buttons.gif)

[custom_js]: /extensions/firecheckout/using-customcss-and-customjs/#add-custom-javascript-at-firecheckout-page "How to use custom.js file"
