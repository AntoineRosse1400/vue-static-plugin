// Entrypoint of plugin system
import type { App } from 'vue';
import { FrameworkView } from './components';
import { FrameworkModel } from './model/FrameworkModel';

export default {
  install: (app: App) => {
    app.component('FrameworkView', FrameworkView);
  },
};

export { FrameworkView };
export { FrameworkModel };
