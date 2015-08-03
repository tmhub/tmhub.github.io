---
layout: default
title: Brands sibling with dropdown content
permalink: /navigationpro/siblings/brands-with-dropdown-content/
description: Create navigation pro sibling with brands dropdown content
keywords: nanigationpro, menu, siblings, dropdown content, attributepages
searchterms: Brands
category: Navigationpro
---

# Brands sibling with dropdown content

*We assume that you already created brands page at
`Templates Master > Attributepages > Manage Pages`*

Result:
![Brands menu](https://i.cloudup.com/uEOSIxvLUB-3000x3000.png)

1.  Navigate to NavigationPro backend interface and select menu to edit
2.  Select last visible category
3.  Open Siblings tabs and press 'Add New Sibling' button
4.  Fill the form with following values:

    ```
    Content:             <a href="{% raw %}{{store url="brands"}}{% endraw %}" class="nav-a level-top"><span class="nav-span">Brands</span></a>
    Dropdown Content:    Insert Attributepages Option List widget using WYSISYG editor
    Dropdown css styles: width: 600px; padding: 10px;
    ```
