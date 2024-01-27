import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'
import Unicon from 'vue-unicons'

import { uniEye, uniMultiply, uniEditAlt, uniSave } from 'vue-unicons/dist/icons'

Unicon.add([uniEye, uniMultiply, uniEditAlt, uniSave])

createApp(App).use(router).use(Unicon).mount('#app')
