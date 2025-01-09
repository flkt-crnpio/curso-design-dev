<script setup>
import VisualizadorCodigo from '@/componentes/VisualizadorCodigo.vue';
import EjemploLandmarks from '@/componentes/EjemploLandmarks.vue';
import EjemploPortafolio from '@/componentes/EjemploPortafolio.vue';
</script>

<template>
  <main id="main">
    <h1>
      Integrando <br>
      HTML y CSS
    </h1>

    <section>
      <p>
        Con HTML y CSS podemos crear páginas estáticas con diseños personalizados, que además, si cuidamos la semántica, 
        sabemos que nuestros diseños tendrán algunos temas de accesibilidad cubiertos.
      </p>
      <p>
        Vamos analizando cómo integrar todo en un elemento,
        con una casilla de verificación nativa en HTML,
        que como las conocemos, no son muy vistosas.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        codigo='
          <div>
            <input id="paso1" type="checkbox" />
            <label for="paso1"> Casilla de verificación </label>
          </div>
        '
      />
      
      <p>
        Podemos hacerle unos ajustes para crecer el cuadro de verificación,
        darle un estilo más vistoso, aunque ... el input no nos deja editar naaada... 
        tendremos que ocultarlo primero, ocultarlo, no quitarlo, para no perder toda la funcionalidad.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        codigo='
          <style>
            .casilla input[type="checkbox"] {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              border: 0;
            }
            .casilla label {
              cursor: pointer;
              display: inline-flex;
              color: #30A;
            }
          </style>
          <div class="casilla">
            <input id="paso2" type="checkbox" />
            <label for="paso2"> Casilla de verificación </label>
          </div>
        '
      />
  
      <p>
        Y agregarle la caja a pie... igual aprovechamos que tenemos siempre un <code lang="en" class="etiqueta">label</code>
        asociado para agregar en el pseudo elemento <code lang="en" class="atributo">::before</code> un cuadrado con borde, la cajita.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        codigo='
          <style>
            .caja input[type="checkbox"] + label::before {
              content: "";
              display: inline-flex;
              height: 20px;
              width: 20px;
              border: 2px solid #30A;
              border-radius: 4px;
              margin-right: 4px;
            }
            
          </style>
          <div class="casilla caja">
            <input id="paso3" type="checkbox" />
            <label for="paso3"> Casilla de verificación </label>
          </div>
        '
      />
  
      <p>
        Y como sabemos, el checkbox al ser un elemento del formulario con el que interactúa la persona usuaria,
        debemos recrear las clases a todos sus estados nativos, 
        <code lang="en" class="atributo">:hover</code>, 
        <code lang="en" class="atributo">:focus</code>,
        <code lang="en" class="atributo">:checked</code>.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        codigo='
          <style>
            .estadocaja input[type="checkbox"] + label {
              position: relative;
            }
            .estadocaja input[type="checkbox"] + label::before {
              outline: 0 solid #0000;
              transition: outline .3s ease-in-out, background .3s ease-in-out;
            }
            .estadocaja input[type="checkbox"]:hover + label::before {
              outline: 4px solid #30A6;
            }
            .estadocaja input[type="checkbox"]:focus + label::before {
              outline: 4px solid #30A9;
            }
            .estadocaja input[type="checkbox"]:checked + label::before {
              background: #30A9;
            }
            .estadocaja input[type="checkbox"]:checked + label::after {
              content: "\2713" / "";
              color: white;
              position: absolute;
              left: 4px;
            }
            
          </style>
          <div class="casilla caja estadocaja">
            <input id="paso4" type="checkbox" />
            <label for="paso4"> Casilla de verificación </label>
          </div>
        '
      />
  
      <p>
        Y pues ya que nos gustó, podemos animarnos a hacer una variación
        para una funcionalidad diferente.
      </p>
  
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <style>
            .interruptor label {
              position: relative;
            }
  
            .interruptor label::before {
              border: none;
              background-color: #eee;
              content: "";
              display: inline-flex;
              height: 28px;
              width: 58px;
              border-radius: 999rem;
              box-shadow: inset 0 2px 8px rgba(0,0,0,.4);
              margin-right: 4px;
              transition: background-color .3s ease-in-out;
            }
            
            .interruptor label::after {
              content: "";
              display: inline-flex;
              height: 20px;
              width: 25px;
              background-color: #999;
              border-radius: 999rem;
              position: absolute;
              left: 4px;
              top: 4px;
              transform: translate(0);
              transition: background-color .3s ease-in-out, transform .4s ease-in-out, width .4s ease-in-out;
            }
            
            .interruptor > [type="checkbox"]:checked + label::before {
              background-color: #30A;
  
            }
  
            .interruptor > [type="checkbox"]:checked + label::after {
              background-color: #fff;
              width: 30px;
              transform: translate(20px);
            }
  
          </style>
  
          <div class="casilla interruptor">
            <input id="interruptor" type="checkbox" />
            <label for="interruptor">Interruptor</label>
          </div>
        '
      />
  
      <p>
        Cada vez que construimos algo, necesitamos diseñar para cada tamaño de pantalla, 
        distintos dispositivos, distintos estados, distintas funcionalidades… 
        para no morir en el intento, necesitamos tener procesos que eviten errores, 
        mantengan consistencia y agilicen tanto el diseño como el desarrollo. 
      </p>
      <p>
        Es aquí donde interviene nuestro nuevo mejor amigue el <em>Sistema de Diseño</em>.
      </p>
    </section>

    <section>

      <h2>Sistemas de diseño con <br>Atomic Design</h2>
      <p>
        Un sistema de diseño es un conjunto de estándares, 
        guías y elementos que ayudan a mantener la consistencia de contenido, 
        diseño y funcionalidad de productos digitales. 
      </p>
      <p>
        Es también <em>EL LUGAR</em> colaborativo al que deben recurrir UXs UIs y DEVs 
        para aprender a utilizar, reutilizar y crear el conjunto de elementos 
        que están amarrados con éstas guías y estándares. 
      </p>
      <p>
        El sistema de diseño no es solo una biblioteca de componentes, 
        si la contiene pero además debe incluir la documentación, metodología, guía y 
        buenas prácticas para que el equipo pueda tomar decisiones de diseño y desarrollo
        manteniendo la coherencia, consistencia y colaboración en todos los procesos.
      </p>
      <ul>
        <li>Debe establecer el propósito, requerimientos y cultura del proyecto.</li>
        <li>Debe tener el tono y estilo del contenido definido.</li>
        <li>Debe tener una biblioteca de componentes que utilicen diseño y desarrollo colaborativamente.</li>
      </ul>
      <p>
        El método más utilizado últimamente para su construcción, se basa en la metodología de 
        Atomic Design que ayuda a todos los procesos de creación de productos digitales, 
        a conceptualizar un todo como un conjunto de elementos.
      </p>
      <p>
        Si comenzamos a conceptualizar todos los elementos que creemos que vamos a necesitar en base al propósito del proyecto, 
        el resto de la chamba es pensar cómo agruparlos para realizar acciones cada vez más complejas, 
        evitando caer en la repetición o en el diseño chilaquil de estar haciendo cada vez para cada caso el mismo elemento una y otra vez.
      </p>
      <p>
        Bueno… esto no se lo tengo que vender a nadie del Sisdai, que 
        vivimos en experiencia propia la magia de su construcción. 
        Pero repasando…
      </p>
      <ol>
        <li>
          <code>Átomos</code> 
          son la unidad más pequeña que tenemos, 
          elementos de UI como un color o un icono, 
          o elementos de HTML como el enlace o el botón.
        </li>
        <li>
          <code>Moléculas</code> 
          es la unión de dos o más átomos para formar un componente. 
          Por ejemplo la casilla de verificación, que requiere de 
          un átomo etiqueta y un input checkbox.
        </li>
        <li>
          <code>Organismos</code> 
          son componentes más complejos formados por la unión de varios átomos, 
          moléculas e incluso otros organismos. 
          Pensando en el Sisdai, el ejemplo perfecto serían las gráficas o mapas.
        </li>
        <li>
          <code>Plantillas</code> 
          es la organización del contenido, átomos, moléculas y organismos, 
          para estructurar un flujo, fragmento de página o página pero que no es la final finalaza.
        </li>
        <li>
          <code>Página</code> 
          la página ya es una estandarización de cómo se estructuran los elementos 
          para formar una vista recurrente. Como la página de 404, o el login, 
          o la página de ayuda. 
        </li>
      </ol>
    </section>
    
    <section>
      <h2>1, 2, 3, probando</h2>
      <p>
        Ahora que tengo su atención haha, utilicemoslo en algo útil para repasar, 
        porque lo que se practica se olvida más lento.
      </p>
      <p>
        Supongamos que diseñamos nuestro portafolio.
      </p>
      <img src="https://i.pinimg.com/originals/95/93/3f/95933f84760590bdcc86af4e7c6f6543.gif" alt="">
      
      <p>
        Hay que reconocer los landmarks, para que sea más fácil construirlo.
      </p>
      <EjemploLandmarks>ejemplo landmarks</EjemploLandmarks>

      <p>
        Ahora enlistamos los elementos que contiene, enlaces, botones, párrafos, títulos, listas.
      </p>
      <ul>
        <li>título principal</li>
        <li>título secundario</li>
        <li>subtítulo secundario</li>
        <li>párrafo</li>
        <li>enlaces redes</li>
        <li>enlaces navegacion</li>
        <li>enlace contacto</li>
        <li>imágenes de ejemplo</li>
      </ul>

      <p>
        Armamos nuestro mini sistema de diseño.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        codigo='
          <style>
            .pagina {
              background: black;
              color: #ccc;
              padding: 10px;
            }
            .titulo {
              line-height: 1.5em;
              margin: 0;
              padding: 0;
              color: #fff;
              
            }
            .titulo-primario {
              font-size: 36px;
            }
            .titulo-secundario {
              font-size: 20px;
            }
            .titulo::after {
              content: "";
              height: 4px;
              width: 40px;
              display: block;
              background: #fff;
            }
            .subtitulo {
              color: #f98;
              font-size: 15px;
              font-weight: normal;
              text-indent: 50px;
              display: block;
              line-height: 0;
            }
            .parrafo {
              font-size: 13px;
              line-height: 1.3em;
            }
            .social {
              color: #f98;
              font-size: 13px;
              line-height: 1.3em;
              display: inline-flex;
              margin-right: 16px;
            }
            .navegacion {
              color: #999;
              display: flex;
              font-size: 15px;
              text-decoration: none;
              justify-content: flex-end;
              position: relative; 
            }
              .navegacion:hover {
                color: #f98;
              }
              .navegacion:hover::after {
                outline: 1px solid #f98;
                border-color: #000;
                background-color: #fff;
              }
              .navegacion::after {
              background-color: #000;
                content: "";
                height: 6px;
                width: 6px;
                display: inline-flex;
                border: 1px solid #999;
                border-radius: 6px;
                margin-left: 8px;
                margin-top: 6px;
                z-index: 2;
                position: relative;
              }
              .navegacion::before {
                height: 24px;
                width: 1px;
                background-color: #333;
                content: "";
                display: block;
                position: absolute;
                right: 3px;
                z-index: 0;
              }
            .contacto {
              color: #fff;
              font-size: 15px;
              text-align: right;
              line-height: 1em;
            }
              .contacto a {
                display: block;
                color: #ccc;
                font-size: 13px;
                text-decoration: none;
              }
          </style>

          <div class="pagina">
            <h1 class="titulo titulo-primario">
              Título principal
            </h1>  
            <h2 class="titulo titulo-secundario">
              Título secundario
              <span class="subtitulo">Subtitulo</span>
            </h2>
            <p class="parrafo">
              Párrafo normal
            </p>
            <p>
              <a href="#" class="social">social</a>
              <a href="#" class="social">social</a>
            </p>
            <p>
              <a href="#" class="navegacion">navegación</a>
              <a href="#" class="navegacion">navegación</a>
            </p>
            <p class="contacto">
              Contacto
              <a href="#">contacto@dominio.com</a>
            </p>
          
          </div>
        '
      />

      <p>
        Agregamos la subestructura y contenido por landmarks.
      </p>
      <EjemploPortafolio />

      <p>
        Finalmente les toca intentarlo a ustedes :}
      </p>
      <p>
        Se pueden hacer un usuario en <a href="https://codepen.io" target="_blank">codepen</a> 
        para poder hacer sus pininos. Les deja hacer múltiples proyectos con HTML CSS y JavaScript.
        Además queda la url pública por si quieren que lo revisemos juntes o colaborar con alguienes más.
      </p>
      <p>
        Y antes de irnos un último detalle!
      </p>
    </section>

    <h2>Pruebas y validaciones</h2>
    <p></p>
    <ol>
      <li>Probamos en distintos navegadores</li>
      <li>Probamos en distintas resoluciones de pantalla</li>
      <li>Probamos con el teclado</li>
      <li>Probamos con el lector de pantalla (este puede ser tu gran amigo si como yo escribes a la vez que piensas y no lo piensas mucho ahaha)</li>
      <li>Validamos la accesibilidad con herramientas automáticas</li>
      <li>Si podemos hacer pruebas con otras personas</li>
      <li>Le damos la bendición y mandamos a producción</li>
      <li>No manden a producción en viernes! (si les gusta tener libres sus fines de semana)</li>
    </ol>
  </main>
</template>
