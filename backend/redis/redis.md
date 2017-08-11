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
> Redis 字符串数据类型的相关命令用于管理 redis 字符串值。

| 操作 |  命令 | 说明 | 
| -- | -- | -- |
| 增 | 1.`SET key value `<br>2.`SETNX key value`<br>3.`SETEX key seconds value` | 1.设置指定 `key` 的值<br>2.只有在 `key` 不存在时设置 `key` 的值<br>3.将值 value 关联到 `key` ，并将 `key` 的过期时间设为 `seconds` (以秒为单位) |
| 删 | `GET key` | 删除指定 `key` 的值 |
| 改 | 同 操作`增`<br>1.`GETSET key value`<br>2.`INCR key`<br>3.`DECR key`<br>4.`INCRBY key increment`<br>5.`DECRBY key decrement`<br>6.`APPEND key value` | <br>1.将给定 `key` 的值设为 `value` ，并返回 `key` 的旧值(old value) <br>2.将 key 中储存的数字值增一<br>3.将 key 中储存的数字值减一<br>4.将 key 所储存的值加上给定的增量值（increment）<br>5.key 所储存的值减去给定的减量值（decrement）<br>6.如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。 |
| 查 | 1.`GET key` <br> 2.`GETRANGE key start end `<br>3.`MGET key1 [key2..]`<br>4.`EXISTS key [key ...]` | 1.获取指定 key 的值 <br> 2.返回 key 中字符串值的子字符 <br>3.获取所有(一个或多个)给定 key 的值<br>4.判断 `key` 是否存在，存在返回1。多个`key`判断存在则计算总数并返回 |

## Redis 哈希(Hash)
> Redis hash 是一个string类型的field和value的映射表，hash特别适合用于存储对象。
Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）。

| 操作 |  命令 | 说明 | 
| -- | -- | -- |
| 增 | 1.`HMSET key field1 value1 [field2 value2 ]`<br>2.`HSET key field value`<br>3.`HSETNX key field value`     | 1.同时将多个 field-value (域-值)对设置到哈希表 key 中<br>2.将哈希表 key 中的字段 field 的值设为 value<br>3.只有在字段 field 不存在时，设置哈希表字段的值 | 
| 删 | 1.`HDEL key field2 [field2]`  | 1.删除一个或多个哈希表字段 | 
| 改 |  同 操作`增`<br>1.`HINCRBY key field increment`<br>2.`HINCRBYFLOAT key field increment`  | <br>1. 为哈希表 `key` 中的指定字段的整数值加上增量 `increment` <br>2.为哈希表 `key` 中的指定字段的浮点数值加上增量 `increment` | 
| 查 | 1.`HEXISTS key field` <br>2.`HGET key field`<br>3.`HKEYS key`<br>4.`HVALS key`<br>5.`HLEN key`<br>6.`HGETALL key`   | 1.查看哈希表 `key` 中，指定的字段是否存在<br>2.获取存储在哈希表中指定字段的值<br>3.获取所有哈希表中的**字段**<br>3.获取所有哈希表中的**值**<br>4.获取哈希表中字段的数量<br>5.获取在哈希表中指定 `key` 的所有字段和值  | 

## Redis 列表(List)
> Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）
一个列表最多可以包含 232 - 1 个元素 (4294967295, 每个列表超过40亿个元素)。

| 操作 |  命令 | 说明 | 
| -- | -- | -- |
| 增 | 1.`LPUSH key value1 [value2]`<br>2.`RPUSH key value1 [value2]`<br>3.`LPUSHX key value`<br>4.`RPUSHX key value`<br>5.`LSET key index value`  | 1.将一个或多个值插入到列表**头部**<br>2.将一个或多个值插入到列表**尾部**<br>3.将一个值插入到已存在的列表**头部**,如果不存在则插入失败。<br>4.将一个值插入到已存在的列表**尾部**,如果不存在则插入失败<br>5.通过索引设置列表元素的值  |
| 删 | 1.`LPOP key`<br>2.`RPOP key`<br>3.`BLPOP key1 [key2 ] timeout`<br>4.`BRPOP key1 [key2 ] timeout`<br>5.`LREM key count value`<br>6.`LTRIM key start stop`<br>7.`RPOPLPUSH source destination`<br>8.`BRPOPLPUSH source destination timeout`<br>9.`LINSERT key BEFORE|AFTER pivot value` | 1.移出并获取列表的第一个元素<br>2.移除并获取列表最后一个元素<br>3.移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止<br>4.移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止<br>5.移除列表元素<br>6.对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。<br>7.移除列表的最后一个元素，并将该元素添加到另一个列表并返回<br>8.从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止<br>9.在列表的元素前或者后插入元素  |
| 改 |   同 操作`增`、`删`  |    |
| 查 | 1.`LRANGE key start stop`<br>2.`LINDEX key index`<br>3.`LLEN key`   | 1.获取列表指定范围内的元素<br>2.通过索引获取列表中的元素<br>3.获取列表长度  |

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