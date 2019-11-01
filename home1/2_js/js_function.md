[TOC] 

# 函数 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)</sup>
>函数是搭建JavaScript块的基本构件之一。一个函数本身就是一段JavaScript程序——包含用于执行某一任务或计算的一系列语句。要使用某一个函数，你必需在想要调用这个函数的执行域的某处定义它。

### 定义函数(Defining function)
>一个函数的定义（也称为函数的声明）由一系列的函数关键词组成, 依次为：

- 函数的关键字（function）
- 函数的名称。
- 函数参数列表，包围在括号( )中并由逗号( , )区隔。
- 函数功能，包围在花括号{ }中，用于定义函数功能的一些JavaScript语句。

语法一（普通函数）：
```JavaScript
function name([param[, param[, ... param]]]) { statements }
```

- `name` 函数名.
- `param` 传递给函数的参数的名称，一个函数最多可以有255个参数。
- `statements` 组成函数体的声明语句。


例如，以下的代码定义了一个简单的square函数：
```JavaScript
	function square(number) {
		return number * number;
	}
	// 函数square使用了一个参数，叫作number。这个函数只有一个语句，
	// 它说明该函数会将函数的参数（即number）自乘后返回。
	// 函数的return语句确定了函数的返回值。
```

语法二（匿名函数）：
```JavaScript
function [name]([param] [, param] [..., param]) { statements } 
```

- `name` 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。
- `param` 传递给函数的参数的名称，一个函数最多可以有255个参数.
- `statements` 组成函数体的声明语句。

例如，以下的代码定义了一个简单的匿名函数：
```JavaScript
	var square = function(number) {
		return number * number;
	}
	// 匿名函数使用了一个参数，叫作number。这个函数只有一个语句，
	// 它说明该函数会将函数的参数（即number）自乘后返回。
	// 函数的return语句确定了函数的返回值。
```

匿名函数的用途：
- jQuery插件
- 回调函数
- DOM操作


语法三：函数生成器表达式 (function* 表达式)
语法四：箭头函数表达式 (=>)
```JavaScript
	// 函数生成器
	function* [name]([param] [, param] [..., param]) { statements }
	// 箭头函数
	([param] [, param]) => { statements } param => expression
```
><span style="color:red">Note</span>:  函数生成器、箭头函数表达式是ECMAScript 6新定义的，大部分浏览器尚不支持。目前只做了解

[示例代码](./code/js_function.html)

### 参数(arguments)对象
>arguments 是一个类数组对象。代表传给一个function的参数列表。
arguments 对象是函数内部的本地变量；arguments 已经不再是函数的属性了。

```JavaScript
	function test()
	{
		// 这个arguments就代表函数所接受的所有参数
		console.log(arguments);
	}
	
	test('a');
	test('a','b');
	test('a','b',100);

```
[示例代码](./code/js_arguments.html)

实例：模拟Java重载(overloading)

`注意： arguments 变量只是 "类数组对象"，并不是一个数组。称其为类数组对象是说它有一个索引编号和Length属性。尽管如此，它并不拥有全部的Array对象的操作方法。`

### 闭包(Closures)
>闭包是JavaScript中最强大的特性之一。
<span style="color:red">闭包是一个可以自己拥有独立的环境与变量的的表达式（通常是函数）。</span>
	---
JavaScript允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。而且，当内部函数生存周期大于外部函数时，由于内部函数可以访问外部函数的作用域，定义在外部函数的变量和函数的生存周期就会大于外部函数本身。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

```JavaScript
function A()
{
	var x = 100;
	return function()
	{
		console.log(x);
	}
}	
A()()
```
[示例代码](./code/js_Closures.html)
引用：变量的作用域的概念

