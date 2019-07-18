module.exports = {
  base: '/template-vue/',
  title: 'Template-strom',
  description: '一个简易的UI框架',
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '欢迎 Star',
        link: 'https://github.com/AVICII0312/template-vue'
      },
      {
        text: 'Github',
        link: 'https://github.com/AVICII0312/'
      }
    ],
    sidebar: [{
        title: '介绍',
        collapsable: false,
        children: [
          '/introduce/',
        ]
      },
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',         
          '/components/grid',
          '/components/layout',         
        ]
      }
    ]
  }
}