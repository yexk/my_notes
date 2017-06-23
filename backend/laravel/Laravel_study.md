# Laravel框架学习

## 后台

### Composer

#### 下载和安装

> Composer 是 PHP 的一个依赖管理工具。它允许你申明项目所依赖的代码库，它会在你的项目中为你安装他们。

composer的用途：
a) 你有一个项目依赖于若干个库。
b) 其中一些库依赖于其他库。
c) 你声明你所依赖的东西。
d) Composer 会找出哪个版本的包需要安装，并安装它们（将它们下载到你的项目中）。

## Linux安装
下载 Composer 的可执行文件

### 局部安装
>要真正获取 Composer，我们需要做两件事。首先安装 Composer （同样的，这意味着它将下载到你的项目中）：

```
curl -sS https://getcomposer.org/installer | php
```     
> 注意： 如果上述方法由于某些原因失败了，你还可以通过 php >下载安装器：
`php -r "readfile('https://getcomposer.org/installer');" | php`   

你可以通过 --install-dir 选项指定 Composer 的安装目录（它可以是一个绝对或相对路径）：

```
curl -sS https://getcomposer.org/installer | php -- --install-dir=bin
```

### 全局安装(推荐)
你可以将此文件放在任何地方。如果你把它放在系统的 PATH 目录中，你就能在全局访问它。 在类Unix系统中，你甚至可以在使用时不加 php 前缀。

你可以执行这些命令让 composer 在你的系统中进行全局调用：
```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```
>注意： 如果上诉命令因为权限执行失败， 请使用 sudo 再次尝试运行 mv 那行命令。

现在只需要运行 composer 命令就可以使用 Composer 而不需要输入 php composer.phar。

## Windows安装
使用安装程序

这是将 Composer 安装在你机器上的最简单的方法。

下载并且运行 `Composer-Setup.exe`，它将安装最新版本的 Composer ，并设置好系统的环境变量，因此你可以在任何目录下直接使用 `composer` 命令。


#### 快速入门

<!--Note-->
####### composer快速入门
安装好后就可以开始使用`composer`命令了。

这里我们那phpmailer举例子。例如你的项目需要用到phpmailer来发邮件。只需要两步：下载->加载使用。

######## 第一步 
`composer require phpmailer/phpmailer`

使用上面这个命令进行安装`phpmailer`。

执行完成后会看到生成`vendor/phpmailer` 
，这样phpmailer就已经下载到你项目里面了。
######## 第二步
引用类库。在你需要的使用的项目的文件里面加上着行代码。（这是统一格式无需修改）。
`require 'vendor/autoload.php';`

接下来就可以使用了。详细内容可以参考phpmailer手册。

<!--/Note-->

####  Composer常用命令

### Laravel

#### 下载和安装

<!--Note-->
##### 下载
使用composer进行下载安装


##### 安装
<!--/Note-->

#### 目录结构

#### 命令行工具（artisan）

##### artisan常用命令集锦

<!--Note-->
######## php artisan
```Shell
λ php artisan
Laravel Framework 5.4.27

Usage:
  command [options] [arguments]

Options:
  -h, --help            Display this help message
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi            Force ANSI output
      --no-ansi         Disable ANSI output
  -n, --no-interaction  Do not ask any interactive question
      --env[=ENV]       The environment the command should run under
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Available commands:
  clear-compiled       Remove the compiled class file
  down                 Put the application into maintenance mode
  env                  Display the current framework environment
  help                 Displays help for a command
  inspire              Display an inspiring quote
  list                 Lists commands
  migrate              Run the database migrations
  optimize             Optimize the framework for better performance
  serve                Serve the application on the PHP development server
  tinker               Interact with your application
  up                   Bring the application out of maintenance mode
 app
  app:name             Set the application namespace
 auth
  auth:clear-resets    Flush expired password reset tokens
 cache
  cache:clear          Flush the application cache
  cache:forget         Remove an item from the cache
  cache:table          Create a migration for the cache database table
 config
  config:cache         Create a cache file for faster configuration loading
  config:clear         Remove the configuration cache file
 db
  db:seed              Seed the database with records
 event
  event:generate       Generate the missing events and listeners based on registration
 key
  key:generate         Set the application key
 make
  make:auth            Scaffold basic login and registration views and routes
  make:command         Create a new Artisan command
  make:controller      Create a new controller class
  make:event           Create a new event class
  make:job             Create a new job class
  make:listener        Create a new event listener class
  make:mail            Create a new email class
  make:middleware      Create a new middleware class
  make:migration       Create a new migration file
  make:model           Create a new Eloquent model class
  make:notification    Create a new notification class
  make:policy          Create a new policy class
  make:provider        Create a new service provider class
  make:request         Create a new form request class
  make:seeder          Create a new seeder class
  make:test            Create a new test class
 migrate
  migrate:install      Create the migration repository
  migrate:refresh      Reset and re-run all migrations
  migrate:reset        Rollback all database migrations
  migrate:rollback     Rollback the last database migration
  migrate:status       Show the status of each migration
 notifications
  notifications:table  Create a migration for the notifications table
 queue
  queue:failed         List all of the failed queue jobs
  queue:failed-table   Create a migration for the failed queue jobs database table
  queue:flush          Flush all of the failed queue jobs
  queue:forget         Delete a failed queue job
  queue:listen         Listen to a given queue
  queue:restart        Restart queue worker daemons after their current job
  queue:retry          Retry a failed queue job
  queue:table          Create a migration for the queue jobs database table
  queue:work           Start processing jobs on the queue as a daemon
 route
  route:cache          Create a route cache file for faster route registration
  route:clear          Remove the route cache file
  route:list           List all registered routes
 schedule
  schedule:run         Run the scheduled commands
 session
  session:table        Create a migration for the session database table
 storage
  storage:link         Create a symbolic link from "public/storage" to "storage/app/public"
 vendor
  vendor:publish       Publish any publishable assets from vendor packages
 view
  view:clear           Clear all compiled view files
```
<!--/Note-->

#### 路由（router）

<!--Note-->
####### 路由简介
[路由](http://blog.csdn.net/fationyyk/article/details/50828278)
<!--/Note-->

##### CSRF 白名单

#### 控制器（controller）

##### 中间件（Middleware）

##### RESTFul风格控制器 

#### 模型（model）

#### 视图（view）

#####  Blade模板

#### 数据库（databases）


```MYSQL
'charset' => 'utf8',   
'collation' => 
'utf8_general_ci',

-- 下面的是执行过程
λ php artisan migrate
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table


```


##### 数据库管理（migrations）

#### 请求（request）

##### 数据校验

#### 杂项

##### Cookie

##### Session

##### 文件上传

##### url重定向

## 前端

### ECMAScript 2015（ES6）

### Node.js

#### npm && cnpm

### webpack

###  Bootstrap

### Vue.js
