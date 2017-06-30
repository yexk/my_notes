# webpack( 打包器 ) 
webpack是一个模块打包器，它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

## 快速入门
### 安装
> 前置条件：必须安装node.js环境。并熟悉使用npm，推荐使用cnpm命令。
```shell
npm install webpack -g  #安装
```
### 配置
初始化一个 node.js 项目
```shell
npm init 
```
在安装webpack到项目里面
```shell
npm install webpack --save-dev #这是开发才需要的所以放到dev下。
```

得到这个 `package.json` 文件。
```JavaScript
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Yexk",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.0.0"
  }
}

```

### 写代码
一般现在开发目录分成`src`目录和`dist`、`build`目录。一般前者`src`目录用于开发时候写的代码。后者`dist`、`build`目录用于webpack构建生成的目录。
