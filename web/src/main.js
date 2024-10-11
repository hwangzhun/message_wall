import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'boxicons/css/boxicons.min.css';

// iconfont
import './assets/fonts/iconfont/iconfont.js'
import './styles/iconfont.css'

const app = createApp(App)
app.use(router);
app.use(store);
app.use(VueAxios,axios);

app.mount('#app')
