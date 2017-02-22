### Linux下AMP环境安装
> - 准备环境
> - Apache ： httpd-2.4.25.tar.gz [点击下载](http://mirrors.hust.edu.cn/apache//httpd/httpd-2.4.25.tar.gz)
> - MySQL ：mysql-5.7.17-linux-glibc2.5-x86_64.tar [点击下载](https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.17-linux-glibc2.5-x86_64.tar)
> - PHP ： php-5.6.30.tar.gz [点击下载](http://cn2.php.net/distributions/php-5.6.30.tar.gz)
> - [Apache插件]APR : [点击下载](https://mirrors.tuna.tsinghua.edu.cn/apache//apr/apr-1.5.2.tar.gz)
> - [Apache插件]APR-Util : [点击下载](https://mirrors.tuna.tsinghua.edu.cn/apache//apr/apr-util-1.5.4.tar.gz)
> - [Apache插件]PCRE : [点击下载](https://nchc.dl.sourceforge.net/project/pcre/pcre/8.40/pcre-8.40.tar.gz)


安装正常的流程：`下载`-`上传到Linux`-`解压`-`配置`-`安装` 
安装软件的顺序基本：`Apache` - `MySQL` - `PHP`

### 安装Apache 
1. **解压**。把下载好的 `httpd-2.4.25.tar.gz` 文件上传到服务器，然后进行解压安装。
	命令：` tar -zxvf httpd-2.4.25.tar.gz `
	![images/tar_httpd.jpg](images/tar_httpd.jpg)

2. **配置**。进入到 `httpd-2.4.25` 目录进行编译安装。

	**小插曲（在编译没有报错的情况下是可选步骤）**
	1. 在Apache2.4后的版本已经不再捆绑`APR`、`APR-Util`和`PCRE`。所有这里如果报这个错。需要先去安装这个。
		![images/configure.jpg](images/configure.jpg)
	
	2. 把这三个包依次安装。
		`安装步骤：解压-配置-安装`
		1）安装`APR`
			解压:`tar -zxvf apr-1.5.2.tar.gz`
			进入解压后的目录:`cd apr-1.5.2`
			配置：`./configure --prefix=/usr/local/apache2/plugin/apr`(--prefix=安装路径)
			编译&安装:`make && make install`


		2) 安装`ARP-Util`
			解压:`tar -zxvf apr-util-1.5.4.tar.gz`
			进入解压后的目录:`cd apr-util-1.5.4`
			配置:`./configure --prefix=/usr/local/apache2/plugin/apr-util --with-apr=/usr/local/apache2/plugin/apr/bin/apr-1-config `(--prefix=安装路径，--with-apr=apr路径/bin/apr-1-config)
			编译&安装:`make && make install`

		3) 安装`PRCE`
			解压:`tar -zxvf pcre-8.40.tar.gz`
			进入解压后的目录:`cd pcre-8.40`
			配置:`./configure --prefix=/usr/local/apache2/plugin/prce`(--prefix=安装路径)
			编译&安装:`make && make install`

	命令：`./configure --prefix=/usr/local/apache2 --with-apr=/usr/local/apache2/plugin/apr --with-apr-util=/usr/local/apache2/plugin/apr-util --with-pcre=/usr/local/apache2/plugin/pcre`

	配置完成：
	![images/http_complete.jpg](images/http_complete.jpg)

3. **编译&安装**
	命令：`make && make install`
	
	编译&安装完成：
	![images/httpd_intall.jpg](images/httpd_intall.jpg)


### 安装MySQL
1. **解压**。把下载好的`mysql-5.7.17-linux-glibc2.5-x86_64.tar.gz`进行解压。
	命令：`tar -xvf mysql-5.7.17-linux-glibc2.5-x86_64.tar.gz`

2. **复制**。这是是已经编译好的文件。所以没有编译安装这回事，解压就能用了。
	命令：`cp -r ./mysql-5.7.17-linux-glibc2.5-x86_64 /usr/local/mysql`(复制到你想存放的位置)

3. **添加MySQL系统账号**。
	命令：`groupadd mysql` 和 `useradd -r -g mysql mysql `
	![images/add_mysql_user.jpg](images/add_mysql_user.jpg)

4. **复制&编辑配置文件**

	复制命令：`cp ./support-files/my-default.cnf /etc/my.cnf`(提示是否覆盖，覆盖就行)
	![images/mysql_cp_conf.jpg](images/mysql_cp_conf.jpg)

	编辑命令：`vim /etc/my.cnf`
	![images/mysql_vi_conf.jpg](images/mysql_vi_conf.jpg)

5. ****
