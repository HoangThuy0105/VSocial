import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/responsive.css'
import './assets/css/style.css'

//add fortawesome
import '@fortawesome/fontawesome-free/css/all.css'


store.dispatch('loadDarkMode');

createApp(App)
    .use(store)
    .mount('#app') ;