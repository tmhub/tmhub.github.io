---
layout: default
title: Brands sibling with dropdown content
description: Create navigation pro sibling with brands dropdown content
keywords: "navigationpro, menu, siblings, dropdown content, attributepages"
searchterms: Brands
category: Navigationpro
---

# Brands sibling with dropdown content

*We assume that you already created brands page at
`Templates Master > Attributepages > Manage Pages`*

![Brands sibling with dropdown](/images/navigationpro/siblings/brands_with_dropdown_content.png)

1.  Navigate to NavigationPro backend interface and select menu to edit
2.  Select last visible category
3.  Open Siblings tabs and press 'Add New Sibling' button
4.  Fill the form with following values:

    ```
    Content:             <a href="{% raw %}{{store url="brands"}}{% endraw %}" class="nav-a level-top"><span class="nav-span">Brands</span></a>
    Dropdown Content:    Insert Attributepages Option List widget using WYSISYG editor
    Dropdown css styles: width: 600px; padding: 10px;
    ```

##### Related Articles

- [Attributepage: Option based pages list widget](/extensions/attributepages/widgets-and-blocks/option-based-pages-widget/)
