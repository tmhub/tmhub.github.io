---
layout: default
title: Vonnda_Taxify integration
description: Firecheckout integration with Vonnda Taxify
keywords: Vonnda_Taxify
category: Firecheckout
---

# Vonnda_Taxify

Open `app/code/local/Vonnda/Taxify/etc/config.xml` and find following lines:

```xml
<models>
    <taxify>
        <class>Vonnda_Taxify_Model</class>
    </taxify>
</models>
```

Replace them with:

```xml
<models>
    <taxify>
        <class>Vonnda_Taxify_Model</class>
    </taxify>
</models>
<sales>
    <quote>
        <totals>
            <tax>
                <class>vonnda_taxify_model_sales_quote_address_total_tax</class>
            </tax>
        </totals>
    </quote>
</sales>
```
