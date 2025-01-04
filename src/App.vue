<script setup>
// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- <a href="#main" class="enlace-main">Ir al contenido principal</a> -->

  <nav>
    <RouterLink to="/">Introducción</RouterLink>
    <RouterLink to="/html-estructura">Estructura</RouterLink>
    <RouterLink to="/html-contenido">Contenido</RouterLink>
    <RouterLink to="/css-estilo">Estilo</RouterLink>
    <RouterLink to="/html-css-integracion">Integración</RouterLink>
  </nav>

  <RouterView />

</template>
