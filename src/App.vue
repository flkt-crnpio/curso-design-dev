<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <a href="#main">Ir al contenido principal</a>

  <nav>
    <RouterLink to="/">Introducción</RouterLink>
    <RouterLink to="/estudios-de-casos">Estudios de casos</RouterLink>
    <RouterLink to="/glosario-de-elementos">Glosario de elementos</RouterLink>
  </nav>

  <RouterView />

  <footer>
    pie de página
  </footer>
</template>
