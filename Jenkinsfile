pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }

  }
  stages {
    stage('vue-press') {
      agent any
      steps {
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config set disturl https://npm.taobao.org/dist'
        sh 'npm config rm proxy'
        sh 'npm config rm https-proxy'
        sh 'npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass'
        sh 'npm install -g vuepress'
        echo 'vue press install success!'
      }
    }

    stage('build ') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

  }
}