# 一个VUE组件
[![Build Status](https://travis-ci.org/AVICII0312/template-vue.svg?branch=master)](https://travis-ci.org/AVICII0312/template-vue)
## 介绍
在学习vue框架过程中写的一个UI框架
## 开始使用
1. 添加CSS样式
  在使用本框架前,请在CSS中开启border-box
  ```
  *,*::after,*::before{border-sizing:border-box;}
  ```
  支持IE8及以上浏览器

  还需要设置默认颜色等变量
  ```
  html {
            margin: .5em;
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
  ```
IE15及以上浏览器支持此样式
2. 安装组件
```
npm i --save template-vue-1-1
```
3. 引入组件
```
import {Buttongroup,Button,Icon} from 'template-vue-1-1'
import 'template-vue-1-1/dist/index.css'

export default{
  name:'app',
  components:{
    HelloWorld,
    'g-button':Button,
    'g-icon':Icon
  }
}
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
