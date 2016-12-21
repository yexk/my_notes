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

### 变量声明
- **<span style="color: red">var</span> （声明一个变量，可选择将其初始化为一个值。）**
- let （声明一个块作用域的<span style="color:red">局部变量</span>(block scope local variable)，可选择将其初始化为一个值。）
- const （ 声明一个只读的常量。）

>命名规范
一个 JavaScript 标识符必须以<span style="color:red">字母、下划线（_）或者美元符号（$）开头</span>；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，这里所指的字母可以是“A”到“Z”（大写的）和“a”到“z”（小写的）。
合法的标识符示例：Yexk_name，yexk99 , $yexk 和 _yexk 。
[示例代码](./code/javascript_var.html)

