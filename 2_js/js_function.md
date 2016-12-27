

#函数 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)</sup>
>函数是搭建JavaScript块的基本构件之一。一个函数本身就是一段JavaScript程序——包含用于执行某一任务或计算的一系列语句。要使用某一个函数，你必需在想要调用这个函数的执行域的某处定义它。

###定义函数(Defining function)
>一个函数的定义（也称为函数的声明）由一系列的函数关键词组成, 依次为：

- 函数的名称。
- 函数参数列表，包围在括号( )中并由逗号( , )区隔。
- 函数功能，包围在花括号{ }中，用于定义函数功能的一些JavaScript语句。

例如，以下的代码定义了一个简单的square函数：
```JavaScript
	function square(number) {
		return number * number;
	}
```

###函数的作用域(Function scope)


