// Entrypoint of plugin system
import type { App } from 'vue';
import { PluginView } from './components';
import { PluginModel } from './model/PluginModel';

export default {
  install: (app: App) => {
    app.component('PluginView', PluginView);
  },
};

export { PluginView };
export { PluginModel };
