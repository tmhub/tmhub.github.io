---
layout: default
title: Open accordion on category click
description: Open accordion on category click
keywords: "navigationpro, menu, accordion, click on category"
category: Navigationpro
---

# Open accordion on category click

Open `skin/frontend/base/default/js/tm/navigationpro.js`

and find the following lines (~332-335):

```javascript
Event.observe(accordion, this.options.onEvent, this.activate.bind(this, accordion), false);
if (this.options.onEvent == 'click') {
    accordion.onclick = function() {return false;};
}
```

Add the following code after them:

```javascript
var a = accordion.previous();
Event.observe(a, this.options.onEvent, this.activate.bind(this, accordion), false);
if (this.options.onEvent == 'click') {
    a.onclick = function() {return false;};
}
```

Save the file and clear browser cache.
