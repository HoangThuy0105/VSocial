import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// Import Notification
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css'; 

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/responsive.css'
import './assets/css/style.css'

//add fortawesome
import '@fortawesome/fontawesome-free/css/all.css'



store.dispatch('loadDarkMode');

const app = createApp(App);

app.use(Toast, {
    position: POSITION.TOP_RIGHT,  
  });
app.use(router); 
app.use(store);  
app.mount('#app');