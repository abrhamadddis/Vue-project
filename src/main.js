import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
// import { required, email, minLength } from 'vuelidate/lib/validators'

createApp(App).use(router).mount('#app')