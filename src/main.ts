import {createApp} from 'vue'
import App from './App.vue'
import TUI from '../packages/index'

createApp(App)
  .use(TUI)
  .mount('#app')
