FROM node:12-alpine

ENV DIR=/www/project

WORKDIR ${DIR}

RUN  npm config set registry https://registry.npm.taobao.org \
    && npm config set disturl https://npm.taobao.org/dist \
    && npm config rm proxy \
    && npm config rm https-proxy \
    && npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass \
    && npm install -g vuepress