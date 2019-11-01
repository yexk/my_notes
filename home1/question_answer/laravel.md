## 插入数据是的时候出现错误解决办法:MassAssignmentException in Model.php line 407

浏览器报错误：MassAssignmentException in Model.PHP line 407: username
此时的问题可能是：
1. 此时可能是字段错误
2. 代码错误
3. 还有就是是否开启Laravel白名单字段，开启的可以操作写入
protected $fillable = ['username', 'age'];//开启白名单字段
此时问题解决。