---
layout: default
title: Disabling Email extension
description: Disabling Email extension
keywords: disabling email
category: Email
---

# Disabling Email extension

1. Open `app/code/community/TM/Email/etc/config.xml`
2. Find and comment following code:

```xml
<core>
    <rewrite>
        <email_template>TM_Email_Model_Template</email_template>
    </rewrite>
</core>
```
