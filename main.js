import Vue from 'vue'
import App from './App'
import {
	xuRequest
} from './utils/request.js'

Vue.prototype.$xuRequest = xuRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
