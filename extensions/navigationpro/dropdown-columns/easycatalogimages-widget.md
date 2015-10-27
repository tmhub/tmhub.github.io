---
layout: default
title: EasyCatalogImages inside NavigationPro Dropdown Columns
description: How to use insert widget inside dropdown columns in navigationpro module
keywords: "navigationpro, menu, dropdown columns, easy catalog images"
category: Navigationpro
---

# Replace subcategories dropdown with EasyCatalogImages widget

Result:
![Using EasyCatalogImages widget as category dropdown](https://i.cloudup.com/vqPNBjIY46-3000x3000.png)

1. Navigate to NavigationPro backend interface and select menu to edit
2. Open "Dropdown columns" tab and change Mode to "Custom"
3. Remove Subcategories column and add new column with following values:

```
Type:                Widget or Plain Html
Content:             Insert EasyCatalogImages widget by using "Insert widget" button in WYSIWYG editor
Width:               800
Show Detailed Configuration: Yes
Css Styles:          padding: 10px 0;
```

![Using EasyCatalogImages widget as category dropdown backend](https://i.cloudup.com/QQnTsLoiHC-3000x3000.png)
