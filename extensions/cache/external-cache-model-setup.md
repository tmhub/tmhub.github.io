---
layout: default
title: Using external cache model
description: Using external cache model with full page cache
keywords: "external cache model, full page cache"
category: Cache
---

# External cache model setup

1. [Using Magento's local.xml file to use the model globally](#using-magento-localxml-file)
2. [Using tmcache.xml file to use model for full page cache only](#using-tmcachexml-file)
3. [Using the Cm_Cache_Backend_File model](#using-the-cmcachebackendfile)

### Using Magento local.xml file
This method will change the cache model for all website. Every block, collection
will use these settings.

1. Open `app\etc\local.xml` and `app\etc\local.xml.additional`
2. Copy the settings that you would like to change from
`app\etc\local.xml.additional` to `app\etc\local.xml`
3. Set the cache configuration according to your cache
4. Save the file
5. Clear the cache in backend panel or delete all contents from the cache directory

### Using tmcache.xml file
This method will change the cache model for `TM_Cache` module only.

1. Rename `app\etc\tmcache.xml.sample` to `app\etc\tmcache.xml`
2. Set the cache configuration according to your cache
3. Save the file
4. Clear the cache in backend panel or delete all contents from the cache directory

### Using the Cm_Cache_Backend_File
Much improved replacement for Zend_Cache_Backend_File
by [Colin Mollenhour](https://github.com/colinmollenhour)

1. Copy the [File.php](https://github.com/colinmollenhour/Cm_Cache_Backend_File/blob/master/File.php)
to `app/code/community/Cm/Cache/Backend/File.php`
2. Open `app/etc/tmcache.xml` and change `global/tmcache/backend`
entry to `Cm_Cache_Backend_File`
3. Clear the cache in backend panel or delete all contents of the cache directory
