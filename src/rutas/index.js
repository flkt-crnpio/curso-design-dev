import { createRouter, createWebHistory } from 'vue-router'
import Introduccion from '../vistas/IntroduccionHTMLCSS.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { 
        top: 0,
        behavior: 'smooth',
      }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introducción',
      component: Introduccion,
      meta: {
        title: 'Introducción | Diseñando sobre código'
      },
    },
    {
      path: '/html-estructura',
      name: 'HTML5 Estructura',
      component: () => import('../vistas/HtmlEstructura.vue'),
      meta: {
        title: 'HTML5 | Diseñando sobre código'
      },
    },
    {
      path: '/html-contenido',
      name: 'HTML5 Contenido',
      component: () => import('../vistas/HtmlContenido.vue'),
      meta: {
        title: 'HTML5 | Diseñando sobre código'
      },
    },
    {
      path: '/css-estilo',
      name: 'CSS Estilo',
      component: () => import('../vistas/CssEstilo.vue'),
      meta: {
        title: 'CSS | Diseñando sobre código'
      },
    },
    {
      path: '/html-css-integracion',
      name: 'HTML5 CSS integracion',
      component: () => import('../vistas/IntegracionHTMLCSS.vue'),
      meta: {
        title: 'Integración | Diseñando sobre código'
      },
    },
    {
      path: '/glosario-de-elementos',
      name: 'Glosario de elementos',
      component: () => import('../vistas/GlosarioDeElementos.vue'),
      meta: {
        title: 'Glosario | Diseñando sobre código'
      },
    }
  ]
})

router.beforeEach((to) => {
  const title = to.meta.title
  if (title) {
    document.title = title
  }
})

export default router
