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

## Composer installation
1. Install [Composer Dependency Manager](https://getcomposer.org/) and add it to system path.
2. Github has a limited daily limit for unauthorized requests, so we should create a token for composer.
[Add composer](https://github.com/settings/tokens/new) to your github authorized applications and run the following command in terminal:

 ```
composer -g config github-oauth.github.com YOUR_KEY_HERE
 ```

## TM modules installation
1. Create `vendor` folder and `composer.json` file in previously created `magento` folder:
 ```
magento
 vendor
 composer.json
 ```

 composer.json content:
 ```
{
    "minimum-stability": "dev",
    "require": {
        "magento-hackathon/composer-command-integrator":"*",
        "magento-hackathon/magento-composer-installer": "*",
        "tm/argento": "*",
        "tm/argento_mage2cloud": "*",
        "tm/cache": "*",
        "tm/easylightbox": "*",
        "tm/easynavigation": "*",
        "tm/firecheckout": "*",
        "tm/helpdesk": "*",
        "tm/prozoom": "*",
        "tm/quickshopping": "*",
        "tm/smartsuggest": "*",
        "tm/templatef001": "*",
        "tm/templatef002": "*",
        "tm/templatem001": "*"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "http://tmhub.github.io/packages"
        }
    ],
    "extra": {
        "magento-root-dir": "htdocs/",
        "magento-deploystrategy": "symlink",
        "magento-force": true
    },
    "config": {
        "discard-changes": true
    }
}
 ```

2. Run the following commands from terminal:
 ```
cd PUBLIC_FOLDER/magento
composer install
 ```
 
## Updating [TM packages](https://github.com/tmhub/packages) repository
1. Install [satis](https://github.com/composer/satis) and add it to system path
2. Clone [tmhub/packages](https://github.com/tmhub/packages) repository
3. cd into cloned repository and run `satis build satis.json .`
4. Push generated files to github

## FAQ
### How can I detect what modules what modified but not published to github yet?
I recommend to initialize a repository inside `magento/vendor/tm` folder and add every module as submodule.
```
cd PUBLIC_FOLDER/magento/vendor/tm
git init
for module in *; do git submodule add "./$module"; done;
```

Use `git status` command to see what module was modified.
After the changes where published on github, call `git add changed_module` and `git commit -m "Module update"`.

### Creating symlinks on Windows7 as regular user
1. Launch `secpol.msc` via `Win+R` or `Start → Run`.
2. Open `Security Settings → Local Policies → User Rights Assignment`.
3. In the list, find the "Create symbolic links" item.
4. Double-click on the item and add yourself (or the whole Users group) to the list.

The changes will apply when you log out and log in again. [Source](http://superuser.com/questions/124679/how-do-i-create-a-link-in-windows-7-home-premium-as-a-regular-user#125981)
