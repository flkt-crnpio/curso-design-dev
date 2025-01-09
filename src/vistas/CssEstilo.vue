<script setup>
import VisualizadorCodigo from '@/componentes/VisualizadorCodigo.vue';
</script>

<template>
  <main id="main">
    <h1>Estilo con CSS</h1>
    <p>
      Utilizando CSS podemos controlar cómo lucirán exactamente los elementos de un sitio web y homogeneizar
      para los distintos navegadores y dispositivos.
    </p>
    <p>
      Como notamos al revisar las etiquetas de HTML, para cada elemento cada navegador tiene un estilo definido,
      que aunque en la mayoría de estos elementos se mantiene la misma apariencia, existen inconsistencias 
      en algunos elementos, sobre todo del formulario, que varían de un navegador a otro.
    </p>
    
    <section id="creando-estilos">
      <h2>Creando estilos</h2>
      <p>
        Como vimos en la introducción, una regla de estilo consta de tres elementos: selector, propiedad y valor.
      </p>
      <VisualizadorCodigo
        codigo='
          // CSS
          selector {
            propiedad: valor;
          }
        '
      />
      <p>
        Los estilos que escribimos con CSS se interpretan sobre los nativos del navegador, 
        es una práctica común comenzar con un archivo que unifique y limpie los estilos de las etiquetas para empezar, 
        igual que en diseño, con un lienzo en blanco. 
      </p>
      <p>
        Una vez reiniciado los estilos nativos de los navegadores, se construyen los estilos de general a particular,
        creando módulos por tipo de elemento o función; y mandarlos llamar en orden descendente de manera que las clases
        más particulares sean las últimas en leerse por el navegador.
      </p>
    </section>
    
    <section id="selectores-css">
      <h2>Selectores</h2>
      <p>
        Los selectores definen el o los elementos a los que se aplicará la regla que estemos por escribir.
      </p>
      <p>
        Para identificar qué selector necesitamos, hay que pensar en agrupación.
        Qué elementos deberían ser parecidos por cuestiones estéticas o semánticas, 
        qué elementos son o deben parecer únicos, 
        con qué elementos va a interactuar la persona usuaria y la jerarquía de los mismos.
      </p>
  
      <h3>Todas las cosas</h3>
      <p>
        Algunas veces tenemos reglas en diseño que esperamos que se apliquen a tooooodos los elementos,
        como la familia tipográfica, o el color de fondo, o el color del texto. Seleccionando todas
        las cosas podemos escribir estas reglas generales sin estarlas repitiendo elemento por elemento.
      </p>
      <ul>
        <li><code lang="en" class="selector">*</code> selecciona todos los elementos del DOM.</li>
      </ul>
      <p class="nota">
        1. Si notamos que terminamos sobreescribiendo la regla para demasiados elementos a lo largo del proyecto,
        es mejor repensar el estilo, borrar la regla y aplicarla solo a elementos particulares.
      </p>
      <VisualizadorCodigo
        codigo='
          // CSS
          * {
            background-color: white;
            color: black;
          }
        '
      />
  
      <h3>Elementos ó etiquetas de HTML</h3>
      <p>
        Al utilizar una etiqueta como selector, le decimos al navegador que todos los elementos escritos
        con la misma etiqueta se muestran de la misma manera.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">h1</code> selecciona todos los títulos principales.
        </li>
        <li>
          <code lang="en" class="selector">p</code> selecciona todos los párrafos.
        </li>
        <li>
          ... así para toooooodas las etiquetas de HTML.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // CSS
          h1 {
            color: blue;
          }
          
          p {
            color: green;
          }
        '
      />
  
      <h3>Pseudo Elementos</h3>
      <p>
        Los pseudo elementos son como elementos fantasma que puede introducir la persona programadora 
        o que fueron agregados a algunas etiquetas de HTML por los navegadores para construir elementos complejos.
      </p>
      <p>
        Los pseudo elementos siempre comienzan con <code class="atributo">::</code> y todos los pseudo elementos que existen
        son, como las etiquetas de HTML, palabras ya definidas en los navegadores, no te puedes inventar uno nuevo.
      </p>
      
      <h4>Agregables por la persona programadora</h4>
      <p>
        Con los pseudo elementos para agregar contenido, podemos incluir texto, iconos, imágenes, etc. 
        antes o después del contenido de una etiqueta HTML que no sea vacía, 
        o sea de las que tienen etiqueta de apertura y de cierre,
        no se puede introducir estos pseudo elementos a una imagen o campo o selector, por ejemplo.
      </p>
      <p>
        Debemos incluir el pseudoelemnto vinculado a un elemento o clase y mediante su propiedad de contenido
        agregar la información que se verá, seguida de la información que se leerá. 
        <code lang="en" class="atributo">content="lo que se ve" / "lo que se lee"</code> 
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">::before</code> añade contenido antes del contenido de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">::after</code> añade contenido después del contenido de un elemento.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // CSS
          h1::after {
            content: "!!!" / "";
          }
        '
      />
  
      <h4>Agregadas por los navegadores</h4>
      <p>
        Estos pseudo elementos ya están super estandarizados en todos los navegadores. En general se puede editar únicamente
        estilos tipográficos y color de fondo. Exceptuando el recién agregado <code lang="en" class="selector">::backdrop</code>
        que no contiene ni se relaciona con texto, entonces cualquier propiedad editada a eso pues no se aplica.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">::first-line</code> primera línea del texto de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">::first-letter</code> primera letra del texto de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">::selection</code> sección de texto que está siendo seleccionada por la persona usuaria.
        </li>
        <li>
          <code lang="en" class="selector">::placeholder</code> texto de ejemplo de un <em>campo</em>.
        </li>
        <li>
          <code lang="en" class="selector">::marker</code> ícono de una <em>lista</em>.
        </li>
        <li>
          <code lang="en" class="selector">::backdrop</code> fondo del <em>modal</em>.
        </li>
      </ul>
      <p class="nota">
        Algunos pseudo elementos están directamente ligados a un elemento en particular y únicamente funcionan con él.
      </p>
      <VisualizadorCodigo
        codigo='
          // CSS
          dialog::backdrop {
            background-color: salmon;
          }
        '
      />
  
      <h4>Agregadas de maneras diferentes por los navegadores</h4>
      <p>
        Existen varios pseudo elementos que cada navegador agregó como quiso, cambiando el nombre, los estilos y 
        cómo se tiene que editar entre uno y otro. Son por lo tanto más complicados de estandarizar y en algunos 
        casos es imposible con CSS.
      </p>
      <p>
        Estos pseudo elementos comienzan con igual con dos puntos, seguido del nombre del navegador, 
        terminando con el nombre del pseudoelemento, como quiera que le hayan puesto 
        <code lang="en" class="atributo">::-navegador-nombre-pseudo-elemento</code>
      </p>
      <p>
        Ejemplos de éste caso es el <code lang="en" class="etiqueta">input type="range"</code>, 
        que para editar la bolita se necesita escribir las reglas tres veces, una para cada navegador.
      </p>
      <ul>
        <li><code lang="en" class="selector">::-moz-range-thumb</code> para Firefox.</li>
        <li><code lang="en" class="selector">::-ms-thumb</code> para ie.</li>
        <li><code lang="en" class="selector">::-webkit-slider-thumb</code> para Chrome y la mayoría de otros navegadores.</li>
      </ul>
      <p class="nota">
        Ejemplo demostrativo. Ese na mas es pa la bolita, pa dibujar la barra -ms tiene como 4 pseudo elementos 
        y no se logra al final que por ejemplo se vean estados pal -moz.. no, no.. úsese con precaución.
      </p>
  
      <h3>Elementos únicos con identificador</h3>
      <p>
        El identificador solo debe existir una vez por página, está ligado a un elemento cualquiera de HTML a través de su atributo
        <code lang="en" class="atributo">id="identificadorunico"</code> que puede contener solo 1 id. En CSS los identificadores 
        comienzan con el símbolo <code class="atributo">#</code>, son palabras que elige la persona programadora, 
        deben comenzar por letras, pueden tener números, guiones, guiones bajos, pero no espacios ni caracteres especiales.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">#identificadorunico</code> identificador único agregado a un elemento.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <p id="identificadorunico">
            asdf
          </p>
          
          // CSS
          #identificadorunico {
            background-color: pink;
          }
        '
      />
  
      <h3>Las clases</h3>
      <p>
        La manera más fácil de crear y agregar estilos que apliquen a múltiples elementos, es a través de las clases.
        Podemos crear tantas como necesitemos y cualquier elemento de HTML puede utilizar múltiples clases a la vez.
      </p>
      <p>
        Las clases se ligan a través del atributo <code lang="en" class="atributo">class="clase otra-clase"</code>
      </p>
      <p>
        Una clase comienza con el símbolo <code class="atributo">.</code>, son palabras que elige la persona programadora, 
        deben comenzar por letras, pueden tener números, guiones, guiones bajos, pero no espacios ni otros caracteres especiales.
      </p>
  
      <ul>
        <li>
          <code lang="en" class="selector">.clase</code> selecciona todos los elementos que tengan el nombre de una clase dada.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <p class="clase otra-clase">
            Contenido de un párrafo de ejemplo.
          </p>
          
          // CSS
          .clase {
            background-color: blue;
          }
          .otra-clase {
            color: red;
          }
        '
      />
  
      <h3>Las pseudo classes</h3>
      <p>
        Las pseudo classes son selectores que aplican a estados o segmentos específicos de un elemento o elemento hije del mismo.
        Deben estar ligadas a un elemento, clase o identificador. Las pseudo clases con palabras que define y reconoce el navegador,
        no podemos inventar nombres de pseudo classes.
      </p>
  
      <p>
        Estos selectores, eligen de los elementos de un elemento dado, dependiendo de su posición ó cantidad.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">:first-child</code> primer hijo de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:last-child</code> primer hijo de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:nth-child(n)</code> enésimo hijo de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:nth-last-child(n)</code> enésimo, contando al revés, hijo de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:only-child</code> hijo único de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:empty</code> elemento sin hijes.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <div id="identidicador-ejemplo">
            <p>
              Este va a ser verdecito
            </p>
            <p>
              Este va a ser del que sea color predeterminado
            </p>
            <p>
              También este será color predeterminado
            </p>
          </div>
          
          // CSS
          #identificador-ejemplo:first-child {
            background-color: green;
          }
        '
      />
      <p class="nota">
        El estilo aplicaría únicamente al primer elemento dentro del elemento con el id #identidicador-ejemplo
      </p>
  
      <p>
        Las siguientes pseudo classes seleccionan de entre elementos hermanos del mismo tipo, y están ligadas
        al elemento que definiría justo el tipo del cual se está seleccionando.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">:first-of-type</code> primer hermano del tipo de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:last-of-type</code> último hermano del tipo de un elemento.
        </li>
        <li>
          <code lang="en" class="selector">:only-of-type</code> único hermano de un tipo de elemento.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <ul>
            <li>Un elemento de lista</li>
            <li>Otro elemento de lista</li>
            <li>Uno más elemento de lista</li>
            <li>Y aquí éste sería el verdecito</li>
          </ul>
          
          // CSS
          li:last-child-of-type {
            background-color: green;
          }
        '
      />
      <p class="nota">
        El estilo aplicaría a todos los últimos elementos de cualquier lista ordenada, desordenada o menú.
      </p>
  
      <p>
        Las siguientes pseudo classes son importantisimas de no olvidar durante el proceso de diseño!
        Son las que le dicen a la persona usuaria el estado de un elemento con el que se puede interactuar.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">:link</code> enlace no visitado.
        </li>
        <li>
          <code lang="en" class="selector">:visited</code> enlace visitado.
        </li>
        <li>
          <code lang="en" class="selector">:active</code> cuando el elemento está pulsado.
        </li>
        <li>
          <code lang="en" class="selector">:hover</code> cuando el mouse se encuentra sobre el elemento.
        </li>
        <li>
          <code lang="en" class="selector">:focus</code> cuando el elemento se encuentra seleccionado.
        </li>
        <li>
          <code lang="en" class="selector">:focus-within</code> cuando un elemento o alguno de sus hijes se encuentra seleccionado.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <a class="enlaceimportante">
            enlace de ejemplo
          </a>
          
          // CSS
          .enlaceimportante:hover {
            color: red;
          }
        '
      />
      <p class="nota">
        El estilo de hover aplicaría a todos los enlaces que utilicen la clase .enlaceimportante
      </p>
  
      <p>
        Para las validaciones de formularios, también existen pseudo classes que tienen que ver son su estado.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">:valid</code> cuando un campo tiene el contenido correcto.
        </li>
        <li>
          <code lang="en" class="selector">:invalid</code> cuando un campo tiene el contenido incorrecto.
        </li>
        <li>
          <code lang="en" class="selector">:required</code> cuando un campo es obligatorio.
        </li>
        <li>
          <code lang="en" class="selector">:disabled</code> cuando un campo se encuentra deshabilitado.
        </li>
        <li>
          <code lang="en" class="selector">:checked</code> cuando una casilla de verificación o botón de radio están seleccionadas.
        </li>
        <li>
          <code lang="en" class="selector">:indeterminate</code> cuando una casilla de verificación o botón de radio no está seleccionada y son requeridas.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <label for="siempreponerid">Etiqueta del campo</label>
          <input id="siempreponerid" type="checkbox" checked />
          
          // CSS
          input:checked {
            color: blue;
          }
        '
      />
  
      <p>
        Por último, existen pseudo classes para seleccionar múltiples elementos de una lista. La lista de selectores se separa por comas. 
        Los selectores en el arreglo no deben incluir pseudo elementos.
        Si algún selector de las listas es incorrecto, el arreglo entero se considera invalido y no se aplica ninguna regla de estilo escrita después de ésto.
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">:is()</code> selecciona los elementos dentro de una lista dada, buscando por selector mas específico.
        </li>
        <li>
          <code lang="en" class="selector">:where()</code> selecciona los elementos dentro de una lista dada, buscando cualquier aparición.
        </li>
        <li>
          <code lang="en" class="selector">:not()</code> para seleccionar los elementos que NO coincidan con la lista dada.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <a class="enlaceimportante">
            enlace color importante
          </a>
          <a class="enlaceimportantisimo">
            enlace color importantísimo
          </a>
          <a>
            enlace rojito
          </a>
          <a class="hola">
            también rojito
          </a>
          
          // CSS
          a:not(.enlaceimportante, .enlaceimportantisimo) {
            color: red;
          }
        '
      />
  
      <h3>Atributos</h3>
      <p>
        Los atributos son características que se escriben después del nombre de una etiqueta de apertura, que configuran a los elemento ó ajustan su comportamiento, 
        por ejemplo el <code lang="en" class="atributo">id</code>, <code lang="en" class="atributo">class</code>, <code lang="en" class="atributo">title</code>, 
        <code lang="en" class="atributo">type</code>, <code lang="en" class="atributo">alt</code>, <code lang="en" class="atributo">languaje</code>, por mencionar algunos.
      </p>
      <p>
        Y éstos también pueden utilizarse como selectores, seleccionando todos los elementos que comparten el atributo. Por ejemplo:
      </p>
      <ul>
        <li>
          <code lang="en" class="selector">[type='checkbox']</code> para seleccionar la casilla de verificación.
        </li>
        <li>
          <code lang="en" class="selector">[class*=' pictograma-']</code> para seleccionar un elemento que tenga una clase que comience con la palabra 'pictograma-'.
        </li>
        <li>
          ... estos atributos pueden ser atributos generales de elementos de HTML ó casos súper específicos que sólo apliquen en el sistema actual.
        </li>
      </ul>
      <VisualizadorCodigo
        codigo='
          // HTML
          <label for="id1">Etiqueta del campo</label>
          <input id="id1" type="checkbox" checked />
  
          <label for="id2">Etiqueta del campo</label>
          <input id="id2" type="checkbox" checked />
          
          // CSS
          [type="checkbox"] {
            background-color: blue;
          }
        '
      />

      <h3>Combinación de selectores</h3>
      <p>
        Podemos incluir para una misma regla múltiples selectores separándolos por comas.
      </p>
      <VisualizadorCodigo
        codigo='
          // HTML
          <selector1>
            estamos editando esto
          </selector1>
  
          <selector2> 
            estamos editando esto también
          </selector2>
  
          // CSS
          selector1, selector2 {
            propiedad: valor;
          }
        '
      />
  
      <p>
        Cuando queremos darle estilo a un hermano específico de otro también podemos utilizar un 
        <code lang="en" class="atributo">selector1</code> <code lang="en" class="atributo">+</code> <code lang="en" class="atributo">selector2</code>  
        que sería el elemento que queremos seleccionar.
      </p>
      <VisualizadorCodigo
        codigo='
          // HTML
          <selector1>
            primer elemento
          </selector1>
  
          <selector2> 
            estamos editando esto
          </selector2>
  
          // CSS
          selector1 + selector2 {
            propiedad: valor;
          }
        '
      />
      
      <p>
        Podemos seleccionar selectores dentro de otros selectores separando los selectores con un espacio.
        Que aplicaría a todos los selectores dentro del primero.
      </p>
      <VisualizadorCodigo
        codigo='
          // HTML
          <selector1>
            primer elemento
          
            <selector2> 
              estamos editando esto
          
              <selector2> 
                también estamos editando esto
          
                <selector2> 
                  también estamos editando esto
                </selector2>
  
              </selector2>
  
            </selector2>
  
          </selector1>
  
          // CSS
          selector1 selector2 {
            propiedad: valor;
          }
        '
      />
  
      <p>
        O seleccionar específicamente elementos que sean hijos directos, no nietos ni bisnietos, 
        separando el elemento padre de su hije con el símbolo <code lang="en" class="atributo">></code> mayor que.
      </p>
      <VisualizadorCodigo
        codigo='
          // HTML
          <selector1>
            primer elemento
  
            <selector2> 
              estamos editando esto
            
              <selector2> 
                pero este no
              </selector2>
  
            </selector2>
  
          </selector1>
  
          // CSS
          selector1 > selector2 {
            propiedad: valor;
          }
        '
      />
    </section>
    
    <section id="propiedades-valores-css">
      <h2>Creando reglas</h2>
      <p>
        Cada línea escrita entre las llaves de un selector es una regla construida por el par propiedad = valor(unidad de medida). 
      </p>
      <p>
        No todas las propiedades aplican a todos los elementos, 
        tampoco todas las propiedades tienen el mismo tipo de valor ni unidad.
        Por lo que probablemente sea más claro ver junto todo.
      </p>
      
      <p>
        Existen muchísimas propiedades, pero en serio muchísimas! que pueden leerse acá en la <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">lista de propiedades en orden alfabético</a> (incompleta) del creador de bulmacss
        o aventarse <a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference">referencia CSS</a> de la página de mozilla.
      </p>
      <p>
        Aquí vamoa a agrupar las que creo que serían entre las más utilizadas y las más divertidas para el equipo de diseño :}
      </p>
      
      <h3>Tipografía</h3>
      <p>
        Éstas propiedades pueden aplicarse a todos los elementos con texto, 
        incluidos los pictogramas cuando son agregados mediante una familia tipográfica en la hoja de estilos.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">font-family:</code></td>
            <td><code lang="en" class="valor">"Atkinson Hyperlegible", sans-serif;</code></td>
            <td>para variar la familia tipográfica.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">font-size:</code></td>
            <td><code lang="en" class="valor">16px;</code> <code lang="en" class="valor">1rem;</code> <code lang="en" class="valor">1em;</code></td>
            <td>para variar el tamaño del texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">font-style:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">italic;</code> <code lang="en" class="valor">oblicue;</code></td>
            <td>para variar entre texto normal e itálica.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">font-variant:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">small-caps;</code></td>
            <td>para variar entre texto normal y mayúsculas con variación de altura.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">font-weight:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">bold;</code> <code lang="en" class="valor">100;</code> <code lang="en" class="valor">900;</code></td>
            <td>para variar el peso tipográfico.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">letter-spacing:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">2px;</code> <code lang="en" class="valor">0.1em;</code></td>
            <td>para variar el espacio entre las letras.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">line-height:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">1.5;</code> <code lang="en" class="valor">22px;</code></td>
            <td>para variar el alto de la línea de texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">text-align:</code></td>
            <td><code lang="en" class="valor">left;</code> <code lang="en" class="valor">right;</code> <code lang="en" class="valor">center;</code> <code lang="en" class="valor">justify;</code></td>
            <td>para variar la alineación del texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">text-decoration:</code></td>
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">underline;</code></td>
            <td>para agregarle decoración al texto, como subrayado o tachado.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">text-indent:</code></td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">10px;</code> <code lang="en" class="valor">-10em;</code></td>
            <td>para agregarle indentación a la primera línea de un texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">text-overflow:</code></td>
            <td><code lang="en" class="valor">clip;</code> <code lang="en" class="valor">ellipsis;</code></td>
            <td>para definir qué pasa si no cabe el texto en la caja en donde se encuentre.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">text-shadow:</code></td>
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">2px 4px #f00;</code></td>
            <td>para agregar sombra al texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">text-transform:</code></td>
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">capitalize;</code> <code lang="en" class="valor">uppercase;</code> <code lang="en" class="valor">lowercase;</code></td>
            <td>para modificar el texto entre minúsculas, mayúsculas.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">white-space:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">nowrap;</code> <code lang="en" class="valor">pre;</code> <code lang="en" class="valor">pre-wrap;</code> <code lang="en" class="valor">pre-line;</code></td>
            <td>para definir cómo tratar el espacio en blanco.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">word-break:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">break-all;</code></td>
            <td>para agregar un posible sección en donde romper un texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">word-spacing:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">5px;</code> <code lang="en" class="valor">1em;</code></td>
            <td>para definir el espacio entre palabras.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Las unidades utilizadas para la tipografía, que permiten que los usuario puedan cambiar el tamaño de fuente y que por lo tanto 
        se prefieran por accesibilidad, son las unidades relativas.
      </p>
      <ul>
        <li><code lang="en" class="propiedad">em</code> unidad relativa al tamaño de la fuente del elemento.</li>
        <li><code lang="en" class="propiedad">rem</code> unidad relativa al tamaño de la fuente del documento.</li>
        <li><code lang="en" class="propiedad">px</code> unidad absoluta igual a un pixel.</li>
        <li><code lang="en" class="propiedad">pt</code> unidad absoluta igual a un punto. (1pt = 1/72 pulgadas)</li>
      </ul>
  
      <h3>Color</h3>
      <p>
        Creo que todos los elementos visibles pueden tener color y fondo, 
        al menos no se me ocurre cuál pudiera no tener, 
        tanto elementos en línea como elementos en bloque.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">color: </code></td>
            <td><code lang="en" class="valor">rgb(255,0,0);</code> <code lang="en" class="valor">red;</code> <code lang="en" class="valor">#f00;</code></td>
            <td>para variar el color de texto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-color:</code></td>
            <td><code lang="en" class="valor">transparent;</code> <code lang="en" class="valor">rgb(255,0,0);</code> <code lang="en" class="valor">red;</code> <code lang="en" class="valor">#f00;</code></td>
            <td>color de fondo.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-image:</code></td>
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">url(/ruta/imagen.jpg);</code> <code lang="en" class="valor">linear-gradient(45deg, green, blue);</code> <code lang="en" class="valor">radial-gradient(circle, green, blue);</code></td>
            <td>imagen de fondo ó degradado.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-origin:</code></td>
            <td><code lang="en" class="valor">padding-box;</code> <code lang="en" class="valor">border-box;</code> <code lang="en" class="valor">content-box;</code></td>
            <td>define en donde comienza la imagen de fondo.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-repeat:</code></td>
            <td><code lang="en" class="valor">repeat;</code> <code lang="en" class="valor">repeat-x;</code> <code lang="en" class="valor">repeat-y;</code> <code lang="en" class="valor">no-repeat;</code></td>
            <td>si se repite o no y cómo, la imagen de fondo.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-attachment:</code></td>
            <td><code lang="en" class="valor">scroll;</code> <code lang="en" class="valor">fixed;</code> <code lang="en" class="valor">top left;</code></td>
            <td>cómo se comporta la imagen de fondo contra el scroll de la pantalla.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-position:</code></td>
            <td><code lang="en" class="valor">center;</code> <code lang="en" class="valor">50% 25%;</code> <code lang="en" class="valor">top left;</code></td>
            <td>define la posición de la imagen de fondo.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-size:</code></td>
            <td><code lang="en" class="valor">auto auto;</code> <code lang="en" class="valor">150%;</code> <code lang="en" class="valor">400px 300px;</code> <code lang="en" class="valor">cover;</code></td>
            <td>define el tamaño de la imagen de fondo.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">box-shadow:</code></td>
            <td><code lang="en" class="valor">0 0 0 2px rgb(255, 255, 255);</code> <code lang="en" class="valor">inset 0 -3em 3em rgba(0, 0, 0, 0.1);</code></td>
            <td>define la sombra de un elemento.</td> 
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">border:</code></td>
            <td><code lang="en" class="valor">1px solid #f00;</code></td>
            <td>para definir el borde (color, grosor, estilo de línea) de un elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">outline:</code></td>
            <td><code lang="en" class="valor">1px solid #f00;</code></td>
            <td>para definir el contorno (color, grosor, estilo de línea) de un elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">background-blend-mode:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">multiply;</code> <code lang="en" class="valor">screen;</code> <code lang="en" class="valor">overlay;</code> <code lang="en" class="valor">darken;</code> <code lang="en" class="valor">lighten;</code> <code lang="en" class="valor">color-dodge;</code> <code lang="en" class="valor">color-burn;</code> <code lang="en" class="valor">hard-light;</code> <code lang="en" class="valor">soft-light;</code> <code lang="en" class="valor">difference;</code> <code lang="en" class="valor">exclusion;</code> <code lang="en" class="valor">hue;</code> <code lang="en" class="valor">saturation;</code> <code lang="en" class="valor">color;</code> <code lang="en" class="valor">luminosity;</code></td>
            <td>define como las imágenes de fondo y el color de fondo deben mezclarse entre sí.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">mix-blend-mode:</code></td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">multiply;</code> <code lang="en" class="valor">screen;</code> <code lang="en" class="valor">overlay;</code> <code lang="en" class="valor">darken;</code> <code lang="en" class="valor">lighten;</code> <code lang="en" class="valor">color-dodge;</code> <code lang="en" class="valor">color-burn;</code> <code lang="en" class="valor">hard-light;</code> <code lang="en" class="valor">soft-light;</code> <code lang="en" class="valor">difference;</code> <code lang="en" class="valor">exclusion;</code> <code lang="en" class="valor">hue;</code> <code lang="en" class="valor">saturation;</code> <code lang="en" class="valor">color;</code> <code lang="en" class="valor">luminosity;</code></td>
            <td>describe cómo el contenido de un elemento debe mezclarse con el contenido del elemento que está tras él y con el fondo del elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">filter:</code></td>
            <td><code lang="en" class="valor">blur();</code> <code lang="en" class="valor">brightness();</code> <code lang="en" class="valor">contrast();</code> <code lang="en" class="valor">drop-shadow();</code> <code lang="en" class="valor">grayscale();</code> <code lang="en" class="valor">hue-rotate();</code> <code lang="en" class="valor">invert();</code> <code lang="en" class="valor">opacity();</code> <code lang="en" class="valor">saturate();</code> <code lang="en" class="valor">sepia();</code></td>
            <td>aplica efectos a un elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">opacity:</code></td>
            <td><code lang="en" class="valor">0;</code> a <code lang="en" class="valor">1;</code></td>
            <td>define qué tan transparente es un elemento.</td>
          </tr>
        </tbody>
      </table>
      <p>Maneras en las que podemos escribir el color en CSS</p>
      <ul>
        <li><code lang="en" class="propiedad">purple</code> nombre de color, de una lista  estándar de <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">nombres colores en inglés</a>.</li>
        <li><code lang="en" class="propiedad">#0099ff</code> código hexadecimal de tres o seis dígitos con valores de 0-9 y a-f por pares ordenados de los canales rojo, verde y azul.</li>
        <li><code lang="en" class="propiedad">rgb(2, 121, 139)</code> código RGB de tres canales con valores de 0-255 ordenados por los canales rojo, verde y azul.</li>
        <li><code lang="en" class="propiedad">hsl(188, 97%, 28%)</code> código HSL de tres canales ordenados por los canales Hue, Saturation y Lightness.</li>
        <li><code lang="en" class="propiedad">hwb(360, 50%, 0%)</code> código HWB de tres canales ordenados por los canales Hue, Whiteness y Blackness.</li>
      </ul>

      <h3>Listas</h3>
      <p>
        Estas propiedades son súper específicas pa' las listas, pero como es una pregunta frecuente, aquí está cómo se arman.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">list-style-type:</code></td>
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">disc;</code> <code lang="en" class="valor">circle;</code>  <code lang="en" class="valor">square;</code>  <code lang="en" class="valor">decimal;</code>  <code lang="en" class="valor">decimal-leading-zero;</code>  <code lang="en" class="valor">lower-roman;</code>  <code lang="en" class="valor">upper-roman;</code>  <code lang="en" class="valor">lower-greek;</code>  <code lang="en" class="valor">lower-latin;</code>  <code lang="en" class="valor">upper-latin;</code>  <code lang="en" class="valor">armenian;</code>  <code lang="en" class="valor">georgian;</code>  <code lang="en" class="valor">lower-alpha;</code>  <code lang="en" class="valor">upper-alpha;</code> </td>
            <td>
              define el tipo de viñeta que se mostrará en base a una lista estándar de nombres. 
              no se pueden agregar más oigans. pero si podemos ocultarlo y poner alguna cosa con un 
              <code lang="en" class="elemento">::before</code> o de plano agregarle un 
              <code lang="en" class="etiqueta">span</code> con cualquier contenido.
            </td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">list-style-image:</code></td>
            <td><code lang="en" class="valor">url();</code> <code lang="en" class="valor">none;</code></td>
            <td>url de la imagen que se utilizará como viñeta.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">list-style-position:</code></td>
            <td><code lang="en" class="valor">inside;</code> <code lang="en" class="valor">outside;</code></td>
            <td>define si va dentro o fuera el espacio para la viñeta.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">list-style:</code></td>
            <td>se escriben todas las propiedades juntas <code lang="en" class="valor">disc outside;</code></td>
            <td>define como se mostrará la viñeta.</td>
          </tr>
        </tbody>
      </table>


      <h3>Modelo de caja</h3>
      <p>
        Para éste tipo de propiedad es importante recordar que existen elementos de bloque y elementos de línea.
        La mayoría de estas propiedades únicamente funcionan en elementos de bloque, excepto el borde que aplica a todes,
        pero como al final suma a la caja, pues aquí se agrega.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">box-sizing:</code></td>
            <td><code lang="en" class="valor">content-box;</code> <code lang="en" class="valor">border-box;</code></td>
            <td>para definir el comportamiento de la caja contra los márgenes internos y externos de los elementos que contiene.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">height:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">100vh;</code></td>
            <td>para definir el alto de un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">min-height:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">100vh;</code></td>
            <td>para definir el alto mínimo de un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">max-height:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">100vh;</code></td>
            <td>para definir el alto máximo de un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">width:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100%;</code> <code lang="en" class="valor">200px;</code> <code lang="en" class="valor">100vw;</code></td>
            <td>para definir el ancho de un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">min-width:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100%;</code> <code lang="en" class="valor">200px;</code> <code lang="en" class="valor">100vw;</code></td>
            <td>para definir el ancho mínimo de un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">max-width:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100%;</code> <code lang="en" class="valor">200px;</code> <code lang="en" class="valor">100vw;</code></td>
            <td>para definir el ancho máximo de un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">margin:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code>  <code lang="en" class="valor">-100px;</code> <code lang="en" class="valor">2em;</code> <code lang="en" class="valor">10vw;</code></td>
            <td>para agregar o quitar margen exterior a un elemento de bloque. El margen admite cantidades negativas, lo que reduce la distancia entre el elemento y sus hermanos.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">padding:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code>  <code lang="en" class="valor">2em;</code> <code lang="en" class="valor">10vw;</code></td>
            <td>para agregarle margen interior a un elemento de bloque.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">border:</code></td>
            <td><code lang="en" class="valor">1px solid #f00;</code></td>
            <td>para definir el borde (color, grosor, estilo de línea) de un elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">border-radius:</code></td>
            <td><code lang="en" class="valor">10px;</code> <code lang="en" class="valor">999rem;</code> <code lang="en" class="valor">5%;</code></td>
            <td>para definir el radio del borde de un elemento.</td>
          </tr>
        </tbody>
      </table>
      <h4>Unidades relativas</h4>
      <p>
        Las unidades relativas no solo nos ayudan a variar el diseño dependiendo de la pantalla en la que se ve, también son nuestras mejores amigas para 
        darle a la persona usuaria la libertad de configurar sus dispositivos y que reconozcan y se ajusten a la manera en la que cada persona necesita.
      </p>
      <ul>
        <li><code lang="en" class="propiedad">em</code> relativo al tamaño de la fuente del elemento.</li>
        <li><code lang="en" class="propiedad">rem</code> relativo al tamaño de la fuente del documento.</li>
        <li><code lang="en" class="propiedad">%</code> porcentaje relativo al elemento madre.</li>
        <li><code lang="en" class="propiedad">vh</code> relativo al alto del viewport.</li>
        <li><code lang="en" class="propiedad">vw</code> relativo al ancho del viewport.</li>
        <li><code lang="en" class="propiedad">lh</code> relativo a la altura del texto.</li>
      </ul>
  
      <h4>Unidades absolutas</h4>
      <p>
        Las unidades absolutas son la mejor estrategia cuando necesitamos declarar estilos de elementos 
        cuando se van a imprimir en un medio rígido, como un pdf o una hoja física.
        Y seguro que alguien le encuentra otra utilidad jeje.
      </p>
      <ul>
        <li><code lang="en" class="propiedad">px</code> un pixel.</li>
        <li><code lang="en" class="propiedad">pc</code> una pica (1pica = 12 puntos).</li>
        <li><code lang="en" class="propiedad">pt</code> un punto (1pt = 1/72 pulgadas).</li>
        <li><code lang="en" class="propiedad">mm</code> un milímetro.</li>
        <li><code lang="en" class="propiedad">cm</code> un centímetro.</li>
        <li><code lang="en" class="propiedad">in</code> una pulgada (1pulgada = 2.54 cm).</li>
      </ul>
  
      <h3>Comportamiento</h3>
      <p>
        Las propiedades que puedan utilizarse de comportamiento, 
        depende por completo del valor que se haya definido en la propiedad de posición y display.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">display:</code></td> 
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">inline;</code> <code lang="en" class="valor">block;</code> <code lang="en" class="valor">flex;</code> <code lang="en" class="valor">inline-block;</code>  <code lang="en" class="valor">inline-flex;</code></td>
            <td>define el comportamiento y propiedades del elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">position:</code></td> 
            <td><code lang="en" class="valor">static;</code> <code lang="en" class="valor">relative;</code> <code lang="en" class="valor">absolute;</code> <code lang="en" class="valor">fixed;</code> <code lang="en" class="valor">sticky;</code></td>
            <td>define el comportamiento de cómo se va a acomodar un elemento respecto a sí mismo o la pantalla.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">top:</code></td> 
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">-20px;</code></td>
            <td>define la posición arriba de un elemento relacionado con su posición original.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">bottom:</code></td> 
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">-20px;</code></td>
            <td>define la posición debajo de un elemento relacionado con su posición original.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">left:</code></td> 
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">-20px;</code></td>
            <td>define la posición izquierda de un elemento relacionado con su posición original.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">right:</code></td> 
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">-20px;</code></td>
            <td>define la posición derecha de un elemento relacionado con su posición original.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">z-index:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">1;</code> <code lang="en" class="valor">-1;</code></td>
            <td>define la profundidad en la que se encuentra el elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">float:</code></td> 
            <td><code lang="en" class="valor">left;</code> <code lang="en" class="valor">right;</code> <code lang="en" class="valor">none;</code></td>
            <td>define la propiedad de 'flotar' hacia los lados.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">visibility:</code></td> 
            <td><code lang="en" class="valor">visible;</code> <code lang="en" class="valor">hidden;</code></td>
            <td>muestra u oculta un elemento en la pantalla.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">overflow:</code></td> 
            <td><code lang="en" class="valor">visible;</code> <code lang="en" class="valor">hidden;</code> <code lang="en" class="valor">scroll;</code> <code lang="en" class="valor">auto;</code></td>
            <td>define qué pasa si el contenido excede al contenedor.</td>
          </tr>
        </tbody>
      </table>
  
      <h3>Retícula</h3>
      <p>
        Utilizando <code lang="en" class="atributo">display: flex;</code> podemos dar formato a un contenedor y los hijos inmediatos de éste.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">align-content:</code></td>
            <td><code lang="en" class="valor">strech;</code> <code lang="en" class="valor">flex-end;</code> <code lang="en" class="valor">flex-start;</code> <code lang="en" class="valor">center;</code> <code lang="en" class="valor">space-between;</code> <code lang="en" class="valor">space-around;</code></td>
            <td>define cómo se alinearan los elementos en el eje horizontal.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">align-items:</code></td>
            <td><code lang="en" class="valor">strech;</code> <code lang="en" class="valor">flex-end;</code> <code lang="en" class="valor">flex-start;</code> <code lang="en" class="valor">center;</code> <code lang="en" class="valor">baseline;</code></td>
            <td>define cómo se alinearan los elementos en el eje vertical.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">align-selft:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">strech;</code> <code lang="en" class="valor">flex-end;</code> <code lang="en" class="valor">flex-start;</code> <code lang="en" class="valor">center;</code> <code lang="en" class="valor">baseline;</code></td>
            <td>para que un elemento defina su propia alineación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">flex-basis:</code></td>
            <td><code lang="en" class="valor">auto;</code> <code lang="en" class="valor">100px;</code> <code lang="en" class="valor">10rem;</code></td>
            <td>para definir el tamaño inicial de un elemento.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">flex-direction:</code></td>
            <td><code lang="en" class="valor">row;</code> <code lang="en" class="valor">row-reverse;</code> <code lang="en" class="valor">column;</code> <code lang="en" class="valor">column-reverse;</code></td>
            <td>define la orientación de los elementos.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">flex-grow:</code></td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">1;</code> ... valor numérico entero</td>
            <td>define si un elemento puede crecer y cuánto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">flex-shrink:</code></td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">1;</code> ... valor numérico entero</td>
            <td>define si un elemento puede encogerse y cuánto.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">flex-wrap:</code></td>
            <td><code lang="en" class="valor">nowrap;</code> <code lang="en" class="valor">wrap;</code> <code lang="en" class="valor">wrap-reverse;</code></td>
            <td>define si los elementos pueden ponerse en múltiples líneas.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">justify-content:</code></td>
            <td><code lang="en" class="valor">strech;</code> <code lang="en" class="valor">flex-end;</code> <code lang="en" class="valor">flex-start;</code> <code lang="en" class="valor">center;</code> <code lang="en" class="valor">space-between;</code> <code lang="en" class="valor">space-around;</code></td>
            <td>define cómo se alinean todos los elementos.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">order:</code></td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">1;</code> <code lang="en" class="valor">-1;</code> ... valor numerico entero positivo o negativo</td>
            <td>para darle un orden específico a cada elemento.</td>
          </tr>
        </tbody>
      </table>
  
      <h3>Transiciones</h3>
      <p>
        Las transiciones son como animaciones sencillas que cambian los valores de una propiedad, cuando un elemento cambia de un estado a otro.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">transition-delay:</code> </td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">0.2s;</code> <code lang="en" class="valor">2400ms;</code></td>
            <td>para definir qué tanto esperar antes de empezar una transición.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">transition-duration:</code> </td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">0.2s;</code> <code lang="en" class="valor">2400ms;</code></td>
            <td>define la duración de una transición.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">transition-property:</code> </td>
            <td><code lang="en" class="valor">all;</code> ó alguna propiedad <code lang="en" class="valor">background-color;</code></td>
            <td>define la propiedad a manipular.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">transition-timing-function:</code> </td>
            <td><code lang="en" class="valor">ease;</code> <code lang="en" class="valor">ease-in;</code> <code lang="en" class="valor">ease-out;</code> <code lang="en" class="valor">ease-in-out;</code> <code lang="en" class="valor">linear;</code> <code lang="en" class="valor">step-start;</code> <code lang="en" class="valor">step-end;</code> <code lang="en" class="valor">steps(1, end);</code></td>
            <td>define el tipo de función con la que se ejecutará la transición.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">transition:</code> </td>
            <td>se ponen todas las propiedades en la misma línea <code lang="en" class="valor">all 0.2s ease-in 2s;</code> al final va el delay</td>
            <td>para definir en una línea la transición de la propiedad de un elemento.</td>
          </tr>
        </tbody>
      </table>
      <VisualizadorCodigo
        codigo='
          // CSS
          selector {
            transition: background-color .3s ease-in-out;
          }
        '
      />
  
      <h3>Animaciones</h3>
      <p>
        Una animación es una secuencia de cambios de valores en las propiedades de un elemento en un periodo dado.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code lang="en" class="propiedad">animation-delay:</code> </td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">0.2s;</code> <code lang="en" class="valor">-0.2s;</code> <code lang="en" class="valor">2400ms;</code></td>
            <td>define el tiempo de espera antes de ejecutar una animación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-direction:</code> </td>
            <td><code lang="en" class="valor">normal;</code> <code lang="en" class="valor">reverse;</code> <code lang="en" class="valor">alternate;</code> <code lang="en" class="valor">alternate-reverse;</code></td>
            <td>define la dirección de la animación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-duration:</code> </td>
            <td><code lang="en" class="valor">0;</code> <code lang="en" class="valor">0.2s;</code> <code lang="en" class="valor">2400ms;</code></td>
            <td>define el tiempo de la animación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-fill-mode:</code> </td>
            <td><code lang="en" class="valor">none;</code> <code lang="en" class="valor">forwards;</code> <code lang="en" class="valor">backwards;</code> <code lang="en" class="valor">both;</code></td>
            <td>para definir cómo se comporta el elemento antes y después de la animación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-iteration-count:</code> </td>
            <td><code lang="en" class="valor">1;</code> <code lang="en" class="valor">10;</code> <code lang="en" class="valor">infinite;</code></td>
            <td>para decirle cuántas veces debe ejecutarse la animación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-name:</code> </td>
            <td><code lang="en" class="valor">elNombreQueLePusimosNosotrosALaAnimacion;</code></td>
            <td>vincula el nombre de la animación a ejecutar.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-play-state:</code> </td>
            <td><code lang="en" class="valor">running;</code> <code lang="en" class="valor">paused;</code></td>
            <td>define si la animación está ejecutándose, es para detenerla con código.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation-timing-function:</code> </td>
            <td><code lang="en" class="valor">ease;</code> <code lang="en" class="valor">ease-in;</code> <code lang="en" class="valor">ease-out;</code> <code lang="en" class="valor">ease-in-out;</code> <code lang="en" class="valor">linear;</code> <code lang="en" class="valor">step-start;</code> <code lang="en" class="valor">step-end;</code> <code lang="en" class="valor">steps(1, end);</code></td>
            <td>define el tipo de función con la que se ejecutará la animación.</td>
          </tr>
          <tr>
            <td><code lang="en" class="propiedad">animation:</code> </td>
            <td>se ponen todas las propiedades en la misma línea sólo el nombre de la animación y la duración son requeridas <code lang="en" class="valor">nombreAnimacion 2s;</code> </td>
            <td>puede definir la animación completa.</td>
          </tr>
        </tbody>
      </table>
      <VisualizadorCodigo
        codigo='
          // CSS
          selector {
            animation-name: nombreDeLaAnimacion;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
          }
  
          @keyframes nombreDeLaAnimacion {
            from {
              opacity: 0;
              transform: translateX(0);
            }
            to {
              opacity: 0;
              transform: translateX(100px);
            }
          }
        '
      />
    </section>
    
    <section id="responsividad">

      <h2>Variando estilos entre dispositivos</h2>
      <p>
        Las media queries <code lang="en" class="propiedad">@media</code> se utilizan para agrupar una serie de reglas de estilo
        dentro de un contenedor definido por tipo de dispositivo y condiciones particulares.
      </p>
      <p>
        Mediante estos contenedores de reglas mantenemos el diseño dividido entre lo que necesita mostrarse en por ejemplo el celular
        y el monitor, o los estilos de impresión.
      </p>
      <VisualizadorCodigo
        codigo='
          // ejemplo de una media query
  
          @media medio and (condicion) {
            selector {
              propiedad: valor;
            }
          }
        '
      />
  
      <p>
        Se puede definir el tipo de medio como: 
      </p>
      <ul>
        <li><code lang="en" class="atributo">all</code> todos los dispositivos.</li>
        <li><code lang="en" class="atributo">print</code> dispositivos de impresión.</li>
        <li><code lang="en" class="atributo">screen</code> pantallas, tabletas, teléfonos.</li>
      </ul>
      
      <p>
        Las condiciones que pueden utilizarse en relación al viewport(región visible) son:
      </p>
      <ul>
        <li><code lang="en" class="atributo">width</code> ancho del viewport.</li>
        <li><code lang="en" class="atributo">height</code> alto del viewport.</li>
        <li><code lang="en" class="atributo">orientation</code> orientacion del viewport.</li>
      </ul>
      <p>
        ó de preferencias del usuario:
      </p>
      <ul>
        <li><code lang="en" class="atributo">prefers-color-scheme</code> esquema de color (dark | light)</li>
        <li><code lang="en" class="atributo">prefers-reduced-motion</code> animaciones reducidas (reduce | no-preference)</li>
        <li><code lang="en" class="atributo">prefers-contrast</code> contraste (more | less | custom | no-preference)</li>
      </ul>
  
      <p>
        Pueden utilizarse una o varias condiciones unidas mediante operadores lógicos
      </p>
      <ul>
        <li><code lang="en" class="atributo">and</code> si ambas condiciones se cumplen, se aplican los estilos.</li>
        <li><code lang="en" class="atributo">not</code> si no se cumple la condición, se aplican los estilos.</li>
      </ul>
  
      <VisualizadorCodigo
        codigo='
          // CSS
  
          // los títulos se verán rojos por defecto
          h1 {
            color: red;
          }
          
          // hasta que llegue a una pantalla más ancha de 1024 y de orientación panorámica
          @media screen and (min-width: 1024px) and (orientation: landscape) {
            h1 {
              color: blue;
            }
          }
        '
      />
  
      <p>
        Normalmente en un proyecto digital se acostumbra tener definidos puntos de ruptura para 
        cambiar el diseño dependiendo del ancho de la pantalla. Estas medidas cambian muchísimo con el tiempo
        porque pareciera que a diario se está desarrollando un dispositivo nuevo.
      </p>
      <p>
        Esta lista por ejemplo es de hace 4 años! Pero claro que ya no aplica, jeje, los celulares ahora son como tablets y las tablets como laptops... no estoy segura.
      </p>
      <ul>
        <li>320px - 480px: Mobile devices</li>
        <li>481px - 768px: iPads, Tablets</li>
        <li>769px - 1024px: Small screens, laptops</li>
        <li>1025px - 1200px: Desktops, large screens</li>
        <li>1201px and more: Extra large screens, TV</li>
      </ul>
      <p>
        Referencia: <a href="https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/" target="_blank">Media Query CSS Tutorial – Standard Resolutions, CSS Breakpoints, and Target Phone Sizes</a>
      </p>
      <p>
        Además también la selección de los puntos de ruptura varía dependiendo de las personas a las que queremos llegar.
        Mientras más jóvenes, menos monitores, aunque si son gamers, monitores más grandes y curvos son sus favoritos... 
        esto deja pa' toda una investigación del tipo de la persona usuaria contra los dispositivos activos en el momento del diseño.
      </p>
      <p>
        Pero aquí dejo una buena página de estadísticas <a href="https://gs.statcounter.com/screen-resolution-stats/" target="_blank">Screen Resolution Stats Worldwide</a>
        a donde se puede pasar a consultar de vez en vez para ver cómo andan las cosas.
      </p>
      
      <h3>Diseño responsivo</h3>
      <p>
        En todos los blogs y libros que he leído siempre dicen que uno se debe enfocar en hacer primero el diseño del celular.
        Porque por estadística la mayoría de las personas utilizan más el celular para navegar por internet... pero otra vez.. 
        depende de las personas para las que esté escrita la página.
      </p>
      <p>
        Durante los años de pandemia y chismeando en los datos de las páginas que construimos de difusión científica, 
        la mayor parte de visitas eran de personas usuarias en dispositivos de resolución de escritorio, supondré que eran 
        los mismos investigadores revisando datos y que al final, con la falta de movilidad que existía en esa época, pues
        no muchos preferían forzar la vista en el celular teniendo la computadora a la mano.
      </p>
      <p>
        Lo que sí recomiendo encarecidamente es no olvidar a los usuarios de tableta, si ya estamos haciendo el esfuerzo de mejorar la 
        experiencia para celular y escritorio, las tabletas son los celulares de las mamás y las niñeras de los niños... deberíamos agregar la regla
        <em>Mobile first, tablet second</em> jeje.
      </p>
  
      <h3>Desarrollo responsivo</h3>
      <p>
        Las reglas que se pueden aplicar en CSS en un <code lang="en" class="propiedad">media query</code> para variar entre un dispositivo y otro 
        son absolutamente todas. Se puede tener un diseño para celular que no tenga nada que ver con el de escritorio, peeeero, tiempo.
      </p>
      <p>
        Lo mejor es construir la estructura de HTML que funcione para todas las versiones y únicamente mover con CSS la disposición y tamaño de los elementos.
        También funciona de mejor manera pensar en porcentajes antes que en números fijos, se pueden incluir reglas de anchos mínimos y máximos con valores absolutos,
        pero en general, para crear un diseño fluido, se necesitan unidades relativas sobre todo en los tamaños de las cajas de contenido. 
      </p>
      <p>
        Antes que nada, debemos comenzar diciéndole a nuestro documento que se acople al dispositivo en el que se está viendo.
      </p>
      <VisualizadorCodigo
        codigo='
          <!DOCTYPE html>
          <html lang="es">
            <head>
              
              <!-- Sin este metadato no funciona nuestro sitio responsivo -->
              <meta name="viewport" content="initial-scale=1, width=device-width">
  
            </head>
            <body>
            </body>
          </html>
        '
      />
      
      <p>
        Ahora podemos escribir todas las reglas en el mismo archivo de CSS, separando las versiones en las <code lang="en" class="propiedad">media queries</code>.
      </p>
      <VisualizadorCodigo
        codigo='        
          // como se comporta al inicio, sería la versión del celular
          .columna {
            width: 100%;
          }
          
          // si pasa el punto de ruptura para la tableta
          @media screen and (min-width: 768px) {
            .columna {
              width: 50%;
            }
          }
  
          // si pasa el punto de ruptura para un monitor
          @media screen and (min-width: 1024px) {
            .columna {
              width: 30%;
            }
          }
        '
      />
      <p>
        Y magia, página responsiva! jaja.. bueno, en teoría.
      </p>
  
      <p>
        Cabe recordar que existen elementos de HTML como <code lang="en" class="etiqueta">source</code>, <code lang="en" class="etiqueta">a</code>,
        <code lang="en" class="etiqueta">area</code>, <code lang="en" class="etiqueta">link</code> y <code lang="en" class="etiqueta">style</code>
        que cuentan con el atributo <code lang="en" class="atributo">media</code> para variar sus archivos dependiendo de donde se miren.
      </p>
    </section>

    <footer>
      <p>Páginas de ayuda</p>
      <ul>
        <li>
          <a href="https://css-tricks.com/" target="_blank" ref="nonoopener noreferrer">
            Página de articulos de CSS interesantes de mucha ayuda
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@WebConferencesAmsterdam" target="_blank" ref="nonoopener noreferrer">css day</a>
        </li>
        <li>
          <a href="https://lenguajecss.com/css/introduccion/guia-css/" target="_blank" ref="nonoopener noreferrer">guia de css</a>
        </li>
        <li>
          <a href="https://www.eniun.com/resumen-tabla-propiedades-css-valores/" target="_blank" ref="nonoopener noreferrer">listado de todo todo</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics">Comenzando con CSS</a>
        </li>
      </ul>
    </footer>
    
  </main>
</template>
