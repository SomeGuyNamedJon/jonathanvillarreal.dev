import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
