import { createRouter, createWebHistory } from 'vue-router'
import Introduccion from '../vistas/IntroduccionHTMLCSS.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introducción',
      component: Introduccion
    },
    {
      path: '/estudios-de-casos',
      name: 'Estudios de casos',
      component: () => import('../vistas/EstudiosDeCasos.vue')
    },
    {
      path: '/glosario-de-elementos',
      name: 'Glosario de elementos',
      component: () => import('../vistas/GlosarioDeElementos.vue')
    }
  ]
})

export default router
