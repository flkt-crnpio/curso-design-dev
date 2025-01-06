<script setup>
import VisualizadorCodigo from '@/componentes/VisualizadorCodigo.vue';
</script>

<template>
  <main id="main">
    
    <hgroup>
      <h1>Diseñando sobre código</h1>
      <p>
        Curso introductorio al <abbr>HTML</abbr> semántico y principios de <abbr>CSS</abbr> 
        para diseñadoras de interfaces digitales.
      </p>
    </hgroup>

    <p>
      El objetivo del curso es que se conozcan y entiendan la construcción de un sitio web, 
      para que desde el diseño se pueda organizar la información en jerarquías y estilos basados
      en <abbr>HTML</abbr> semántico y sus mejores prácticas;
      que puedan identificar los insumos que tendrán que generarse para implementar cada componente,
      dependiendo de sus funciones y usabilidad; y,
      que al tener un panorama general puedan tomar mejores decisiones al pensar en 
      tiempo y esfuerzo del diseño/desarrollo de un componente.
    </p>

    <p>Noviembre del 2024</p>

    <section id="introduccion-html">
      <h2>Introducción al <abbr>HTML</abbr> semántico</h2>
      <p>
        El <dfn id="html" lang="en">HyperText Markup Language</dfn> (<abbr>HTML</abbr>) es la tecnología mediante la cuál
        escribimos la estructura y el contenido de una página web, mediante etiquetas definidas.
      </p>
      <p>
        Si se escribe semánticamente proporciona además significado al contenido,
        que distintas máquinas, programas y dispositivos de asistencia son capaces de leer 
        proporcionando mejoras en la accesibilidad y el posicionamiento orgánico del sitio web
        en la red de internet.
      </p>
      <p>
        Existen un poco más de 100 etiquetas de <abbr>HTML</abbr>, algunas para acomodar la estructura de la página, 
        otras, para agregar elementos visibles en la pantalla, y otras de metadatos que describen el sitio.
      </p>
      
      <h3 id="etiquetas-html">Formas de etiquetas de <abbr>HTML</abbr></h3>
      <p>
        Todos los elementos de <abbr>HTML</abbr> se escriben más o menos de la misma manera, 
        son etiquetas con las que definimos qué queremos poner en el sitio web, 
        solo hay un par de variaciones. 
        Por un lado tenemos los elementos con contenido, que pueden contener dentro más 
        elementos, que a su vez pueden contener más elementos... y así al infinito. 
        Y tenemos elementos vacíos, que únicamente contienen la información del mismo y no contienen nada más.
      </p>
      <h4>Elementos con contenido</h4>
      <p>
        Los elementos con contenido constan de una etiqueta de apertura, atributos, contenido y etiqueta de cierre.
        Los atributos de cada elemento varían dependiendo su tipo, pero en su mayoría son atributos generales como 
        la clase o el identificador. Es importante cerrar las etiquetas en el orden en el que se agregaron como si fueran matrioshkas.
      </p>
      <p>
        Ejemplos de este tipo de elemento son las etiquetas para mostrar un párrafo, un enlace, un botón, 
        un bloque de contenido, la navegación, el pie de página, por mencionar algunos.
      </p>

      <figure>

        <figcaption>
          Partes de una etiqueta con contenido en <abbr>HTML</abbr>
        </figcaption>
      </figure>
      <VisualizadorCodigo
        titulo='Código de HTML para agregar un párrafo con un enlace'
        codigo='
          <p>
            Este es un texto plano normal
            <a href="#">
              con un enlace dentro
            </a>
          </p>
        '
      />

      <h4>Elementos vacíos</h4>
      <p>
        Los elementos vacíos únicamente tienen etiqueta de apertura y algunos atributos, no tienen etiqueta de cierre ni contenido. 
        Puede sonar raro tener una etiqueta vacía que se ve con algo, pero en <abbr>HTML</abbr> sin contenido significa 
        que no tienen nada dentro de la matrioshka imaginaria que formarían las etiquetas de apertura y cierre,
        estos elementos únicamente tienen etiqueta de apertura.
      </p>
      <p>
        Algunos ejemplos de éstos elementos son la etiqueta
        para mostrar una imágen, un campo de texto, un botón de radio, una casilla de verificación, los metadatos del sitio, el salto de línea, etc.
        para todos estos elementos el código se ve de ésta otra manera:
      </p>

      <figure>

        <figcaption>
          Partes de una etiqueta vacía en <abbr>HTML</abbr>
        </figcaption>
      </figure>
      <VisualizadorCodigo
        titulo='Código de HTML para agregar una imagen'
        codigo='
          <img src="/ruta/al/archivo.png" alt="Texto alternativo" />
        '
      />

      <h4>Comentarios en <abbr>HTML</abbr></h4>
      <p>
        Un comentario es un mensaje que dejamos escrito dentro del código para nosotres mismos, construidores del sitio web.
        Esta sería la única etiqueta que no se ve ni lee, ni por personas ni dispositivos.
      </p>
      <p>
        Para escribir el comentario se comienza con la secuencia de <code>&lt;!--</code> en medio va el comentario, cerrando con <code>--&gt;</code>.
      </p>
      <VisualizadorCodigo
        titulo='Código de HTML para agregar un comentario'
        codigo='
          <!-- comentario -->
        '
      />

      <h3 id="etiquetas-html">El documento de <abbr>HTML</abbr></h3>
      <p>
        Más adelante se profundizará en la estructura del documento, 
        de momento sólo necesitamos saber que existen las secciones de
        cabecera <code lang="en" class="etiqueta">head</code> para la configuración
        y debajo el <code lang="en" class="etiqueta">body</code> para el contenido.
      </p>
      
      <VisualizadorCodigo
        titulo='Código base de un documento de HTML5'
        codigo='
          <!DOCTYPE html>
          <html lang="es">

            <head>
              <!-- Metadatos para configuración -->
              <!-- Enlaces a archivos de estilos o tipografías -->
            </head>
            
            <body>
              <!-- Estructura y contenido visible y audible de la página -->
              <!-- Scripts que pueden modificar el contenido -->
            </body>

          </html>
        '
      />
      
      <p>
        Si comenzamos a agregar contenido con etiquetas de puro <abbr>HTML</abbr>,
        se mostrarán en su forma nativa definida por el navegador en el que la estemos viendo.
      </p>
      <p>
        Algunas etiquetas están más estandarizadas que otras, las etiquetas con las que cada 
        navegador se dio <i>'el gustito'</i> de ponerlas como quiso son las de los formularios.
      </p>
      <p>
        De ahí en fuera todo se ve bastante homologado, son hermosos bloques de texto uno sobre 
        otro con distintos formatos dependiendo de las etiquetas que se utilizaron.
      </p>
      <figure>

        <figcaption>
          Ejemplo de una página de <abbr>HTML</abbr> sin <abbr>CSS</abbr> en distintos navegadores.
        </figcaption>
      </figure>

      <p>
        Por muchos años la banda le ponía <i>'mas diseño'</i> metiendo todo en tablas para hacer
        más interesante la distribución... medianamente solucionando el diseño pero semánticamente
        creando un desastre.
      </p>
      <p>
        Pero ahora tenemos la maravilla del <abbr>CSS</abbr> en donde podemos hacer todas las locuras imaginables que queramos! 
      </p>
    </section>

    <section id="introduccion-css">
      <h2>Introducción al <abbr>CSS</abbr></h2>
      <p>
        Las hojas de estilo en cascada, del inglés <dfn id="css" lang="en">Cascading Style Sheets</dfn> (<abbr>CSS</abbr>), es el lenguaje mediante el cual podemos agregar estilo
        a cualquier elemento dentro de un sitio web. Podemos cambiar su color, borde, sombra, posición, tamaño, fuente, e incluso animarlo.
      </p>
      <p>
        El lenguaje de <abbr>CSS</abbr> se basa en reglas, éstas se especifican declarando un conjunto de propiedades y valores, 
        que se aplican al elemento o conjunto de elementos seleccionados.
      </p>
      <p>
        Se denomina estilos en cascada porque se interpreta de arriba hacia abajo y también siguiendo herencia. De manera que, si existen múltiples reglas
        que aplican al mismo elemento, gana el que sea más específico en cuanto a herencia y el que esté más al final en la posición vertical del archivo.
      </p>
      
      <h3>Forma de reglas de estilo en <abbr>CSS</abbr></h3>
      <p>
        Para cada regla de estilo, elegimos primero el selector al cuál se aplicará, y entre llaves escribimos un conjunto de declaraciones
        con propiedad y valor, separando ambas con dos puntos y terminando la declaración con punto y coma.
      </p>
      <figure>

        <figcaption>
          Partes de una regla en <abbr>CSS</abbr>
        </figcaption>
      </figure>
      <VisualizadorCodigo
        titulo='Forma de una regla en css'
        codigo='
          selector {
            propiedad: valor;
            otra-propiedad: valor;
          }
        '
      />

      <h4>Selector</h4>
      <p>  
        Los selectores pueden ser etiquetas de <abbr>HTML</abbr> de elementos como <code class="atributo">p</code>, pseudo elementos <code lang="en" class="atributo">::after</code>, 
        clases <code class="atributo">.mi-clase</code>, pseudo clases <code lang="en" class="atributo">:hover</code>, identificadores <code class="atributo">#mi-ide</code>.
        También pueden aplicarse a todos los elementos en general con <code class="atributo">*</code>, 
        o hacer un selector super específico nombrando clases con atributos hijos o hermanos <code lang="en" class="atributo">#mi-id > div + div::before</code>.
        Además se pueden seleccionar varios elementos, separando cada uno por coma <code class="atributo">p, span, h1, b { ... }</code>
        antes de las llaves que encapsulan la regla.
      </p>

      <h4>Propiedad</h4>
      <p>
        Existen propiedades muy generales que se pueden aplicar a la mayoría de los elementos,
        como el color de fondo <code lang="en" class="atributo">background-color</code>, o el borde <code lang="en" class="atributo">border</code>,
        y propiedades que son específicas de una etiqueta, 
        como el texto muestra <code lang="en" class="atributo">placeholder</code> de algunos campos de entrada de texto <code lang="en" class="atributo">input</code>.
      </p>

      <h4>Valor</h4>
      <p>
        Los valores que se pueden escribir, la manera de escribirlos y las unidades, varían
        dependiendo de la propiedad a la que esté ligada. Por ejemplo para propiedades de color tenemos 
        valores de rgb <code class="atributo">rgba(255,0,0,1)</code>, hexadecimales <code class="atributo">#ff0000</code>, nombres de color <code lang="en" class="atributo">red</code>,
        que no aplican en propiedades de tamaño en donde se requieren dimensiones en 
        pixeles <code class="atributo">10px</code> o porcentajes <code class="atributo">10%</code>, por mencionar algunos casos.
      </p>
      
      <h4>Integrando reglas de <abbr>CSS</abbr></h4>
      <p>
        Los archivos de <abbr>CSS</abbr> se componen de un conjunto de reglas que vamos estableciendo para 
        los estilos de los elementos del sitio web.
      </p>
      <p>
        Es importante notar que cuando en <abbr>CSS</abbr> utilizamos una etiqueta de <abbr>HTML</abbr> como selector, 
        éstas se escriben sin los símbolos de mayor y menor que.
        Como podemos ver en el siguiente ejemplo.
      </p>
      <VisualizadorCodigo
        titulo='Ejemplos de reglas de css'
        codigo='
          html {
            font-size: 20px;
          }

          p {
            font-family: "Atkinson Hyperlegible", sans-serif;
            font-weight: 400;
            font-style: normal;
          }

          .nota {
            font-size: .8em;
            margin-left: 2rem;
          }

          .nota::before {
            content: "NOTA: ";
            display: block;
            font-size: .8em;
          }
        '
      />

      <h3>Comentarios en <abbr>CSS</abbr></h3>
      <p>
        También podemos agregar comentarios dentro de donde declaremos los estilos.
        Esta información no afecta en nada al código.
      </p>
      <VisualizadorCodigo
        titulo='Comentarios en css'
        codigo='
          // comentario de en la sección de estilos
          html {
            font-size: 20px;
          }
        '
      />
      

      <h3>Formas de vincular estilos de <abbr>CSS</abbr> con una página web en <abbr>HTML</abbr></h3>
      <p>
        Existen varias maneras de incluir estilos en una página web, unos no muy recomendados y, pues otros que si, jaja.
      </p>
      <p>
        La mejor manera es mantener los archivos separados, por un lado todos los estilos en un archivo de <abbr>CSS</abbr>, 
        por otro lado la estructura y contenido en un documento de <abbr>HTML</abbr>. 
        Para éste caso se vinculan los estilos agregando en la cabecera del documento <code lang="en" class="etiqueta">head</code>, 
        un enlace a la ubicación del archivo de estilos con la etiqueta <code lang="en" class="etiqueta">link</code>.
      </p>
      <VisualizadorCodigo
        titulo='Estilos en enlace externo'
        descripcion="Con estos estilos se puede editar el sitio completo :}"
        codigo='
          <!DOCTYPE html>
          <html lang="es">
            <head>
              <link rel="stylesheet" href="ruta/relativa/archivo-de-estilos.css" />
            </head>
            <body>
              <!-- Todo lo que se escriba aquí, se estilizará con la hoja de estilos -->
            </body>
          </html>
        '
      />
      <p>
        Otra manera es incluirlo dentro del archivo de <abbr>HTML</abbr> en una sección de <code lang="en" class="etiqueta">style</code>
        dentro de la cabecera <code lang="en" class="etiqueta">head</code>.
        No recomiendo ésta manera cuando se tienen múltiples archivos de <abbr>HTML</abbr> del mismo sitio que utilicen los mismos estilos,
        porque tendrían que repetirse las reglas de estilo en cada página y además de repetir el código,
        hace que el mantenimiento sea más pesado.
      </p>
      <figure>

        <figcaption>Ejemplo de estilo en los párrafos de una página</figcaption>
      </figure>
      <VisualizadorCodigo
        titulo='Estilos en la cabecera de la página'
        descripcion="Estos estilos afectan a los elementos de una página"
        codigo='
          <!DOCTYPE html>
          <html lang="es">
            <head>
              <style>
                body {
                  font-size: 16px;
                }
                p {
                  font-size: 4rem;
                  color: green;
                }
              </style>
            </head>
            <body>
              <p>todos los párrafos</p>
              <p>que estén en ésta página</p>
              <p>se verán con el mismo estilo</p>
            </body>
          </html>
        '
      />
      <p>
        Y lo peor peor peor que se puede hacer es ponerlo en línea directo sobre una etiqueta de <abbr>HTML</abbr> con el atributo <code lang="en" class="atributo">style</code>.
        Ésta práctica hace que sea muy largo y doloroso el mantenimiento de un sitio, ya que se tienen que buscar y editar los estilos 
        de cada etiqueta en donde se haya escrito y afectan únicamente a una etiqueta a la vez, por lo que para replicar la regla de estilo
        se tendría que aplicar en cada elemento que sea necesario.
      </p>
      <figure>
        
        <figcaption>ejemplo párrafo</figcaption>
      </figure>
      <VisualizadorCodigo
        titulo='Estilos en el atributo style de un elemento'
        descripcion="Estos estilos únicamente afectan al elemento en el que se escribe"
        codigo='
          <!DOCTYPE html>
          <html lang="es">
            <head>
              <!-- Cosas de la cabecera -->
            </head>
            <body>
              <p style="font-size: 40px; color: red; margin-bottom: 0;">
                Poniendo estilo sobre la etiqueta
              </p>
              <p>
                Sólo afecta a la etiqueta en la que se puso 
              </p>
            </body>
          </html>
        '
      />
    </section>

    <section id="compativilidad">  
      <h2>Compatibilidad entre navegadores</h2>
      <p>
        Aún conociendo todas las etiquetas del mundo y todas las propiedades y los valores específicos que pueden
        utilizarse para cada pixel que pongamos en la pantalla, es importante saber que no todo siempre está disponible.
      </p>
      <p>

      </p>
      <p>
        La W3C tiene grupos encargados de revisar, evaluar y documentar las tecnologías web, el <abbr>HTML</abbr>, el <abbr>CSS</abbr>, la accesibilidad, 
        entre otras cosas.
        en el que se encuentran representadas varias organizaciones, como la misma W3C, Mozilla, Microsoft, Adobe, Google, etc.
      </p>
      <p>
        En la W3C en teoría, con la información de esos grupos, se pone de acuerdo como deberán funcionar las cosas y establece las futuras
        funcionalidades. Pero los encargados de hacer que cada navegador funcione de la manera especificada
        es la subsección del navegador de cada empresa y no tienen el mismo calendario, por lo que una funcionalidad
        puede existir en Firefox pero no hacer nada en Google Chrome o funcionar distinto en Safari.
      </p>
      <p>
        Por éste motivo siempre hay que tener un ojo en la página de 
        <a href="https://caniuse.com/" lang="en" target="_blank" ref="nonoopener noreferrer">can i use</a>,
        pero sobre todo tener instalados todos los navegadores en donde se requiera que el sitio se pueda utilizar, 
        para estar probando todo el tiempo, que se vea, suene y funcione como se diseñó.
      </p>
    </section>

  </main>
</template>