### Function构造函数 vs 函数声明 vs 函数表达式
对比下面的例子：
一个用Function构造函数定义的函数,被赋值给变量multiply:
```JavaScript
	function multiply(x, y) {
		return x * y;
	}
```
一个匿名函数的函数表达式，被赋值给变量multiply:
```JavaScript
	var multiply = function(x, y) {
		return x * y;
	};
```
一个命名为func_named的函数的函数表达式，被赋值给变量multiply:
```JavaScript
	var multiply = function func_name(x, y) {
		return x * y;
	};
```
差别:
虽然有一些细微的差别，但所起的作用都差不多：
>函数名和函数的变量存在着差别。函数名不能被改变，但函数的变量却能够被再分配。函数名只能在函数体内使用。倘若在函数体外使用函数名将会导致错误（如果函数之前是通过一个var语句声明的则是undefined）。

### 附录：
JavaScript内置函数
>Array数组


| 函数 | 描述 | 别名 |
|-----| ---- | ---- | 
| `join()` | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。|[数组转字符串]
| `pop()` | 删除并返回数组的最后一个元素 |[删后]
| `push()` | 向数组的末尾添加一个或更多元素，并返回新的长度。|[加后]
| `shift()` | 删除并返回数组的第一个元素 |[删前]
| `unshift()` | 向数组的开头添加一个或更多元素，并返回新的长度。|[加前]

>Date日期函数

| 函数 | 描述 | 别名 |
|-----| ---- | ---- | 
| `getFullYear()` | 从 Date 对象以四位数字返回年份。|[年]
| `getMonth()` | 从 Date 对象返回月份 (0 ~ 11)。|[月]
| `getDate()` | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。|[日]
| `getHours()` | 返回 Date 对象的小时 (0 ~ 23)。|[时]
| `getMinutes()` | 返回 Date 对象的分钟 (0 ~ 59)。|[分]
| `getSeconds()` | 返回 Date 对象的秒数 (0 ~ 59)。|[秒]
| `getTime()` | 返回 1970 年 1 月 1 日至今的毫秒数。|[时间戳]

>Math数学函数

| 函数 | 描述 | 别名 |
|-----| ---- | ---- | 
|`random()` | 回 0 ~ 1 之间的随机数。|[随机数]
|`ceil(x)` | 对数进行上舍入。|[进位]
|`floor(x)` | 对数进行下舍入。|[舍弃]

>Number数字函数

| 函数 | 描述 | 别名 |
|-----| ---- | ---- | 
|`toFixed` | 把数字转换为字符串，结果的小数点后有指定位数的数字。|[四舍五入]

>String字符串函数

| 函数 | 描述 | 别名 |
|-----| ---- | ---- | 
| `split()` | 把字符串分割为字符串数组。|[字符串转数组]
| `charAt()` | 返回在指定位置的字符。|\[查][找字符返回下标]
| `indexOf()` | 检索字符串。|\[查][找下标返回字符]
| `lastIndexOf()` | 从后向前搜索字符串。|\[查][找下标返回字符]
| `replace()` | 替换与正则表达式匹配的子串。|[改]
| `substr()` | 从起始索引号提取字符串中指定数目的字符。|\[改][字符串截取]
| `substring()` | 提取字符串中两个指定的索引号之间的字符。|\[改][字符串截取]

>Global全局函数

| 函数 | 描述 | 别名 |
|-----| ---- | ---- | 
| `parseFloat()` | 解析一个字符串并返回一个浮点数。|[转整型]
| `parseInt()` | 解析一个字符串并返回一个整数。|[转浮点型]

JavaScript BOM对象
>Window浏览器窗口函数

| 函数 | 描述 |
|-----| ---- |
| `setInterval()` | 按照指定的周期（以毫秒计）来调用函数或计算表达式。|
| `setTimeout()` | 在指定的毫秒数后调用函数或计算表达式。|
| `clearInterval()` | 取消由 setInterval() 设置的 timeout。|
| `clearTimeout()` | 取消由 setTimeout() 方法设置的 timeout。|

>History浏览器历史记录函数

| 函数 | 描述 |
|-----| ---- |
| `go()` | 加载 history 列表中的某个具体页面。|

>Location浏览器地址栏函数

| 函数 | 描述 |
|-----| ---- |
| `reload()` | 重新加载当前文档。|