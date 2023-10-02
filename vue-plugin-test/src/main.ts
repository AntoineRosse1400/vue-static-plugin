import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Plugin from './Plugin';

const app = createApp(App);
app.use(Plugin);

app.mount('#app');
