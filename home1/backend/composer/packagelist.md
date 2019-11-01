## Composer常用的包 
> https://packagist.org 包官网

名称   |   包名   |   命令 | 描述
--- |  --- | ---- | -----
laravel | laravel/installer | composer global require "laravel/installer"  |  laravel安装器(使用`laravel new xxx`安装)
phpmailer  | phpmailer/phpmailer | composer require phpmailer/phpmailer | PHP发邮件
phpexcel | phpoffice/phpexcel | composer require phpoffice/phpexcel | PHPExcel - OpenXML - Read, Create and Write Spreadsheet documents in PHP - Spreadsheet engine
geoip2 | geoip2/geoip2 | composer require geoip2/geoip2 | 该软件包为GeoIP2 Web服务和数据库提供了API。该API还可以与免费的GeoLite2数据库一起使用。
image | intervention/image |  composer require intervention/image | Image handling and manipulation library with support for Laravel integration
monolog | monolog/monolog | composer require monolog/monolog | Sends your logs to files, sockets, inboxes, databases and various web services


## Composer常用的命令

1. composer命令自动更新
`composer self-update`
2. 声明依赖包(当前执行目录不存在composer.json会尝试创建)
`composer require 包名`
3. 安装包(composer.json声明需要安装的依赖包)
`composer install`
4. 更新包
`composer update [包名1 包名2 ...]`
5. 搜索包(没有composer.json配置文件会执行远程搜索速度会比较慢:()
`composer search 模式符`
6. 显示命令列表
`composer list`