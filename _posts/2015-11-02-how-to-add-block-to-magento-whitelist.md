---
layout: post
title:  "How to add blocks to Magento's whitelist"
permalink: "/posts/how-to-add-block-to-magento-whitelist/"
description: "How to fix SUPEE-6788 conflict with themes that are using inline blocks call"
keywords: "block whitelist, whitelist, blank regions, missing block, SUPEE-6788"
categories: "posts"
---

# How to add blocks to Magento's whitelist

> Magento 1.9.2.2 represented a new feature called "blocks and variable whitelist".
> This feature may cause blank regions on the frontend, if theme was using inline
blocks inside its content.

##### Issue: Blank regions are marked with grey rectanles:

![Missing block on the frontend](/images/posts/2015-11-02-how-to-add-block-to-magento-whitelist/missing_blocks.png)

##### Solution:

To fix this issue, you should manually add specific block types to the whitelist
table:

 1. Find block types that should be added to the whitelist:
    1. Navigate to `CMS > Pages` and open the page, that has blank areas issue.
    2. Switch to `Content` tab and find the `{% raw %}{{block type={% endraw %}`
        code inside page content.

        ![Search for block type](/images/posts/2015-11-02-how-to-add-block-to-magento-whitelist/find_block_type_in_backend.png)

    3. Write down or remember all matches, you've found.
 2. Navigate to `System > Permissions > Blocks` and add each block type
    you've found, using `Add New Block` button.

    ![Add block to whitelist](/images/posts/2015-11-02-how-to-add-block-to-magento-whitelist/add_block_to_whitelist.png)

 4. Clear Magento cache at `System > Cache Management`
