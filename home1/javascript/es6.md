## ECMAScript 6 (es6)
> 它是javascript语言下一代标准，已经在2015年6月的正式发布了，它的目标是使得JavaScript语言可以用来边学复杂的大型应用程序，成功企业级开发语言。

## 新增语法
> 新增了许多有有用的语法。还有些作用改变很大的。。
### let 关键字
```JavaScript
	let yeah = 'show let variable';
	// 注意：使用let声明变量的语法和使用var声明的语法是一样的。
	//      但是let声明的变量的作用域会限制在当前的代码块中。这是let与var的最大区别。
```

### 块级作用域 
### 默认参数表达式
```JavaScript
	function get_value(){
		return 1;
	}
	function add(one,two = get_value()){
		return one + two;
	}
	// 注意：参数的默认值，也可以是一个表达式或者函数调用等
```

### 模块 （import、export）
> 在ES6标准中，javascript原生支持module了。将不同功能的代码分别写在不同文件中，各模块只需 `导出(export)` 公共接口部分，然后在需要使用的地方通过模块的 `导入(import)` 就可以了。

```JavaScript
	// app.js 文件
	export function run(){
		return 'i\'m app.js run funciton ';
	}

	// ===============
	// show.js 文件
	import ./app.js
	run();
	
	// 注意：
```

### 字符串模板（`）反引号
```JavaScript
	//产生一个随机数
	let num = Math.random();
	//将这个数字输出到console
	console.log(`your num is ${num}`);
	// 注意：
```


ES6和ES5的对比：[http://es6-features.org](http://es6-features.org) 