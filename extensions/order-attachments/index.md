---
layout: default
title: Order Attachments
description: Magento Order Attachments documentation
keywords: "order attachments, email integration"
category: Firecheckout
---

# Order Attachments
Magento Order Attachments module adds ability to attach files to order. It also
provides ability to include attachment links to email template. All attached
files are protected from public access and accessible via private generated
links only.

### Contents
1. [Features](#features)
2. [Frontend](#frontend)
 - [Firecheckout](#firecheckout)
 - [Order view page](#order-view-page)
 - [Email integration](#email-integration)
3. [Backend](#backend)
 - [Configuration](#configuration)
 - [Order attachments page](#order-attachments-page)
 - [Order edit page](#order-edit-page)
4. [Custom usage](#custom-usage)
 - [Get attachments programmatically](#get-attachments-programmatically)

## Features

**Secure**

No direct links to uploaded files. Attachments are protected from public access
with generated links.

**Fast**

File upload powered by ajax technology and does not require to reload whole page.

**Configurable**

You can use the following configuration to filter uploaded files:

 - Allowed file extensions
 - Max file size
 - Max files count

**Extendable**

Module provides convinient methods to get order attachments from any third-party module

## Frontend

#### Firecheckout
Module is rendered in additional information section and shows the list of allowed
file extensions to make upload process more friendly.
![Firecheckout page](https://cldup.com/cJsVsu1JbE-3000x3000.png)

#### Order view page
Attachments are visible on the `Guest Order View` and `Customer Order View` pages.
You can [allow customer](#configuration) to upload files from these pages as well as from the
checkout page.

Editable Mode | Read-Only Mode
--------------|---------------
![Editable order view page](https://cldup.com/N2Fh8NLkT--3000x3000.png) | ![Order view page](https://cldup.com/jPZ370Fz1m-3000x3000.png)

#### Email integration
![Email html template](https://cldup.com/nD7a_vl3Jz-2000x2000.png)


- - -

###### Magento 1.9.2.2

If you are using Magento 1.9.2.2 or newer, please check the `orderattachment/view`
block at `System > Permissions > Blocks` page. If you don't see this block in the
grid, you should add it manually, using `Add New Block` button.

- - -

You can add attachment links to the email template using the following code:

```
{% raw %}{{block type='orderattachment/view' area='frontend' template='tm/orderattachment/email/view.phtml' order=$order}}{% endraw %}
```

There are two built-in email templates are available: html and txt.

```
tm/orderattachment/email/view.phtml
tm/orderattachment/email/view.txt.phtml
```

## Backend

#### Configuration

![Backend Configuration](https://cldup.com/Cx_LuDmPOz-3000x3000.png)

Option | Description
:------|:-----------
**Enabled** | Ability to enable/disable module
**Allow file upload during checkout** | Ability to upload files on before the order has been placed
**Allow file upload on order view page** | Ability to edit and upload files after the order has been placed
**Limit** | Files count limit per one order
**Size** | Allowed file size to attach (kilobytes)
**Allowed extensions** | Comma separated allowed file extensions list

#### Order attachments page
The page is located at `Templates Master > Order Attachments`. It gives you
an ability to search, edit, download or remove attachments.

![Order attachments page](https://cldup.com/kCRHIdqL7K-3000x3000.png)

It also has two buttons on the top of the page:

Button | Description
:------|:-----------
**Clear lost attachments** | Clear attachments with empty order and quote ids. Losted attachments can appear after database cleanup.
**Clear old guest attachments** | Remove attachments from guest carts that are inactive for more than two days.

_You are not required to run these cleanups manually. The module run cleaners
automatically with cron setup._

#### Order edit page
Module is integrated into separate tab of the order edit page. You can
edit attachment comments, upload new attachments or delete them.

![Order edit page](https://cldup.com/MIILkheLBx-3000x3000.png)

## Custom Usage

#### Get attachments programmatically
Module provides easy-to-use public methods that can be used from third-party
modules or custom blocks.

```php
$helper = Mage::helper('orderattachment');
$attachments = $helper->getAttachmentsByOrderId($orderId);
foreach ($attachments as $attachment) {
    echo $attachment->getFilename();
    echo $this->escapeHtml($attachment->getComment());
    echo $attachment->getDownloadUrl();
}
```
