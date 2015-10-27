---
layout: default
title: Argento Flat
description: ArgentoFlat theme documentation
keywords: "ArgentoFlat, flat"
category: Argento
---

# Argento Flat

### Brand logo on product page

![Brand logo](https://cldup.com/Mi6xHZ6A2u-3000x3000.png)

Argento use Attributepage module to show the brand logo. So, first you need
to setup the Attributepage extension.

1. Navigate to TemplateMasters > Attribute Pages > Manage Pages and create brands
page based on `manufacturer` attribute. Feel free to use any other attribute.
2. Attach image and thumbnail images to each of the attributepage options.
3. Open `Cms > Static Blocks` and open `product_sidebar` block.
4. Change `manufacturer` to attribute code, that you are using for saved attributepage.

### Services block on product page

![Brand logo](https://cldup.com/Mi6xHZ6A2u-3000x3000.png)

Navigate to `Cms > Static Blocks` and find `services_sidebar` block. Please note, that
this block is displayed on the `Contacts Us` page too.

If you would like to chnage the block on the product page only, please edit the
`product_sidebar` cms block.

### Jumbotrons

Jumbotrons - are the wide colorized containers on the ArgentoFlat homepage. Use the
styles below to change their background:

```css
/*Default*/
.jumbotron { background: #fff; }
.jumbotron .stub::after { border-top-color: #fff; }
.jumbotron .cover .triangle { border-bottom-color: #fff; }

/*Bright*/
.jumbotron.jumbotron-bright { background: #f15922; }
.jumbotron-bright + .jumbotron .stub,
.jumbotron-bright + .jumbotron .stub::after { border-top-color: #f15922;  }
.jumbotron .cover-bright .triangle { border-bottom-color: #f15922; }

/*Pastel*/
.jumbotron.jumbotron-pastel { background: #229392; }
.jumbotron-pastel + .jumbotron .stub,
.jumbotron-pastel + .jumbotron .stub::after { border-top-color: #229392; }
.jumbotron .cover-pastel .triangle { border-bottom-color: #229392; }

/*Pastel alt*/
.jumbotron.jumbotron-pastel-alt { background: #a5205f; }
.jumbotron-pastel-alt + .jumbotron .stub,
.jumbotron-pastel-alt + .jumbotron .stub::after { border-top-color: #a5205f; }
.jumbotron .cover-pastel-alt .triangle { border-bottom-color: #a5205f; }

/*Dark*/
.jumbotron.jumbotron-dark { background: #222337; }
.jumbotron-dark + .jumbotron .stub,
.jumbotron-dark + .jumbotron .stub::after { border-top-color: #222337; }
.jumbotron .cover-dark .triangle { border-bottom-color: #222337; }

/*Pattern*/
.jumbotron.jumbotron-pattern { background: url(../images/sativa.png) 50% 0; }

/*Image*/
.jumbotron.jumbotron-image { background: url(../images/concrete_seamless.png) 50% 0; }

```
