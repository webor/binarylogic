import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Particles from "particles.vue3"
import AnimateOnVisible from "./components/AnimateOnVisible.vue"

createApp(App)
    .component('AnimateOnVisible', AnimateOnVisible)
    .use(store)
    .use(router)
    .use(Particles)
    .mount('#app')

import './styles/global.scss'