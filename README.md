tmhub.github.io
===============

## Magento Installation
1. Create `magento/htdocs` folders in your web-server public folder.
2. Clone [Speedupmate Magento repository](https://github.com/speedupmate/Magento-CE-Mirror) inside and checkout to the latest Magento version tag:
 ```
cd PUBLIC_FOLDER/magento/htdocs
git init
git remote add speedupmate git@github.com:speedupmate/Magento-CE-Mirror.git
git fetch speedupmate
git checkout magento-ce-1.9.0.1
 ```

3. Create `.gitignore` file in `magento/htdocs` folder and place asterisk(`*`) as file content to ignore generated cache, images and Templates-Master's modules.
4. Install sample data and Magento as usual.
5. Navigate to backend `System > Configuration > Developer > Template Settings` and set `Allow Symlinks` option to "Yes".
6. Enable logs at `System > Configuration > Developer > Log Settings` configuration.
7. Enable error reporting by creating a renamed copy of `MAGENTO_ROOT/errors/local.xml.sample`. Duplicate this file and rename duplicate to `local.xml`.
