import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Particles from "particles.vue3"
import AnimateOnVisible from "./components/AnimateOnVisible.vue"
import { library } from '@fortawesome/fontawesome-svg-core';
import VueTilt from 'vue-tilt.js';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faStackOverflow, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStackOverflow, faTwitter, faLinkedin, faGithub, faInstagram, faCopyright)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('AnimateOnVisible', AnimateOnVisible)
    .use(store)
    .use(router)
    .use(Particles)
    .use(VueTilt)
    .mount('#app')

import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.css'