---
layout: default
title: AW StoreCredit integration
description: Firecheckout integration with AheadWorks StoreCredit
keywords: AW_StoreCredit
category: Firecheckout
---

# AW StoreCredit

 1. Open `skin/frontend/base/default/aw_storecredit/js/aw_storecredit_payment.js`
 2. Find the following lines:

    ```javascript
    if (!this.isStorecreditSubstracted && this.storecreditCheckbox.checked) {
        this.quoteBaseGrandTotal -= this.baseBalance;
        this.isStorecreditSubstracted = true;
    }

    if (this.isStorecreditSubstracted && !this.storecreditCheckbox.checked) {
        this.quoteBaseGrandTotal += this.baseBalance;
        this.isStorecreditSubstracted = false;
    }
    ```

 3. Replace them with:

    ```javascript
    if (!this.isStorecreditSubstracted && this.storecreditCheckbox.checked) {
        this.quoteBaseGrandTotal -= this.baseBalance;
        this.baseStorecreditAmountUsed = this.baseBalance;
        this.isStorecreditSubstracted = true;
    }

    if (this.isStorecreditSubstracted && !this.storecreditCheckbox.checked) {
        this.quoteBaseGrandTotal += this.baseBalance;
        this.baseStorecreditAmountUsed = 0;
        this.isStorecreditSubstracted = false;
    }
    ```

 4. Save the file and try to use credits at firecheckout page.
