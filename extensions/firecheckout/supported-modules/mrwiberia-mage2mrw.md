---
layout: default
title: MrwIberia Mage2Mrw integration
description: Firecheckout integration with MrwIberia Mage2Mrw
keywords: MrwIberia_Mage2Mrw
category: Firecheckout
---

# MrwIberia_Mage2Mrw

 1. Open `tm/firecheckout/checkout/billing.phtml`

    Find the following lines:

    ```php
    <?php elseif ('taxvat' === $field): ?>
        <?php echo $_taxvat->setTaxvat($this->getQuote()->getCustomerTaxvat())->setFieldIdFormat($_prefix . ':%s')->setFieldNameFormat($_prefix . '[%s]')->toHtml() ?>
    <?php else: ?>
    ```

    Replace them with:

    ```php
    <?php elseif ('taxvat' === $field): ?>
        <?php echo $_taxvat->setTaxvat($this->getQuote()->getCustomerTaxvat())->setFieldIdFormat($_prefix . ':%s')->setFieldNameFormat($_prefix . '[%s]')->toHtml() ?>
    <?php elseif ('street1' === $field): ?>
            <label for="billing:street1" class="required"><em>*</em><?php echo $this->__('Tipo de vía') ?></label>
            <div class="input-box">
                <?php echo $this->helper('mrw4mage')->getTipoViaHtmlSelect($this->getAddress(), 'billing[street][]', 'billing:street1', 'Tipo de vía') ?>
            </div>
        </li>
        <li class="wide">
            <label for="billing:street2" class="required"><em>*</em><?php echo $this->__('Nombre de la vía') ?></label>
            <div class="input-box">
                <input type="text" title="<?php echo $this->__('Nombre de la vía') ?>" name="billing[street][]" id="billing:street2" value="<?php echo $this->htmlEscape($this->getAddress()->getStreet(2)) ?>" class="input-text required-entry" />
            </div>
        </li>
        <li class="wide">
            <label for="billing:street3" class="required"><em>*</em><?php echo $this->__('Número de la vía') ?></label>
            <div class="input-box">
                <input type="text" title="<?php echo $this->__('Número de la vía') ?>" name="billing[street][]" id="billing:street3" value="<?php echo $this->htmlEscape($this->getAddress()->getStreet(3)) ?>" class="input-text required-entry" />
            </div>
        </li>
        <li class="wide">
            <label for="billing:street4"><?php echo $this->__('Resto (portal, escalera, etc.)') ?></label>
            <div class="input-box">
                <input type="text" title="<?php echo $this->__('Resto (portal, escalera, etc.)') ?>" name="billing[street][]" id="billing:street4" value="<?php echo $this->htmlEscape($this->getAddress()->getStreet(4)) ?>" class="input-text" />
            </div>
    <?php else: ?>
    ```

    Find the next line:

    ```php
    <?php if ('street1' === $field) : ?>
    ```

    Replace it with

    ```php
    <?php if (false && 'street1' === $field) : ?>
    ```

 2. Open ```tm/firecheckout/checkout/shipping.phtml```

    Find the following lines:

    ```php
    <?php if ('name' === $field) : ?>
        <?php echo $this->getLayout()->createBlock('customer/widget_name')->setObject($_address)->setFieldIdFormat($_prefix . ':%s')->setFieldNameFormat($_prefix . '[%s]')->toHtml() ?>
    <?php else: ?>
    ```

    And replace them with:

    ```php
    <?php if ('name' === $field) : ?>
        <?php echo $this->getLayout()->createBlock('customer/widget_name')->setObject($_address)->setFieldIdFormat($_prefix . ':%s')->setFieldNameFormat($_prefix . '[%s]')->toHtml() ?>
    <?php elseif ('street1' === $field) : ?>
            <label for="shipping:street1" class="required"><em>*</em><?php echo $this->__('Tipo de vía') ?></label>
            <div class="input-box">
                <?php echo $this->helper('mrw4mage')->getTipoViaHtmlSelect($this->getAddress(), 'shipping[street][]', 'shipping:street1', 'Tipo de vía', 'class="input-text required-entry"') ?>
            </div>
        </li>
        <li class="wide">
            <label for="shipping:street2" class="required"><em>*</em><?php echo $this->__('Nombre de la vía') ?></label>
            <div class="input-box">
                <input type="text" title="<?php echo $this->__('Nombre de la vía') ?>" name="shipping[street][]" id="shipping:street2" value="<?php echo $this->htmlEscape($this->getAddress()->getStreet(2)) ?>" class="input-text required-entry" />
            </div>
        </li>
        <li class="wide">
            <label for="shipping:street3" class="required"><em>*</em><?php echo $this->__('Número de la vía') ?></label>
            <div class="input-box">
                <input type="text" title="<?php echo $this->__('Número de la vía') ?>" name="shipping[street][]" id="shipping:street3" value="<?php echo $this->htmlEscape($this->getAddress()->getStreet(3)) ?>" class="input-text required-entry" />
            </div>
        </li>
        <li class="wide">
            <label for="shipping:street4"><?php echo $this->__('Resto (portal, escalera, etc.)') ?></label>
            <div class="input-box">
                <input type="text" title="<?php echo $this->__('Resto (portal, escalera, etc.)') ?>" name="shipping[street][]" id="shipping:street4" value="<?php echo $this->htmlEscape($this->getAddress()->getStreet(4)) ?>" class="input-text" />
            </div>
    <?php else : ?>
    ```

    Find the next line:

    ```php
    <?php if ('street1' === $field) : ?>
    ```

    and replace it with:

    ```php
    <?php if (false && 'street1' === $field) : ?>
    ```

 3. Save the file, clear cache.
