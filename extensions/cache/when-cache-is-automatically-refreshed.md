---
layout: default
title: When cache is automatically refreshed?
description: When cache is automatically refreshed
keywords: "cache, fpc, full page cache, invalidate"
searchterms: "refresh, cleared"
category: Cache
---

# When cache is automatically refreshed?

Following rules are used:

* Category save triggers to clear all cache because of top navigation, that
appears across the all site pages
* Product changes triggers invalidation of product, quickshopping and related
category pages
* Cms page changes will update cms page url only. Home page will be updated too,
if changed page is set as homepage
* Product review triggers review, review listing, related product and category
pages refreshing.
* Product Tag changes makes the product and related tag list pages to refresh
* CatalogRules update triggers invalidating of related product and category pages
* New Order invalidates purchased product pages

Automatic cache updating can be disabled at
`System > Configuration > TM > Cache > General` options.
In this case you will be notified about cache invalidating, when one of supported
events occurs.
