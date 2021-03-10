import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import * as io  from 'socket.io/client-dist/socket.io';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"

const socket = io("http://localhost:3000");
const app = createApp(App)
app.config.globalProperties.$socket = socket


app.use(store).use(router).mount('#app')
