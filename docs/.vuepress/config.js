module.exports = {
    title: '简易UI',
    description: '一个好用得UI框架',
    themeConfig: {
    sidebar: [
  
        '/',
        
        {
          title:'入门',
          children:['/install/',
          '/get_started/',]
        },

        {
          title: '组件',
          children: [ '/components/button' ]
        },
      ],
      nav: [
        { text: '主页', link: '/' },
        { text: '文档', link: '/guide/' },
        { text: '交流', link: 'https://google.com' },
      ]
    }
  }