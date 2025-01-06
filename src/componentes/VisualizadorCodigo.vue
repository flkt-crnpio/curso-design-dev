<script setup>
  const props = defineProps({
    codigo: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: false
    },
    ejemplo: {
      type: Boolean,
      required: false,
      default: false
    }
  })

  function copiar() {
    navigator.clipboard.writeText(props.codigo);
  }
</script>
<template>
  <figure class="visualizador-contenedor">
    <div class="visualizador-ejemplo" v-html="codigo" v-if="ejemplo"></div>
    <mark class="visualizador-titulo">{{ titulo }}</mark>
    <div class="visualizador-codigo">
      <pre>{{ codigo }}</pre>
    </div>
    <button class="visualizador-boton-copiar" type="button" @click="copiar">Copiar</button>
    <figcaption class="visualizador-descripcion" v-if="descripcion">{{ descripcion }}</figcaption>
  </figure>
</template>

<style>
  .visualizador-contenedor {
    margin: 0;
    border-radius: 8px;
    border: 1px solid var(--codigo-fondo);
  }

  .visualizador-ejemplo {
    padding: 16px;
  }

  .visualizador-titulo {
    background: none;
    color: var(--codigo-fondo);
  }

  .visualizador-descripcion {
    color: var(--codigo-fondo);
    margin-bottom: 40px;
    margin-top: -30px;
    font-size: .8em;
  }

  .visualizador-codigo {
    border-radius: 8px;
    overflow: auto;
    background-color: var(--codigo-fondo);
    color: var(--codigo-texto);
    padding: 0 0 40px;
  }

  .visualizador-codigo pre {
    margin-left: -60px;
  }

  .visualizador-boton-copiar {
    margin-bottom: 10px;
    margin-top: -40px;
    margin-left: 8px;
    position: relative;
    display: block;
    background-color: var(--boton-fondo);
    color: var(--boton-color);
  }
  
</style>
