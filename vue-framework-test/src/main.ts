import { createApp } from 'vue';
import App from './App.vue';
import Framework from './Framework';

const app = createApp(App);
app.use(Framework);

app.mount('#app');
