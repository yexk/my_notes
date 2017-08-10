# redis 快速入门

## Redis 命令
启动服务端命令：`redis-server /etc/redis/redis.conf`
启动客户端命令：`redis-cli` ;

## Redis 键(key)
语法
Redis 键命令的基本语法如下：
```shell
redis 127.0.0.1:6379> COMMAND KEY_NAME [VALUE_NAME]
```
实例
```redis
redis 127.0.0.1:6379> SET Yexk redis
OK
redis 127.0.0.1:6379> DEL Yexk
(integer) 1
```
在以上实例中 DEL 是一个命令， `Yexk` 是一个键。 如果键被删除成功，命令执行后输出 `(integer) 1`，否则将输出 `(integer) 0`。

## Redis 字符串(String)
| 操作 |  命令 | 说明 | 
| -- | -- | -- |
| 增 | 1.`SET key value `<br>2.`SETNX key value`<br>3.`SETEX key seconds value` | 1.设置指定 `key` 的值<br>2.只有在 `key` 不存在时设置 `key` 的值<br>3.将值 value 关联到 `key` ，并将 `key` 的过期时间设为 `seconds` (以秒为单位) |
| 删 | `GET key` | 删除指定 `key` 的值 |
| 改 | 同 操作`增`<br>1.`GETSET key value`<br>2.`INCR key`<br>3.`DECR key`<br>4.`INCRBY key increment`<br>5.`DECRBY key decrement`<br>6.`APPEND key value` | <br>1.将给定 `key` 的值设为 `value` ，并返回 `key` 的旧值(old value) <br>2.将 key 中储存的数字值增一<br>3.将 key 中储存的数字值减一<br>4.将 key 所储存的值加上给定的增量值（increment）<br>5.key 所储存的值减去给定的减量值（decrement）<br>6.如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。 |
| 查 | 1.`GET key` <br> 2.`GETRANGE key start end `<br>3.`MGET key1 [key2..]`<br>4.`EXISTS key [key ...]` | 1.获取指定 key 的值 <br> 2.返回 key 中字符串值的子字符 <br>3.获取所有(一个或多个)给定 key 的值<br>4.判断 `key` 是否存在，存在返回1。多个`key`判断存在则计算总数并返回 |

## Redis 哈希(Hash)
#### 增
#### 删
#### 改
#### 查
## Redis 列表(List)
#### 增
#### 删
#### 改
#### 查
## Redis 集合(Set)
#### 增
#### 删
#### 改
#### 查
## Redis 有序集合(sorted set)
#### 增
#### 删
#### 改
#### 查