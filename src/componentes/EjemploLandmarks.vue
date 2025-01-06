<template>
  <div class="navegador-landmarks">
    <header>
      Cabecera: logo + contacto
    </header>
    <nav>
      Navegacion principal
    </nav>
    <main>
      <p>Contenido principal</p>
    </main>
  </div>
</template>

<style>
.navegador-landmarks {
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 40px 40px -20px rgba(0,0,0,0.4);
  position: relative;
}
.navegador-landmarks header {
  background-color: blue;
  color: white;
  padding: 4px 20px;
}
.navegador-landmarks nav {
  background-color: green;
  color: white;
  padding: 20px;
  position: absolute;
  top: 32px;
  bottom: 0;
  right: 0;
  width: 15%;
  display: flex;
  align-items: center;
}
.navegador-landmarks main {
  background-color: aquamarine;
  height: 250px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
