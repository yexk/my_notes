# MySQL遇到的问题

## mysql5.7中datetime默认值设置0000-00-00失败的问题
> 问题：mysql5.7之后版本datetime默认值设置'0000-00-00'，出现异常：Invalid default value for 'create_time'

```mysql
-- 例如这个表格：
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '添加时间',
  PRIMARY KEY (`id`)
);
```
添加的时候就会报错： 
![images/mysql_default_value.jpg](images/mysql_default_value.jpg)

这个时候在MySQL的配置文件的`[mysqld]`中加入：
`sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION`
![images/mysql_default_value_conf.jpg](images/mysql_default_value_conf.jpg)

最后重启再导入就行了。

> 附上原文链接 http://blog.csdn.net/sd4493091/article/details/54947851 (此处对原文稍作修改)