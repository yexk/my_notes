[TOC]

#JavaScript基础入门

##JavaScript简介
>什么是JavaScript？

JavaScript 是一门跨平台、面向对象的轻量级脚本语言。	
JavaScript 是属于网络的脚本语言，是因特网上最流行的脚本语言。
JavaScript 做网页特效、验证表单、检测浏览器、创建cookies，以及更多的应用。
JavaScript 很容易使用！你一定会喜欢它的！

	简单、实用、易用、易学。    

>JavaScript 和 Java ？？

JavaScript 和 Java 有一些共性但是在另一些方面有着根本性区别。JavaScript语言类似 Java 但是并没有 Java 的静态类型和强类型检查特性。JavaScript 遵循了 Java 的表达式语法，命名规范以及基础流程控制，这也是 JavaScript 从 LiveScript 更名的原因。

| JavaScript | Java   |
| ------     | ------ |
| 面向对象。不区分对象类型。通过<span style="color: red">原型机制继承</span>，任何对象的属性和方法均可以被动态添加|	基于类系统。分为类和实例，通过<span style="color: red">类层级的定义实现继承</span>。不能动态增加对象或类的属性或方法。 |
|变量类型不需要提前声明(动态类型)。|	变量类型必须提前声明(静态类型)。|
| 不能直接自动写入硬盘。|	可以直接自动写入硬盘。|

- JavaScript 本地对象和内置对象
- Browser 对象（BOM）
- HTML DOM 对象

##JavaScript基础
>JavaScript 的很多语法借鉴自 Java，但也受到了 Awk，Perl 和 Python 影响。 
JavaScript 区分大小写，使用 Unicode 字符集。

### 注释
>注释的语法跟 C++ 和 JAVA 、PHP 等许多其他语言相同：

```javascript
	// 单行注释
	---
	/* 这是一个多行注释
	   多行注释 , Yexk
	*/
	---
	/**
	 * 这是文档注释
	 * @author Yexk
	 * @date 2016年12月20日
	 */
	---
	/* 但是, 你不能, /* 嵌套注释 */ 语法错误 */
```
### 变量声明
- **<span style="color: red">var</span> （声明一个变量，可选择将其初始化为一个值。）**
- let （声明一个块作用域的<span style="color:red">局部变量</span>(block scope local variable)，可选择将其初始化为一个值。）
- const （ 声明一个只读的常量。）

>命名规范
一个 JavaScript 标识符必须以<span style="color:red">字母、下划线（_）或者美元符号（$）开头</span>；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，这里所指的字母可以是“A”到“Z”（大写的）和“a”到“z”（小写的）。
合法的标识符示例：Yexk_name，yexk99 , $yexk 和 _yexk 。
[示例代码](./code/javascript_var.html)

###数据结构和类型
JavaScript语言可以识别下面 7 种不同类型的值：

- 六种 <span style="color:red">原型</span> 数据类型:
	- `Boolean`. 布尔值，true 和 false.
	- `null`. 一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL或其他变量完全不同。
	- `undefined`. 变量未定义时的属性。
	- `Number`. 表示数字，例如： 42 或者 3.14159。
	- `String`. 表示字符串，例如："Howdy"
	- `Symbol`. ( 在 ECMAScript 6 中新添加的类型 )。一种数据类型，它的实例是唯一且不可改变的。
- 一种 `Object` 对象类型

数据类型的转换(Data type conversion)

```javascript
	// 算式的加减
	var x = 100;
	var y = "200";
	var z = x + y; 
	// var z = '我的计算结果是：'+ x + y; 

	// 数字和undefined加减
	var x;
	var y = '100';
	var z = x + y;
```

1.（运算符转换） 字符串转数值型 ` + ` 
> 一般用的比较少，因为很容易混淆。

```javascript
	var x = 100;
	var y = "200";
	var z = x + (+y); 
```

**<span style="color:blue;">2.（函数转换）字符串转数值型 parseInt()和parseFloat() </span>**
> parseInt把值转换成整数，parseFloat把值转换成浮点数。只有对<span style="color:red">String类型调用这些方法</span>，这两个函数才能正确运行；对其他类型返回的都是NaN(Not a Number)。  

```javascript
	parseInt("1234blue");   //return   1234 
	parseInt("0xA");        //return   10 
	parseInt("22.5");       //return   22 
	parseInt("blue");       //return   NaN
	// 进制直接的转换
	parseInt("10", 2);      //return   2 
	parseInt("10", 8);      //return   8 
	parseInt("10", 10);     //return   10 
```
3. (强制转换) 转任意类型 Number() 、Boolean() 、String()

```javascript
	Number(false);	        // return  0 
	Number(true);	        // return  1 
	Number(undefined);	    // return  NaN 
	Number(null);	        // return  0 
	Number( "5.5 ");	    // return  5.5 
	Number( "56 ");	        // return  56 
	Number( "5.6.7 ");	    // return  NaN 
	Number(new   Object());	// return  NaN 
	Number(100);	        // return  100  
```

4.（加引号转换）字符串转数值型 toString()
>一般不改变原来的值的状态直接给数据加上引号。<span style="color:red">（数值型、undefined、null没有toString()函数）</span>

```javascript 
	true.toString();         // return "true"
	false.toString();        // return "false"
	['1','2',3].toString();  // return "1,2,3"
	new Object().toString(); // return "[object Object]"
	// 数值型、undefined、null没有toString()函数
	100.toString();          // Uncaught SyntaxError: Invalid or unexpected token
	undefined.toString();    // Uncaught TypeError: Cannot read property 'toString' of undefined
	null.toString();         // Uncaught TypeError: Cannot read property 'toString' of null
```

###字面量 (Literals)
>在JavaScript中，你可以使用各种字面量。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。`其实就是语法格式`
