import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import store from "./store/index"
import router from "./router/index";

loadFonts()

createApp(App)
    .use(vuetify)
    .use(store)
    .use(FloatingVue)
    .use(VueSweetalert2)
    .use(router)
    .mount('#app')
