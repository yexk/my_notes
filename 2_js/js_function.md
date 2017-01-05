

#函数 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)</sup>
>函数是搭建JavaScript块的基本构件之一。一个函数本身就是一段JavaScript程序——包含用于执行某一任务或计算的一系列语句。要使用某一个函数，你必需在想要调用这个函数的执行域的某处定义它。

###定义函数(Defining function)
>一个函数的定义（也称为函数的声明）由一系列的函数关键词组成, 依次为：

- 函数的名称。
- 函数参数列表，包围在括号( )中并由逗号( , )区隔。
- 函数功能，包围在花括号{ }中，用于定义函数功能的一些JavaScript语句。

语法一：
```JavaScript
function name([param[, param[, ... param]]]) { statements }
```

- `name` 函数名.
- `param` 传递给函数的参数的名称，一个函数最多可以有255个参数。
- `statements` 组成函数体的声明语句。

语法二：
```JavaScript
function [name]([param] [, param] [..., param]) { statements } 
```

- `name` 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。
- `param` 传递给函数的参数的名称，一个函数最多可以有255个参数.
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

语法三：函数生成器表达式 (function* 表达式)
语法三：箭头函数表达式 (=>)
```JavaScript
	// 函数生成器
	function* [name]([param] [, param] [..., param]) { statements }
	// 箭头函数
	([param] [, param]) => { statements } param => expression
```
><span style="color:red">Note</span>:  函数生成器、箭头函数表达式是ECMAScript 6新定义的，大部分浏览器尚不支持。目前只做了解

[示例代码](./code/js_function.html)

###函数的作用域(Function scope)
