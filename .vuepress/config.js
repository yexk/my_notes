const moment = require('moment')
const fs = require('fs')
const path = require("path")
const ROOT_PATH = __dirname + '/../'

module.exports = {
  title: 'YexkM 极致分享',
  description: '一个具有幻想力的沙雕-2020',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/medium-zoom', 
      {
        options: {
          margin: 16
        }
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD')
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      { text: '主页', link: '/home/' },
      { text: 'TS周刊2.0', link: '/tsgroup/' },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/yexk' },
      { text: 'v1.0', link: 'http://yexk.cn' }
    ],
    sidebar: {
      '/home/': [
        {
          title: '主页',   // 必要的
          path: '/home/',        // 可选的, 应该是一个绝对路径
          collapsable: false,    // 可选的, 默认值是 true,
          children: [ 'test' ]
        },
        {
          title: 'JavaScript',   // 必要的
          path: '/home/javascript/',        // 可选的, 应该是一个绝对路径
          collapsable: false,    // 可选的, 默认值是 true,
          children: getDir('home/javascript', 'javascript/') 
        },
        {
          title: 'PHP',       // 必要的
          path: '/home/php/', // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          children: getDir('home/php', 'php/')
        },
      ],
      '/tsgroup/': [
        {
          title: 'TS周刊2.0',     // 必要的
          path: '/tsgroup/',   // 可选的, 应该是一个绝对路径
          collapsable: false,  // 可选的, 默认值是 true,
          children: getDir('tsgroup')
        },
      ],
      '/about/': {
      	sidebar: 'auto'
      },
    },
    lastUpdated: '上次更新',
  }
}

// ========== Yexk =================  my function =============================

/**
 * 获取 md 的列表
 * @param {String} pathDir 目录
 * @param {Boolean} flag 是否为绝对路径
 */
function getDir(pathDir = '', PPath = '') {
  let fr = [];
  // read dir file list 
  (function _(pathDir = '', flag = false) {
    let p = flag ? pathDir : ROOT_PATH + pathDir
    let files = fs.readdirSync(p);

    files.forEach((v, i) => {
      let file = path.join(p, v);
      try {
        let stats = fs.statSync(file)
        let isFile = stats.isFile();
        let isDirectory = stats.isDirectory();

        if (isDirectory) {
          _(file, true);

        }else if (isFile && path.extname(v) == '.md' && v != 'README.md') {
            if (flag) {
              let parentPath = path.dirname(file).split(path.sep);
              fr.push(PPath + parentPath[parentPath.length-1] + '/' + path.parse(v).name)
            } else {
              fr.push(PPath + path.parse(v).name)
            }
        }
      } catch (error) {
        console.warn('获取文件!' + error);
      }
    })
  })(pathDir)

  return fr;
}
