# Install Apache-PHP-MySQL on Windows

## All in one (via a tool)

(+) Faster and easier install
(-) Less configurable

[Xamp](https://www.apachefriends.org/download.html) will install everything that's needed to use PHP for us: Apache, PHP and MySQL. (make sure you tick the checkbox for MySQL)
If you're not quite sure what these all are, ask your coach for some documentation.

[Xdebug](https://gist.github.com/odan/1abe76d373a9cbb15bed) is a tool that helps with... debugging.
See the Ubuntu guide for more details.

## Manually

(+) More configurable
(-) A lot of work to install

> Spot an error or encountered problems? Tell your coach so this guide can be updated.

1. [Install Apache](https://www.sitepoint.com/how-to-install-apache-on-windows/)
2. [Install PHP](https://www.sitepoint.com/how-to-install-php-on-windows/)
3. [Install MySQL](https://www.sitepoint.com/how-to-install-mysql/)
4. (optional) [Install Xdebug](https://xdebug.org/docs/install)

Your php will be installed but not added to your path, which means that you can only verify the installation on the xampp shell. You can find this shell in your xampp control panel. Once in there check if your php is installed correctly with the following command: `php -v`

If you wish to use php commands in other terminals, you need to add the php.exe located in your xampp installation folder to your PATH variables. You can either do this manually or a trick I personally use is letting composer fix it for me. Composer is a php package manager that we will be using in the future, so it is not required as of now. However it might be handy to already have. [Install Composer](https://getcomposer.org/download/)
