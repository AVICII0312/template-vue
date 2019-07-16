import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'
import Input from './input'

Vue.component('g-button-group', Buttongroup)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-input',Input)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

