pipeline {
  agent {
    node {
      label '12'
    }

  }
  stages {
    stage('vue-press') {
      agent any
      steps {
        sh '''npm config set registry https://registry.npm.taobao.org
    && npm config set disturl https://npm.taobao.org/dist
    && npm config rm proxy
    && npm config rm https-proxy
    && npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
    && npm install -g vuepress'''
        echo 'install vue press complete'
        sh 'npm install && npm run build'
      }
    }

  }
}