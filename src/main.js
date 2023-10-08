import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router'
import './assets/style.css'
// import { required, email, minLength } from 'vuelidate/lib/validators'

createApp(App).use(router).use(createPinia()).mount('#app')