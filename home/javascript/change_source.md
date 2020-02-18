# npm 或者 yarn 改镜像源

## 前提&问题

```SH
# yarn 
yarn install v1.22.0
info No lockfile found.
[1/4] Resolving packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/moment: getaddrinfo EAI_AGAIN registry.yarnpkg.com".
info If you think this is a bug, please open a bug report with the information provided in "/mnt/d/project/my_notes/yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```

也许大家都和我一样。遇到国内访问原生镜像源有各种问题。可又不想换 `cnpm` 。 就有了换源这一说法了。

## 教程开始

```SH
# 第一步， 换地址
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist

# 第二步 换node-sass 地址代理
npm config rm proxy
npm config rm https-proxy
yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```
