<script setup>
  const props = defineProps({
    codigo: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
  })

  function copiar() {
    navigator.clipboard.writeText(props.codigo);
  }
</script>
<template>
  <div>
    <code>Código {{ tipo }}</code>
    <div class="visualizador-codigo">
      <pre>{{ codigo }}</pre>
    </div>
    <button type="button" @click="copiar">Copiar</button>
  </div>
</template>
<style>
  .visualizador-codigo {
    background: #111;
    color: #fff;
    padding: 1rem;
    font-size: .75rem;
  }
</style>
