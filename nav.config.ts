import { IConfig } from './src/types'

const c: IConfig = {
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/Soo-3/nav',

  // 部署分支
  branch: 'main',

  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,

  // 是否显示右上角的 Github 图标
  showGithub: false,

  // 您的网站地址，有利于SEO
  homeUrl: 'https://www.oooa.ga',

  // 网站标题
  title: 'Jung',

  // 网站描述
  description: '个人导航网站',

  // 网站关键字
  keywords: '导航,实用工具,效率网站，学习资源,node.js',

  // 默认主题: Light | Sim | Side | App | Shortcut
  theme: 'Sim',

  // 网站底部内容, 版权信息、备案号, 可以是 HTML
  footerContent: `
    <div style="font-weight: bold;">放\${total}个学习网站在这儿吃灰？还不滚去搬砖？</div>
    <div>Copyright © 2018-2021 JUNG, All Rights Reserved</div>
  `,

  // 阿里巴巴矢量图库 https://www.iconfont.cn/
  // 用在 Side 主题一级、二级菜单图标展示
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // 百度统计地址
  // https://tongji.baidu.com/web/welcome/login
  baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?b6bd904f684723c0ba853c5f38f0b71e',

  // CNZZ 统计地址
  // https://www.cnzz.com/o_index.php
  cnzzStatisticsUrl: '',

  // Sim 主题配置
  simThemeConfig: {
    // 海报图
    posterImageUrls: [
      'https://z3.ax1x.com/2021/09/12/49f1xJ.jpg'
    ],
    description: '<b>世界上只有一种真正的英雄主义，那就是看清生活的真相之后，依然热爱生活 ————  罗曼·罗兰'
    // description: '放这<b>${total}</b> 个学习网站在这儿吃灰？还不滚去学习！'
  }
}

export default c
