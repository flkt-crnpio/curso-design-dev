<template>
  <div class="navegador-portafolio">
    <header>
      <div>&#8498;</div>
      <div class="contacto">
        Contacto
        <a href="#">contacto@dominio.com</a>
      </div>
    </header>
    <nav>
      <a class="navegacion" href="#">Hola!</a>
      <a class="navegacion" href="#">Semblanza</a>
      <a class="navegacion" href="#">Proyectos</a>
      <a class="navegacion" href="#">Contacto</a>
    </nav>
    <main>
      <section>
        <p>
          <a class="social" href="#">red social</a>
          <a class="social" href="#">red social</a>
          <a class="social" href="#">red social</a>
        </p>
        <h1 class="titulo titulo-primario">Hola! Soy Fulanita Cosme</h1>
      </section>
    </main>
  </div>
</template>

<style>
.navegador-portafolio {
  background: #000;
  border: 1px solid #ddd;
  border-top-width: 20px;
  border-radius: 4px;
  box-shadow: 0 40px 40px -20px rgba(0,0,0,0.4);
  font-size: 10px;
  position: relative;
  height: 400px;
}
.navegador-portafolio header {
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.navegador-portafolio main {
  padding: 20px;
  width: 50%;
  margin: 0;
  height: 290px;
  display: flex;
align-items: center;
}
.navegador-portafolio nav {
  padding: 20px;
  position: absolute;
  top: 32px;
  bottom: 0;
  right: 0;
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 0; 
}
</style>
