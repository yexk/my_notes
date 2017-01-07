[TOC]

#JavaScript基础入门
>推荐的学习网站 [MDN](https://developer.mozilla.org)
##JavaScript简介 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Introduction)</sup>
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
| 不能直接自动写入硬盘。| 可以直接自动写入硬盘。|

- JavaScript 本地对象和内置对象
- Browser 对象（BOM）
- HTML DOM 对象
![关系图](./images/jsRelation.gif)

##JavaScript基础
>JavaScript 的很多语法借鉴自 Java，但也受到了 Awk，Perl 和 Python 影响。 
JavaScript 区分大小写，使用 Unicode 字符集。

##语法与数据类型 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)</sup>

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
合法的标识符示例：`Yexk_name` , `yexk99` , `$yexk` 和 `_yexk` 。
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
	// Number
	Number(false);	        // return  0 
	Number(true);	        // return  1 
	Number(undefined);	    // return  NaN 
	Number(null);	        // return  0 
	Number( "5.5 ");	    // return  5.5 
	Number( "56 ");	        // return  56 
	Number( "5.6.7 ");	    // return  NaN 
	Number(new   Object());	// return  NaN 
	Number(100);	        // return  100  
	// Boolean
	Boolean("");		    //false - 空字符串
	Boolean("hello");		//true  - 非空字符串
	Boolean(50);		    //true  - 非零数字
	Boolean(null);		    //false - null
	Boolean(undefined);		//false - undefined
	Boolean(0);		        //false - 零
	Boolean(new object());	//true  - 对象
	// String
	String(null);			//"null"
	String(50);			    //"50"
	String(new object());	//"[object Object]"
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

####数组字面量(Array literals)
>数组字面值是一个封闭在方括号对([])中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当你使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数。

```JavaScript
	// []定义
	var coffees = ["xiaoming", "xioahong", "xiaozhang"];
	// new Array定义
	var arr = new Array();// 可以设置数组元素也可以后期绑定

	var a=[3];
	console.log(a.length);  // 1
	console.log(a[0]);      // 3
```
**`尾部的逗号在早期版本的浏览器中会产生错误，因而编程时的最佳实践方式就是移除它们。`**

####布尔字面量 (Boolean literals)
>不要混淆作为布尔对象的真和假与布尔类型的原始值true和false。布尔对象是原始布尔数据类型的一个包装器。

####整数 (Intergers)
>整数可以用十进制（基数为10）、十六进制（基数为16）、八进制（基数为8）以及二进制（基础为2）表示。

- 十进制整数字面量由一串数字序列组成，且没有前缀0。
- 八进制的整数以 0（或0O、0o）开头，只能包括数字0-7。
- 十六进制整数以0x（或0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
- 二进制整数以0b（或0B）开头，只能包含数字0和1。

```JavaScript
	0, 117 and -345 (十进制, 基数为10)
	015, 0001 and -0o77 (八进制, 基数为8) 
	0x1123, 0x00111 and -0xF1A7 (十六进制, 基数为16或"hex")
	0b11, 0b0011 and -0b11 (二进制, 基数为2)
```

`严格模式下，八进制整数字面量必须以0o或0O开头，而不能以0开头。`[注释](./code/js_strict.html)

####浮点数字面量 (Floating-point literals)
浮点数字面值可以有以下的组成部分：

- 一个十进制整数，可以带正负号（即前缀“+”或“ - ”），
- 小数点（“.”），
- 小数部分（由一串十进制数表示），
- 指数部分。

`指数部分以“e”或“E”开头，后面跟着一个整数，可以有正负号（即前缀“+”或“-”）。浮点数字面量至少有一位数字，而且必须带小数点或者“e”（大写“E”也可）。`

```JavaScript
	3.14      
	-.2345789 // -0.23456789
	-3.12e+12  // -3.12*1012
	.1e-23    // 0.1*10-23=10-24=1e-24
```
####对象字面量 (Object literals)
>对象字面值是封闭在花括号对({})中的一个对象的零个或多个"属性名-值"对的（元素）列表。

```JavaScript
var people = {
	'name' : 'yexk',
	'speak' : function(name){
		console.log('我告诉你我的名字是：'+name);
	}
}
people.speak('Yexk');
```
注意事项：
```JavaScript
var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
```

####RegExp 字面值
>一个正则表达式是字符被正斜线 “/”围成的表达式。

下面是一个正则表达式文字的一个例子。
```JavaScript
var re = /[0-9]/; // 匹配0-9的字符串。
```

####字符串字面量 (String literals)
>字符串字面量是由`双引号（"）`对或`单引号（‘）`括起来的`零个`或`多个`字符。字符串被限定在同种引号之间；也即，必须是成对单引号或成对双引号。
JavaScript会自动将字符串字面值转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象。你也能用对字符串字面值使用类似String.length的属性：

下面的例子都是字符串字面值：
```JavaScript
	"abc"
	'xiaomin'
```

##表达式和运算符 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)</sup>
> JavaScript 的表达式和运算符，包括了赋值，比较，算数，按位，逻辑，字符串，三元等等。

###运算符 Operators
JavaScript 拥有如下类型的运算符。本节描述了运算符和运算符的优先级。

- 赋值运算符(Assignment operators)


- 比较运算符(Comparison operators)
- 算数运算符(Arithmetic operators)
- 按位运算符(Bitwise operators)
- 逻辑运算符(Logical operators)
- 字符串运算符(String operators)
- 条件 (三元) 运算符(Conditional operator)
- 逗号运算符(Comma operator)
- 一元运算符(Unary operators)
- 关系运算符(Relational operator)





##控制流与循环 <sup>[注](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)</sup>
###语句块（Block Statement）
大多数程序都使用语句块来给语句分组，这样可以使语句的结构清晰明了。我们使用一对花括号（ {} ）来分组语句块，如下所示：
```JavaScript
{
   语句_1;   语句_2;
   语句_3;
   ...
   语句_n;
}
// eg. 
if(条件)
{
	// 语句体（语句块）
}
```

>**注意**：在ECMAScript 6标准之前，Javascript没有块作用域。如果你在块的外部声明了一个变量，然后在块中声明了一个相同变量名的变量，并赋予不同的值。[示例代码](./code/block_statement.html)

###条件判断语句（Conditional Statements）
>条件判断语句指的是根据指定的条件所返回的结果（真或假或其它预定义的），来执行特定的语句。JavaScript提供了两种条件判断语句：if...else 和 switch。

- if ... else ... 语句

>当一个逻辑条件为真，用if语句执行一个语句。当这个条件为假，使用可选择的else从句来执行这个语句。

```JavaScript
if (condition) {
  statement_1;
}
[else {
  statement_2;
}] 
// 多条件的形式
if (condition_1) {
  statement_1;
}
[else if (condition_2) {
  statement_2;
}]
...
[else if (condition_n_1) {
  statement_n_1;
}]
[else {
  statement_n;
}]
```

- switch ... 语句

>switch语句允许一个程序求一个表达式的值并且尝试去匹配表达式的值到一个case 标签。如果匹配成功，这个程序执行相关的语句。

```JavaScript
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}
```

###循环语句（Loop Statement）

- for ... 语句

>for 反复循环直到一个特定的条件计算为假。JavaScript中的循环和Java以及C中的循环相似。

```JavaScript
for ([initialExpression]; [condition]; [incrementExpression])
{
   statement
}
```
在一个for 执行的过程中，会发生以下事情：

> - [initialExpression]：初始化表达式，若存在则执行。此表达式通常初始化了一个或多个循环用计数器，语法上也允许设定一个任意复杂度的表达式。表达式里还可以声明变量。
> - [condition]：条件表达式。如果表达式的值为true，将执行循环语句；若为false，循环终止。若要完全忽略此条件表达式，则设此表达式的值为true。
> - statement：需执行的语句。如果要执行多条语句，就要用花括号（{...}）把语句括起来。
> - [incrementExpression]：累计表达式。若存在则执行，然后会回到第2步执行语句。

- for ... in ... 语句

>for...in 语句迭代一个指定的变量去遍历这个对象的属性，每个属性，javascript 执行指定的语句。一个for...in 语句示例如下：

```JavaScript
for (variable in object) {
   statements
}
```

- do ... while ... 语句

>do...while 语句反复直到一个特定条件计算为假。

```JavaScript
do{
   statement
}while (condition);
```

- while ... 语句

>while语句只要一个特定条件计算为真就执行语句。

```JavaScript
while (condition){
   statement
}
```

- 标签语句（label Statement）

>标签语句提供一种使你同一程序的在另一处找到它的标识。例如，你可以用一个标签来识别一个循环，并用break或continue语句来说明一个程序是否要中断这个循环或是继续执行。

```JavaScript
label :
   statement

// 例如：markLoop 就是label。
markLoop:
while (theMark == true) {
   doSomething();
}
```
`label 的值可以是js的任何非保留字标识符。 用label 标识的语句可以是任何语句。`

- 中断语句（break Statement）

>使用中断语句终止循环、开关或与标签语句连接。

中断语句的语法如下：
	1. break;
	2. break label;

```JavaScript
// break;
for (i = 0; i < a.length; i++) {
    if (a[i] == theValue)
        break;
}
// break label
var x = 0;
var z = 0
labelCancelLoops: while (true) {
    console.log("Outer loops: " + x);
    x += 1;
    z = 1;
    while (true) {
        console.log("Inner loops: " + z);
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelLoops;
        } else if (z === 10) {
            break;
        }
    }
}
```
[break示例代码](./code/js_break.html)

- 连续语句（continue Statement）

>连续语句用于重新开始 while, do-while, for语句，或者标签语句（label statement）。

[continue示例代码](./code/js_continue.html)
