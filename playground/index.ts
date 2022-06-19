import Vue from 'vue'
import VueCompositionAPI, { createApp } from '@vue/composition-api'
import App from './App'

Vue.use(VueCompositionAPI)

createApp(App).mount('#app')
