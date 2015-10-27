---
layout: default
title: Hide totals in review section
description: How to remove some totals from order review section
keywords: totals
category: Firecheckout
---

# Hide totals in review section

Firecheckout uses standard template to render totals. If you whould like to
hide some of the totals you need to edit
`app/design/frontend/base/default/template/checkout/onepage/review/totals.phtml`
template.

For example, to hide **shipping** and **tax** totals, replace the next line:

```php
<?php echo $this->renderTotals(null, $_colspan); ?>
```

with:

```php
<?php
    $html = '';
    foreach($this->getTotals() as $total) {
        if ($total->getCode() == 'shipping' || $total->getCode() == 'tax') {
            continue;
        }
        $html .= $this->renderTotal($total, null, $_colspan);
    }
    echo $html;
?>
```
