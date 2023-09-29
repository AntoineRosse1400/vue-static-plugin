// Entrypoint of plugin system
import type { App } from 'vue';
import { Framework } from './components';

export default {
    install: (app: App) => {
        app.component("Framework", Framework);
    }
}

export { Framework };