import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Framework from 'vue-framework-test'

const app = createApp(App);
app.use(Framework);
app.mount('#app');
