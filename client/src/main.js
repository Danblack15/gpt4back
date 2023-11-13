import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/sass/reset.sass"
import "@/assets/sass/font.sass"
import "@/assets/sass/main.sass"
import "@/assets/sass/btn.sass"
import "@/assets/sass/form.sass"

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
