import 'mol-normalize/mol/n.min.css'
import './recursos/estilos.css'

import { createApp } from 'vue'
import App from './App.vue'
import rutas from './rutas'

const app = createApp(App)

app.use(rutas)

app.mount('#presentacion')
