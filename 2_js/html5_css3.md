

##HTML5介绍

2009 html5
2014 html5 正式发布

	html5是html的下一代吗？
>答案：很明显不是的。html5前身是web application ( [WHATWG](http://baike.baidu.com/link?url=xZlYpiXKGUcx-L6FVXa0PWLX7EIkuL-6ZUzXAKNiAi_jmmrXs1MyxosSdhFd41Fyy_O7bXqulYQm52h-fFPjyK) =&gt; [W3C](http://baike.baidu.com/item/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F?fromtitle=w3c&fromid=216888&type=syn) )

###HTML5 的引用场景
- 极具表现力的网页。
>一般互联网企业都已经使用了html5了。[阿里云](https://www.aliyun.com) 、 京东 、淘宝 、内网系统 。。。
- 网页应用程序
>office 365 、 [百度doc](http://word.baidu.com/) 、 [百度echarts](http://echarts.baidu.com/demo.html#bubble-gradient) 。。。
- 混合式应用程序
>网易云音乐 、 有道词典  。。。

###HTML5 新增
- 标签
	- （语义化标签）&lt;header&gt;、&lt;footer&gt;、&lt;nav&gt;、&lt;article&gt;、&lt;aside&gt; 。。。
	- （应用程序标签） &lt;audio&gt;、&lt;video&gt;、&lt;canvas&gt; 
- 属性
	- 输入框的类型（email 、url 、number 、range 、Date 、pickers 、search 、color）
	- 新增属性（data-*、autocomplete、autofocus、multiple、placeholder、）
- canvas && svg && 画布
	- 使用 JavaScript 在网页上绘制图像
	- `SVG` 是一种使用 XML 描述 2D 图形的语言。
	- `Canvas` 通过 JavaScript 来绘制 2D 图形。 应用场景：[百度echarts](http://echarts.baidu.com/demo.html#bubble-gradient)
- <font color='red'>JavaScript API</font> 
	- 核心API的提升（性能上优化、新增选择器、全屏API）
	- <font color='blue'>网页储存（Cache 、**localStorage 、 sessionStorage**）</font> 
	- 设备信息访问（geolocation）
	- 拖拽 （ondragstart 、ondragover 、ondrop）
	- 文件系统
	- 网络访问（webSorket）

	[示例代码](./code/html5.html)

##CSS3介绍

- 选择器(selector)
	- 属性选择器（[attribute=value]）
	>常用在：input[name="type"]
	- 伪类选择器（:nth-child）
	>用的比较少，有比较严重的兼容性问题
- 背景和边框(background , border)
	- border-radius（边框圆角）
	- box-shadow（边框阴影）
	- border-image（边框图片）
- 弹性盒子(Flex Box)
>一种当页面需要<span style="color:red">适应不同的屏幕大小以及设备类型</span>时确保元素拥有<span style="color:red">恰当</span>的行为的布局方式。
>引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的<span style="color:red">子</span>元素进行<span style="color:red">排列、对齐和分配空白空间。</span>
- 文字特效
	- 文字阴影（text-shadow）
	- 文字模糊
- 2D/3D转换
- 动画
- 多列布局

	[示例代码](./code/css3.html)
