// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import MyPlugin from './index'

Vue.config.productionTip = false

import Message from './components/message/message'
import Button from './components/button/button'

const MyPlugin = {}
MyPlugin.install = function (Vue, option) {
  if (MyPlugin.install.installed) return

  Vue.component(Message.name, Message)
  Vue.component(Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  MyPlugin.install(window.Vue)
}

export default MyPlugin

Vue.use(MyPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
