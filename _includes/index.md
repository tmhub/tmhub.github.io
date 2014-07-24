## Before start
 - [Directory structure](#directory-structure)

## Required software
 - [Mysql](#mysql)
 - [Php](#php)
 - [Apache](#apache)
 - [Git](#git)
 - [Composer](#composer)
 - [Satis](#satis)
 - [Node.js and gulp.js](#nodejs-and-gulpjs)

## Magento installation
 - [Magento](#magento)
 - [TM modules](#tm-modules)

## Module development
 - [Tracking the changes in tm modules without entering into each module folder](#tracking-the-changes-in-tm-modules-without-entering-into-each-module-folder)
 - [Making release](#making-release)
 - [Keep the modules up to date](#keep-the-modules-up-to-date)
 - [Manual module deployment](#manual-module-deployment)
 - [Updating TM packages repository](#updating-tm-packages-repository)

## Miscellaneous
 - [Access the site within local network](#access-the-site-within-local-network)
 - [Start and stop vpn quickly](#start-and-stop-vpn-quickly)
 - [Terminal](#terminal)
 - [Sublime text editor](#sublime-text-editor)

## Before start

### Directory structure
You can use the following directory structure:

{% highlight bash %}
D:
└── www
    ├── dev
    |   ├── satis
    |   └── composer
    ├── logs
    └── public
        ├── magento
        |   ├── htdocs
        |   ├── vendor
        |   └── composer.json
        ├── packages
        └── phpmyadmin
{% endhighlight %}

An overview of what each of these does:

File / Directory | Description
-----------------|------------
www/dev|Various libraries folder
www/dev/satis|Library that used to build [packages repository](https://github.com/tmhub/packages)
www/dev/composer|Manage module dependencies
www/logs|Apache, php, mysql logs
www/public|Web server public folder
www/public/magento/htdocs|Magento repository
www/public/magento/vendor|Magento modules and their dependencies
www/public/magento/composer.json|List of TM modules
www/public/packages|[TM packages repository](https://github.com/tmhub/packages)
www/public/phpmyadmin|PhpMyAdmin

## Required software

### Mysql
1. [Mysql server](http://dev.mysql.com/downloads/installer/)
2. [HeidiSql client](http://www.heidisql.com/)
3. [PhpMyAdmin](http://www.phpmyadmin.net/) - Unpack it to `www/public/phpmyadmin`
    directory

### Php
1. Download the [php binaries](http://windows.php.net/downloads/releases/php-5.3.28-Win32-VC9-x86.zip)
2. Unpack the archive to `C:/php` folder
3. Create `php.ini` file based on php.ini-development with the following changes:

    {% highlight ini %}
max_execution_time = 600
memory_limit = 512M
error_reporting = E_ALL | E_STRICT
error_log = "D:\www\logs\php_error.log"
post_max_size = 256M
doc_root = d:\www\public
extension_dir = "ext"
upload_max_filesize = 256M
extension=php_curl.dll
extension=php_gd2.dll
extension=php_mbstring.dll
extension=php_mysqli.dll
extension=php_openssl.dll
extension=php_pdo_mysql.dll
date.timezone = 'America/Los_Angeles'
{% endhighlight %}

4. Add `C:\php` folder to system PATH

### Apache
1. [Download and install Apache](http://www.whoishostingthis.com/mirrors/apache//httpd/binaries/win32/httpd-2.2.25-win32-x86-openssl-0.9.8y.msi)
2. Find the following settings in `httpd.conf` and change them as shown below:

    {% highlight apacheconf %}
Listen *:80
# LoadModule cgi_module modules/mod_cgi.so
LoadModule rewrite_module modules/mod_rewrite.so
ServerName your_local_ip_address:80
DocumentRoot "D:/www/public"
AllowOverride All
<Directory "D:/www/public">
DirectoryIndex index.php index.html
ErrorLog "D:/www/logs/apache_error.log"
{% endhighlight %}

3. Add the following settings to the bottom of the file:

    {% highlight apacheconf %}
LoadModule php5_module "c:/php/php5apache2_2.dll"
AddType application/x-httpd-php .php
PHPIniDir "C:/php"
{% endhighlight %}

### Git
1. [Download and install](http://git-scm.com/)

    Notes:

    - Add the git to the system PATH during installation
    - Select checkout as-is and commit as-is option

2. Setup git

    {% highlight bash %}
git config --global user.name "FirstName LastName"
git config --global user.email "your_email@example.com"
git config --global core.autocrlf false
git config --global push.default simple
{% endhighlight %}

3. Setup [github](https://github.com/) account and [generate ssh key](https://help.github.com/articles/generating-ssh-keys)

### Composer
- [Windows installation](https://getcomposer.org/Composer-Setup.exe)
- [Manual installation](https://getcomposer.org/download/). Add composer to the
    system PATH variable.

Github has a limited daily limit for unauthorized requests, so we should create
a token for composer. [Add composer to your github authorized applications](https://github.com/settings/tokens/new)
and run the following command in terminal:

{% highlight bash %}
composer -g config github-oauth.github.com YOUR_KEY_HERE
{% endhighlight %}

### Satis
{% highlight bash %}
cd www/dev
php composer.phar create-project composer/satis --stability=dev --keep-vcs
{% endhighlight %}
Add `www/dev/satis/bin` folder to system PATH variable.

### Node.js and gulp.js
1. [Node.js](http://nodejs.org/)
2. [Gulp.js](http://gulpjs.com/)

    {% highlight bash %}
npm install -g gulp
{% endhighlight %}

## Magento installation

### Magento
1. Clone [Speedupmate Magento repository](https://github.com/speedupmate/Magento-CE-Mirror):

    {% highlight bash %}
cd www/public/magento
git clone git@github.com:speedupmate/Magento-CE-Mirror.git htdocs
cd htdocs
git checkout magento-ce-1.9.0.1
echo '*' > .gitignore
cp errors/local.xml.sample errors/local.xml
{% endhighlight %}

2. Install [magento sample data](http://www.magentocommerce.com/download)
3. Open `192.168.1.xxx/magento/htdocs` address in browser and install Magento
4. Navigate to backend `System > Configuration > Developer > Template Settings`
    and set `Allow Symlinks` option to "Yes"
5. Enable logs at `System > Configuration > Developer > Log Settings` configuration
6. Disable cache at `System > Cache Management`

### TM modules
1. Download [composer.json](https://github.com/tmhub/tmhub.github.io/raw/master/_res/composer.json)
    file and save it to `www/public/magento` folder.
2. Run the following commands from terminal with admin privileges:

    {% highlight bash %}
cd www/public/magento
composer install
{% endhighlight %}

    All modules will be automatically downloaded to the `www/public/magento/vendor/tm`
    folder and symlinked into `www/public/magento/htdocs`. So you can edit files
    in both `vendor/tm` and `htdocs` folders.

3. Create submodule repository to track the changes in each module

    {% highlight bash %}
cd www/public/magento/vendor/tm
git init
for module in *; do git submodule add "./$module"; done;
git commit -m "Initial commit"
{% endhighlight %}

## Module development

### Tracking the changes in tm modules without entering into each module folder
1. [Create git repository inside `vendor/tm`](#tm-modules) folder
2. Use the `git status` command inside `www/public/magento/vendor/tm` folder.
3. After the changes where published to github, call `git add changed_module`
    and `git commit -m "Module update"` commands.

### Making release
We use [gulp](#nodejs-and-gulpjs) to make release.

1. Create `build` directory inside project root folder
2. Add the following content to `.gitingore`:

    {% highlight bash %}
build/*
!build/composer.json
!build/gulpfile.js
!build/package.json
!build/README.md
{% endhighlight %}

3. Copy these files from one of example modules. Modify them according to your
    project name and needs.

    - [AjaxPro](https://github.com/tmhub/ajaxpro/tree/master/build)
    - [Cache](https://github.com/tmhub/cache/tree/master/build) demo and full version
    - [EasyCatalogImg](https://github.com/tmhub/easycatalogimg/tree/master/build)
    - [Firecheckout](https://github.com/tmhub/firecheckout/tree/master/build)

4. Follow the `build/README.md` instructions
5. Upload the generated archive to github release

### Keep the modules up to date
There are two ways of updating the modules. You can update them with `git pull`
command for each modules or `composer update` to update all modules at once.

**Using `composer update` command:**

1. Commit all of your changes to github
2. [Update packages](#updating-tm-packages-repository) repository
3. Run `composer update` command with admin privileges inside `www/public/magento`
    folder. **Do not run this command if you didn't complete first or second step!**

> See the [Manual module deployment](#manual-module-deployment) section in case if
module wasn't deployed into `www/public/magento` folder.

### Manual module deployment
There is a chance that something will went wrong during `composer update` command.
In case if all modules are downloaded by composer but not deployed to the magento
folder, use the following command:

{% highlight bash %}
cd www/public/magento
./vendor/bin/composerCommandIntegrator.php magento-module-deploy
{% endhighlight %}

### Updating TM packages repository
TM packages repository is used by composer dependency manager to download
module dependencies during `composer install` and `composer update` commands.

Clone [tmhub/packages](https://github.com/tmhub/packages) repository into
`www/public/packages` if you didn't do that before:

{% highlight bash %}
cd www/public
git clone git@github.com:tmhub/packages.git packages
{% endhighlight %}

Update the repository and push changes:

{% highlight bash %}
cd www/public/packages
git pull
satis build satis.json .
git add .
git commit -m "satis build satis.json ."
git push
{% endhighlight %}

## Miscellaneous

### Access the site within local network
Add firewall exception to allow access from local network. This will make
possible to open the site from the phone or another computer.

1. `Win + R` > `WF.msc`
2. Inbound rules > New Rule
3. Add new rule with following parameters:

    {% highlight bash %}
Rule: Port
TCP or UDP: TCP
Specific local ports: 80
Allow the connection: Domain, Private, Public
Name: Apache
{% endhighlight %}

### Start and stop VPN quickly
1. Install and setup VPN application
2. Save the [ToggleVPN.bat](https://github.com/tmhub/tmhub.github.io/raw/master/_res/ToggleVPN.bat)
    on the computer
2. `Win+R` > `taskschd.msc`
3. Press `Create task` action. Fill the form with following values:

    {% highlight bash %}
Name: StartVPN
Run with highest privileges: Checked
Actions:
    Start a Program: path\to\ToggleVPN.bat
{% endhighlight %}

4. Create a shortcut on the desktop:

    {% highlight bash %}
Name: Start VPN
Target: C:\Windows\System32\schtasks.exe /run /tn "StartVPN"
{% endhighlight %}

### Terminal
[ConEmu](http://www.fosshub.com/ConEmu.html) is nice one.

Using GitBash in ConEmu:

{% highlight bash %}
Settings > Startup > Tasks > New
Parameters: /dir "D:\www"
Commands: "C:\Program Files (x86)\Git\bin\sh.exe" --login -i
{% endhighlight %}

GitBash with admin privileges:

{% highlight bash %}
"C:\Program Files (x86)\Git\bin\sh.exe" --login -i -new_console:a
{% endhighlight %}

### Sublime text editor

1. [Download and install](http://www.sublimetext.com/3) text editor
2. Install [Package Control](https://sublime.wbond.net/installation)
3. Configure Sublime.

    You can download ready to use settings and merge with yours inside
    `%APPDATA%/Sublime Text 3/Packages/User` folder.

    - [Configuration](https://github.com/tmhub/tmhub.github.io/raw/master/_res/sublime/Preferences.sublime-settings)
    - [Plugins list](https://github.com/tmhub/tmhub.github.io/raw/master/_res/sublime/Package Control.sublime-settings)
    - [Windows keymap](https://github.com/tmhub/tmhub.github.io/raw/master/_res/sublime/Default (Windows).sublime-keymap)
    - [OSX keymap](https://github.com/tmhub/tmhub.github.io/raw/master/_res/sublime/Default (OSX).sublime-keymap)

4. Syncing. If you would like to sync the sublime settings on multiple workstations,
read the [tutorial](https://sublime.wbond.net/docs/syncing)
