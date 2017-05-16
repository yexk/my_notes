# 移动端JavaScript调试
> 现在移动开发的技术不断成熟，但在移动上面开发调试是很复杂的。遇到些浏览器兼容性问题。且不说解决，能找到问题都是一个很麻烦的事情。
> 此文档适用用于PC端。

## 调试方式
目前我已知的调试方式：

1. 源码调试。
2. alert调试。
3. 浏览器的console打印调试（Chrome DevTools、Firebug）
4. 控制台断点调试
5. Chrome浏览器的ChromeDevTools远程调试
6. weinre调试

### 源码调试
```
推荐指数 ：不推荐
调试难度 ：*****
实用性   ：*
```
查看源代码的方式一步一步的去读代码，然后找到错误并修改。
这方式不适合我这种菜鸟。对于大神，请随意。我比较喜欢直接看结果的调试方式。

> **优点**：可以装x。
> **缺点**：调试时间长，效率低。

### alert调试
```
推荐指数 ：***
调试难度 ：****
实用性   ：** 
```
`alert()`方法的初衷是为了通过弹窗的方式，来警告或提示用户做对应的操作，并且有强制中断效果。
目前对于弹窗已经有许多替代品，而默认的alert常常都是用于调试。在我觉得有错误的位置前后操作。如果有弹窗就说明没问题。否则就出现问题。

**例如**：有以下这段js代码([1_1_alert.html](demo_test/1_1_alert.html))
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>1_1_alert.html</title>
</head>
<body>
	<script>
		// 这里有很多很多代码。。。
		alert(1);
		document.getElementById('ye_test_1').innerHTML = "Yexk";
		alert(2);
		// 这里有很多很多代码。。。
	</script>
</body>
</html>
```
通过访问发现，这里只弹出了1，没有弹出2，那就是这两行代码中间出现了问题。
去寻找问题，发现了这行代码的意思是找到元素的ID为ye\_test\_1。但这个文档里面是没有这个元素的，所以报错了。
解决办法根据实际开发情况去更改代码就可以了。

> 首先找到这段代码自己觉得有问题的地方，然后对这段代码进行前后加上alert()。
> 要是找不出问题在哪也没有关系，可以在一些关键的地方进行加上调试，然后进一步的缩小范围。
> **优点**：效果明显，简单除暴。
> **缺点**：操作麻烦，只能打印基本数据类型（字符串，数字，等）

个人觉得这个调试虽然这方法简单粗暴，但是有利有弊，并且利小于弊。比如在for循环里面查看里面的执行情况，那就太麻烦了。这个可以根据实际情况酌情选择。

### 浏览器的console打印调试
```
推荐指数 ：*****
调试难度 ：****
实用性   ：**** 
```
控制台调试工具，目前属于最好用的调试工具，没有有之一。目前常用的：[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)（Chrome浏览器自带）、Firebug（需要自行安装）、其他浏览器自带的。
调试方法相对文艺，功能强大。可以查看具体的执行位置，报错的位置。
**例如**：下面这个代码([1_2_console.html](demo_test/1_2_console.html))
对下面的div进行赋值为"js is so cool!"
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>1_2_console.html</title>
</head>
<body>
	<div>1</div>
	<script>
		var div = document.querySelectorAll('div');
		div.innerHTML = 'js is so cool';
	</script>
</body>
</html>
```
类似这种错误，通过上面所说的alert方法就调试不出为啥，因为语法没有错误。这里可以通过查看获取的div对象查找原因。
代码改成：
```JavaScript
	var div = document.querySelectorAll('div');
	console.log(div);
	div.innerHTML = 'js is so cool';
```
结果：
![images/1_1_console.png](images/1_1_console.png)
可以发现获取的div元素是被一个数组给包裹起来了。而对div直接复制相当于给数组添加一个键值对。所以这里要想取得div元素对象，只要在取得div数组里下标为0的元素然后在进行赋值就行了。
最后代码改成：
```JavaScript
	var div = document.querySelectorAll('div');
	console.log(div);
	div[0].innerHTML = 'js is so cool';
```
修改后的结果：
![images/1_2_reult_sconsole.png](images/1_2_reult_sconsole.png)
这里也可以通过语法知识去判断，不过在这里只是为了演示这个console的案例。
> 控制台打印已经可满足大部分调试了，基本没有控制台解决不了的问题。如果有，请配合其他调试方式和带上脑子。
> **优点**：效果明显，简单除暴+功能齐全，可以打印任何数据类型，操作简单使用方便。
> **缺点**：打印对象太多了就会展不开对象的信息。

附录：[console对象的其他方法](readme.md)

> 我个人一般而且强力推第三种，浏览器控制台够用了。
> 正所谓调试页面的方法千千万，找到合适自己的就好。
