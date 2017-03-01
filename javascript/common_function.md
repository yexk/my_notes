
###1.js数组去重
~~~JavaScript
// 数组去重
Array.prototype.ye_unique = function(){
	var res = [];
	var json = {};
	for(var i = 0; i < this.length; i++){
		if(!json[this[i]]){
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}
~~~

###2. js mac地址转成10进制数
```JavaScript
/**
 * mac地址转成10进制数
 * @Author Yexk
 * @Date   2017-01-17
 * @param  {string}   mac mac地址信息
 * @return {Number}       返回10进制的int
 */
function mac_string_to_int(mac) {
    var convertResult=0; 
    var temp = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
    var temp12 = /[A-Fa-f0-9]{12}/;
    var n = mac.replace(/-/g, "");
    if (temp.test(n)) 
    {
        n=mac.replace(/:/g, "");
        convertResult=parseInt(n,16);
    }
    if (temp12.test(n)) 
    {
        convertResult=parseInt(n,16);
    }
    if(isNaN(convertResult)||convertResult==0||convertResult>281474976710655)
    {
        alert("请输入合法的MAC值");return false;
    }
    else
    {
        return convertResult;
    }
}
```

###3. js mac地址的十进制数转成十六进制数
```JavaScript
/**
 * mac地址的十进制数转成十六进制数
 * @Author Yexk
 * @Date   2017-01-17
 * @param  {number}   str int类型的十进制 mac地址数
 * @return {String}       返回十六进制的mac地址。
 */
function mac_int_to_string(str) {
    var str = str.toString(16);
    var mac_str = '';
    for (var i = 0; i < str.length; i++) {
        if (i%2==0) {
            mac_str += str[i];
        }else{
            mac_str += str[i] + ':';
        }
    }
    mac_str = mac_str.substr(0,mac_str.length-1);
    return !arguments[1] ? mac_str.toUpperCase() : mac_str ;
}
```

###4. js 重复输出某串字符
```JavaScript
    /**
     * 重复输出某串字符
     * @Author Yexk
     * @Date   2017-03-01
     * @param  {String}   str 需要被复制的字符串
     * @param  {Number}   num 重复的次数
     * @return {String}       返回结果
     */
    function str_repeat(str, num){
        return new Array( num + 1 ).join( str ); 
    }

```