<script setup>
import VisualizadorCodigo from '@/componentes/VisualizadorCodigo.vue';
</script>

<template>
  <main id="main">
    
    <h1>Contenido con <abbr>HTML</abbr> semántico</h1>
    <p>
      Las etiquetas para escribir contenido son el grupo más extenso, las cuales vamos a reagrupar por 
      requerimientos que se tienen que pensar a la hora de diseñar y la dificultad del css para modificar
      el elemento nativo.
    </p>
    <p>
      TODO : las etiquetas, elementos y pseudo elementos
    </p>

    <section id="elementos-sin-interaccion">
      <h2>Elementos sin interacción</h2>
      <p>
        Los elementos más simples de diseñar son aquellos con los que la persona usuaria no tiene interacción 
        y que además no tienen subestructura requerida. La mayoría de éstas etiquetas son semánticas por lo que 
        hay que prestarle atención al contenido y a la manera en la que se utilizan. 
      </p>
  
      <h3>Texto</h3>
      <p>
        Para las etiquetas de texto, los atributos generales que comúnmente se revisan en diseño son 
        la familia tipográfica, el color, el peso, el tamaño, el interlineado y los márgenes. 
        De manera nativa, es decir sin editarlas, todas éstas etiquetas tienen un solo estado y no tienen animaciones. 
      </p>
  
      <p>Texto en bloque</p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">h1</code> a <code lang="en" class="etiqueta">h6</code>
          etiqueta semántica para títulos y subtítulos, en una página debe existir solamente un <code lang="en" class="etiqueta">h1</code>.
          Del 1 al 6 los títulos se van reduciendo en importancia.
        </li>
        <li>
          <code lang="en" class="etiqueta">p</code> etiqueta semántica para escribir párrafos.
        </li>
        <li>
          <code lang="en" class="etiqueta">blockquote</code> etiqueta semántica para agregar una cita larga.
        </li>
        <li>
          <code lang="en" class="etiqueta">pre</code> espacio de texto preformateado, 
          es el único elemento que muestra el texto tal como está en el documento de HTML, 
          con saltos de línea y espacios blancos.
        </li>
      </ol>
  
      <p>Texto en línea</p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">b</code> etiqueta NO semántica para poner un fragmento de texto en negritas.
        </li>
        <li>
          <code lang="en" class="etiqueta">strong</code> etiqueta semántica de contenido importante, comúnmente se ve en negritas.
        </li>
        <li>
          <code lang="en" class="etiqueta">em</code> etiqueta semántica para enfatizar contenido, comúnmente se ve en itálica.
        </li>
        <li>
          <code lang="en" class="etiqueta">mark</code> etiqueta semántica de contenido relevante, comúnmente se ve con fondo amarillo, como remarcado con marcatextos.
        </li>
        <li>
          <code lang="en" class="etiqueta">small</code> etiqueta NO semántica para reducir el tamaño del texto.
        </li>
        <li>
          <code lang="en" class="etiqueta">span</code> etiqueta NO semántica utilizada para variar el estilo o atributos de un fragmento de texto.
        </li>
        <li>
          <code lang="en" class="etiqueta">i</code> etiqueta NO semántica para dar formato de itálica al texto. 
          Aunque como fué semántica un tiempo, comúnmente se utiliza para cambios de idioma, de estilos de voz, términos técnicos etc.
        </li>
        <li>
          <code lang="en" class="etiqueta">abbr</code> etiqueta semántica para abreviaciones y acrónimos. 
        </li>
        <li>
          <code lang="en" class="etiqueta">dfn</code> etiqueta semántica para agregar la definición de un término. A menudo se utiliza junto con abbr para agregar la definición de una abreviación.
        </li>
        <li>
          <code lang="en" class="etiqueta">ins</code> etiqueta semántica para indicar un fragmento de texto que acaba de ser agregado.
        </li>
        <li>
          <code lang="en" class="etiqueta">del</code> etiqueta semántica para indicar un fragmento de texto que fué eliminado.
        </li>
        <li>
          <code lang="en" class="etiqueta">sub</code> etiqueta semántica para incluir un texto pequeño debajo de la línea de texto normal.
        </li>
        <li>
          <code lang="en" class="etiqueta">sup</code> etiqueta semántica para incluir un texto pequeño sobre la línea de texto normal.
        </li>
        <li>
          <code lang="en" class="etiqueta">q</code> etiqueta semántica para incluir una cita breve en la línea de texto.
        </li>
        <li>
          <code lang="en" class="etiqueta">cite</code> etiqueta semántica para agregar la referencia de una cita. 
        </li>
        <li>
          <code lang="en" class="etiqueta">code</code> etiqueta semántica para representar un fragmento pequeño de código.
        </li>
        <li>
          <code lang="en" class="etiqueta">var</code> etiqueta semántica para representar una variable matemática o en un contexto de programación.
        </li>
        <li>
          <code lang="en" class="etiqueta">samp</code> etiqueta semántica para mostrar un resultado o salida de un programa de computación. (Como la voz de la computadora)
        </li>
        <li>
          <code lang="en" class="etiqueta">kbd</code> etiqueta semántica para representar elementos de entrada que una persona usuaria puede utilizar para interactuar con el sistema. (Como por ejemplo: los botones del teclado.)
        </li>        
      </ol>
  
      <h3>Saltos de línea</h3>
      <p>
        De las siguientes etiquetas la única visible es <code lang="en" class="etiqueta">hr</code> 
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">wbr</code> etiqueta vacía para establecer la posibilidad en un punto de romper la línea de texto. No es visible.
        </li>
        <li>
          <code lang="en" class="etiqueta">br</code> etiqueta vacía para introducir un salto de línea. No es visible.
        </li>
        <li>
          <code lang="en" class="etiqueta">hr</code> etiqueta vacía que representa el cambio temático entre el contenido. Se muestra una línea horizontal.
        </li>
      </ol>
  
      <h3>Imágenes</h3>
      <p>
        Además de crear, diseñar, editar la imágen, una vez que se va a utilizar el archivo de imágen
        es importante pensar en el peso cuidando la calidad. Por lo general las palabras que no les gusta leer a los diseñadores
        sería jpg a 72dpis... que normalmente da el mínimo indispensable para las imágenes en los 90's.
      </p>
      <p>
        Ahora para comprimir la imagen podemos utilizar la página de 
        <a href="https://squoosh.app/" lang="en" target="_blank" ref="nonoopener noreferrer">squoosh</a>
        que además de comprimir para web, nos deja ver la calidad en la que se verá al final. 
        (como photoshop pero gratish).
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">img</code> etiqueta vacía que representa una imágen en pantalla.
        </li>
      </ol>
    </section>

    <section id="elementos-con-estructura">

      <h2>Elementos sin interacción pero con estructura requerida</h2>
      <p>
        También tenemos elementos sin interacción, que para escribirse requieren de múltiples etiquetas en un orden específico. 
        Lo único chistoso aquí es que a cada elemento dentro de la estructura se le puede poner estilos independientes, 
        aunque vienen con algúnas reglas que no se deben romper, como el orden y uso de sus etiquetas, ya que todas son semánticas.
      </p>
  
      <h3>Más Imágenes</h3>
      <p>
        Otra manera de incluir imágenes, cuando necesitamos definir casos en las cuales mostrar una u otra imagen,
        utilizamos un conjunto de etiquetas para lograrlo.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">picture</code> etiqueta para contener múltiples imágenes.
          <ol>
            <li>
              <code lang="en" class="etiqueta">source</code> etiqueta para especificar la ruta de un archivo.
            </li>
            <li>
              <code lang="en" class="etiqueta">img</code> esta es la misma etiqueta que ya hemos conocido, 
              pero en este contexto se convierte en la imagen que se mostrará por defecto.
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        titulo=''
        codigo='
          <picture> 
            <source 
              srcset="imagenquesemostrarasilapantallatieneelanchominimode700.jpg"
              media="(min-width: 700px)"
            />
            <img 
              src="imagenquesemostrarapordefecto.jpg"
              alt="" 
            />
          </picture>
        '
      /> 
  
      <p>
        Aunque no es específicamente para contener únicamente imágenes, es su uso más común.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">figure</code> etiqueta para contener elementos relacionados.
          <ol>
            <li>
              cualquier contenido, comúnmente imágenes, gráficas, código
              <code lang="en" class="etiqueta">img</code>, 
              <code lang="en" class="etiqueta">pre</code>, 
              <code lang="en" class="etiqueta">blockquote</code>, 
              etc.
            </li>
            <li>
              <code lang="en" class="etiqueta">figcaption</code> subtítulo o leyenda del contenido.
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        titulo=''
        codigo='
          <figure> 
            <img 
              src="imagenuno.jpg"
              alt="" 
            />
            <img 
              src="imagendos.jpg"
              alt="" 
            />
            <figcaption>
              Aquí se describe que estamos viendo en general
            </figcaption>
          </figure>
        '
      /> 
        
      <h3>Listas ordenadas y desordenadas</h3>
      <p>
        Las listas en HTML tienen el requerimiento de especificar que tipo de lista queremos utilizar, ordenada o desordenada.
        También es importante mencionar que el tipo de ícono que se puede mostrar por elemento en HTML nativo, tiene una lista muy limitada de opciones.
        Aun con las limitaciones aparentes de las listas, si el diseño requiriera un icono particular en el elemento de la lista se puede incluir después con CSS.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">ol</code> etiqueta semántica para definir listas ordenadas.
          <ol>
            <li>
              <code lang="en" class="etiqueta">li</code>* elemento de lista, el mismo utilizado para todos los tipos de listas ordenadas y desordenadas.
              <ol>
                <li>
                  <code lang="en" class="pseudo elemento">::marker</code>*
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <code lang="en" class="etiqueta">ul</code> etiqueta semántica para definir listas desordenadas.
          <ol>
            <li>
              <code lang="en" class="etiqueta">li</code>*
              <ol>
                <li>
                  <code lang="en" class="pseudo elemento">::marker</code>*
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <code lang="en" class="etiqueta">menu</code> quizás este les salió mal. los navegadores lo interpretan como una lista desordenada cualquiera. 
          La única diferencia es que en el menú se espera que los elementos contengan elementos interactivos.
          <ol>
            <li>
              <code lang="en" class="etiqueta">li</code>*
              <ol>
                <li>
                  <code lang="en" class="pseudo elemento">::marker</code>*
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <ol>
            <li>elemento ordenado</li>
          </ol>
  
          <ul>
            <li>
              elemento ordenado
              <ul>
                <li>elemento ordenado</li>
              </ul>
            </li>
          </ul>
  
          <menu>
            <li>
              <button> botón uno </button>
            </li>
          </menu>
        '
      /> 
      <p>
        Las listas ordenadas y desordenadas pueden anidarse entre ellas sin ningún problema dado que comparten la misma estructura.
      </p>
  
      <h3>Listas para definiciones</h3>
      <p>
        Estas listas no tienen iconos para destacar cada elemento y requieren de dos etiquetas para representar una sola definición.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">dl</code> etiqueta semántica para encapsular un grupo de definiciones.
          <ol>
            <li>
              <code lang="en" class="etiqueta">dt</code> etiqueta semántica para escribir el término a describir.
            </li>
            <li>
              <code lang="en" class="etiqueta">dd</code> etiqueta semántica para escribir la definición del término que la precede.
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <dl>
            <dt>Nombre</dt>
            <dd>Descripción</dd>
  
            <dt>Otro Nombre</dt>
            <dd>Con su propia descripción</dd>
          </dl>
        '
      /> 
  
      <h3>Tablas</h3>
      <p>
        La estructura de la tabla completa no es del todo requerida. Muchas veces, en tablas sencillas se omiten algúnas etiquetas,
        dejando reducida la estructura a una tabla con filas.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">table</code> etiqueta semántica para contenido tabular.
          <ol>
            <li>
              <code lang="en" class="etiqueta">caption</code> etiqueta semántica para agregar el título de la tabla.
            </li>
            <li>
              <code lang="en" class="etiqueta">thead</code> etiqueta semántica para encapsular los nombres de los valores a tabular.
              <ol>
                <li>
                  <code lang="en" class="etiqueta">tr</code>* define una fila de la tabla.
                  <ol>
                    <li>
                      <code lang="en" class="etiqueta">th</code> define una celda de título o nombre de variable.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <code lang="en" class="etiqueta">tbody</code> etiqueta semántica para encapsular los datos de la tabla.
              <ol>
                <li>
                  <code lang="en" class="etiqueta">tr</code>* 
                  <ol>
                    <li>
                      <code lang="en" class="etiqueta">td</code>** define una celda de una tabla.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <code lang="en" class="etiqueta">tfoot</code> etiqueta semántica que encapsula usualmente el resultado de las columnas en el cuerpo de la tabla.
              <ol>
                <li>
                  <code lang="en" class="etiqueta">tr</code>*
                  <ol>
                    <li>
                      <code lang="en" class="etiqueta">td</code>**
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <table>
            <tr>
              <td> dato 1</td>
              <td> dato 2</td>
              <td> dato 3</td>
            </tr>
            <tr>
              <td> dato 4</td>
              <td> dato 5</td>
              <td> dato 6</td>
            </tr>
          </table>
  
          <table>
            <caption> Título de la tabla </caption>
            <thead>
              <tr>
                <th> Variable 1 </th>
                <th> Variable 2 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> valor1 </td>
                <td> valor2 </td>
              </tr>
            </tbody>
          </table>
        '
      /> 
      <p>
        Para el diseño de las tablas lo más importante a tomar en cuenta son los datos que se necesitan visualizar, 
        todo lo que sea referencia, como un nombre de variable debe escribirse dentro de celdas <code lang="en" class="etiqueta">th</code>
        mientras que los datos debe estar en celdas <code lang="en" class="etiqueta">td</code>.
      </p>
      <p>
        En tablas en donde las celdas <code lang="en" class="etiqueta">th</code> se encuentran tanto horizontal como verticalmente
        se les debe agregar el atributo <code lang="en" class="atributo">scope</code> para indicar la dirección hacia la que hacen referencia;
        ya sea la columna <code lang="en" class="atributo">scope="col"</code> ó el renglón <code lang="en" class="atributo">scope="row"</code>.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <table>
            <caption> Tabla con dos cabeceras </caption>
            <tr>
              <td></td>
              <th scope="col">Variable x1</th>
              <th scope="col">Variable x2</th>
              <th scope="col">Variable x3</th>
            </tr>
            <tr>
              <th scope="row">Variable y1</th>
              <td> dato 1</td>
              <td> dato 2</td>
              <td> dato 3</td>
            </tr>
            <tr>
              <th scope="row">Variable y2</th>
              <td> dato 4</td>
              <td> dato 5</td>
              <td> dato 6</td>
            </tr>
          </table>
        '
      /> 
      <p>Referencias de tablas</p>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Acerca de como acomodar las cabeceras de las tablas cuando tienen estructuras diferentes
          </a>
        </li>
        <li>
          <a href="https://webaim.org/techniques/tables/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Accesibilidad en las tablas.
          </a>
        </li>
      </ul>
    </section>
      
    <section  id="elementos-multimedia">

      <h2>Elementos multimedia con interacción</h2>
      <p>
        Los elementos de <code>audio</code> y <code>video</code> son complicados, vienen con un diseño que varía dependiendo del navegador, 
        y con controles predeterminados que no se pueden editar de manera directa. Si se requiere de un diseño específico, 
        lo que debe hacerse es construirlo a mano, y reconstruir la funcionalidad, lo que implica el uso de HTML, CSS y JavaScript 
        para su construcción, y pueque un buen rato de desarrollo, dependiendo del diseño.
      </p>
  
      <h3>Audio</h3>
      <p>
        La única etiqueta requerida en el audio sería la de audio. Pero naaaaada de cómo se visualiza se puede editar con CSS en el elemento nativo.. aún.
      </p>
      <p>
        Por lo que para diseño es importante pensar si puede utilizarse su forma nativa, o si se cuenta con el tiempo y las personas para 
        completar un componente a medida.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">audio</code> etiqueta para agregar archivos de audio.
          <ol>
            <li>
              <code lang="en" class="etiqueta">source</code>* al igual que en la etiqueta de <code lang="en" class="etiqueta">picture</code>, 
              es para incluir variaciónes del archivo, si por ejemplo tenemos distintos tipos de archivo de audio
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <audio controls src="archivodeaudio.mp3"></audio>
  
          <audio controls>
            <source src="archivodeaudio.mp3" type="audio/mpeg" />
            <source src="archivodeaudio.ogg" type="audio/ogg" />
          </audio>
        '
      /> 
  
      <h3>Video</h3>
      <p>
        La etiqueta de video, similar a la de audio, puede utilizarse sola. De éste elemento es importante recordar que viene con un atributo de 
        <code lang="en" class="atributo">poster</code> en donde se puede cargar una imágen que se mostrará si no se encuentra el video.
      </p>
      <p>
        Mismo caso que con el elemento de <code lang="en" class="etiqueta">audio</code>, si no se tiene tiempo utilizar el nativo que ya tiene toda
        la funcionalidad desarrollada, si se tiene tiempo, a hacer magia, es divertido hacer cosas a medida... no olviden las pruebas!
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">video</code> etiqueta para agregar videos.
          <ol>
            <li>
              <code lang="en" class="etiqueta">source</code>* al igual que en <code lang="en" class="etiqueta">picture</code> y <code lang="en" class="etiqueta">audio</code>
              es para incluir variaciónes del archivo, si por ejemplo tenemos distintos tipos de archivo de video.
            </li>
            <li>
              <code lang="en" class="etiqueta">track</code> para agregar un archivo que corre paralelo al archivo de video que puede contener los subtítulos, leyendas,
              capítulos o metadatos.
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <video controls src="archivodevideo.mp4" poster="imagenestatica.jpg"></video>
  
          <video controls poster="imagenestatica.jpg">
            <source src="archivodevideo.webm" type="video/webm" />
            <source src="archivodevideo.mp4" type="video/mp4" />
            <track kind="subtitles" src="subtituloseningles.vtt" srclang="en" />
          </video>
        '
      /> 
    </section>

    <section id="elementos-externos">
      <h2>Elementos externos insertados</h2>
      <p>
        También tenemos una etiqueta, comúnmente utilizada para incrustar videos de youtube. 
        Es una etiqueta para cargar contenido de un sitio externo, lo que hace que se tenga cero control de cómo se verá lo que tenga dentro,
        puesto que es responsabilidad del sitio de donde se extraiga.
      </p>
  
      <h3>iframe</h3>
      <p>
        En cuanto a diseño no hay mucho que editar más que el contenedor, si tiene o no borde o el tamaño de la ventana en el que 
        se incrustará el contenido.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">iframe</code> etiqueta para incrustar contenido web de otro sitio de internet.
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <iframe 
            title="babasonicos"
            src="https://www.babasonicos.com/"
          ></iframe>
        '
      />
    </section>

    <section id="elementos-interactivos">
      <h2>Elementos con interacción</h2>
      <p>
        Los elementos con interacción tienen múltiples estados, que le indican a la persona usuaria qué está haciendo.
        Tienen, por lo general, el estado predeterminado, estado de cursor y estado de enfoque, algúnos elementos tienen aún más estados.
      </p>
      <p>
        Cada estado se tiene que diseñar, validando los requerimientos de accesibilidad y manteniendo los estilos 
        consistentes, para que la usuaria no tenga que aprender en múltiples ocasiones cómo funciona nuestro sitio o aplicación.
      </p>
  
      <h3>Modal</h3>
      <p>
        La etiqueta de modal muestra un cuadro de diálogo que se posiciona sobre el contenido de la vista, obscureciendo un poco el fondo, 
        haciendo la función de bloquear el resto de la vista. La funcionalidad y estilo es igual en todos los navegadores.
        Tanto la ventana como el fondo son fácilmente editables en CSS, lo que da al equipe de diseño bastante libertad.
      </p>
      <p>
        El modal tiene los estados de abierto y cerrado. El estado abierto es el visible, así que es lo único que se diseña 
        del elemento en sí. 
      </p>
      <p>
        Lo que tenga de contenido el modal puede ser cualquier cosa. Como notas de accesibilidad se recomienda
        utilizar de título un <code lang="en" class="etiqueta">h1</code>, verificar el foco de 
        los elementos y la secuencia del tabulador respecto a qué acción es la más importante que la persona usuaria haga dentro de 
        éste cuadro de diálogo.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">dialog</code> etiqueta para agregar un cuadro de diálogo interactivo.
          <ol>
            <li>
              <code lang="en" class="pseudo elemento">::backdrop</code> pseudo elemento de fondo de la ventana modal.
            </li>
            <li>
              Cualquier contenido.
            </li>
          </ol>
        </li>
      </ol>
      <p class="nota">
        1. No olvidar agregar en el diseño el botón para cerrar el cuadro de diálogo.<br>
        2. No olvidar recordarle a le dev agregar la funcionalidad de cerrar el modal con la tecla <kbd>esc</kbd>.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <dialog open>
            <p>Cuadro de diálogo con cualquier contenido</p>
            <form method="dialog">
              <button>cerrar</button>
            </form>
          </dialog>
        '
      />

      <h3>Acordeón</h3>
      <p>
        La etiqueta de acordeón muestra un elemento a modo de título o resumen, seguido de contenido que puede expandirse y contraerse.
      </p>
      <p>
        El estilo de este elemento es relativamente fácil de cambiar con CSS, tiene dos estados: abierto y cerrado, 
        y para cada uno se puede especificar cómo se muestra el título del elemento, para el contenido, obviamente solo existe el estado abierto.
      </p>
      <p>
        La recomendación para éste elemento es utilizarlo como tipo acordeón de contenido, no para colapsables de menú. 
        Esto debido a que el lector de pantalla es capaz de reconocer el estado inicial del elemento, pero no anuncia su cambio. 
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">details</code> elemento para mostrar/ocultar información dependiendo de su estado.
          <ol>
            <li>
              <code lang="en" class="etiqueta">summary</code> etiqueta para agregar un título, leyenda o resumen.
              <ol>
                <li><code lang="en" class="pseudo elemento">::marker</code> pseudo elemento de ícono que cambia con el estado cerrado y abierto.</li>
              </ol>
            </li>
            <li>
              Cualquier contenido
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <details>
            <summary> Título </summary>
            <p> Todas las cosas </p>
            <ol>
              <li> eje </li>
              <li> les </li>
            </ol>
          </details>
        '
      />
      <p>Referencia del acordeón</p>
      <ul>
        <li>
          <a href="https://www.a11y-collective.com/blog/aria-expanded/"  target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Explicación de menú colapsable y la diferencia con el tag details
          </a>
        </li>
      </ul>

      <h3 id="enlaces">Enlaces</h3>
      <p>
        Los enlaces son elementos de texto en línea para redirigir a la persona usuaria a algún lugar o archivo. Son fácilmente editables
        con CSS, se puede agregar cualquier variación tipográfica, de color, de fondo, de borde, incluso de animación.
      </p>
      <p>
        Requieren tener el atributo de <code lang="en" class="atributo">href</code> con la ubicación hacia donde se dirigirán,
        y dentro de la etiqueta, el contenido de la etiqueta debe especificar de manera clara, concisa y simple a dónde se dirige.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">a</code> etiqueta semántica para agregar un enlace interno o externo.
        </li>
      </ol>
      <p class="nota">
        1. ¡¡¡ No olvidar poner contenido !!! es uno de los primeros errores más comunes de accesibilidad dejar este elemento vacío.<br>
        2. El otro horrible error es poner de contenido algo nada relevante como 'aquí' o 'ver más'.<br>
        3. Verificar el contraste otra vez, también error super común que ni siquiera se pueda leer.
      </p>
      
      <VisualizadorCodigo
        :ejemplo="false"
        titulo=''
        codigo='
          <a href="ubicacion-de-redireccion">
            Contenido de la etiqueta
          </a>
        '
      />
  
      <h4>Estados de los enlaces</h4>
      <p>
        Los enlaces pueden tener 4 tipos de estados, para cada uno hay que revisar el contraste  
        todos los tipos de fondo en donde se pudiera utilizar y cuidar el tamaño mínimo para ser accionable de 24px.
      </p>
      <ol>
        <li><i>natural</i> como se ve sin que el usuario esté, ni haya, interactuando con él</li>
        <li><code lang="en" class="atributo">:visited</code> cómo se ve cuando el usuario ya visió al menos una vez éste enlace en el navegador</li>
        <li><code lang="en" class="atributo">:hover</code> cuando el cursor sobre el elemento</li>
        <li><code lang="en" class="atributo">:focus</code> cuando el elemento está enfocado por navegación con el teclado</li>
      </ol>
      
      <h4>Dirección de los enlaces</h4>
      <p>
        Un enlace puede estar vinculado a un identificador en la página actual, una ruta relativa parte del mismo sitio web,
        una ruta absoluta a una ubicación fuera del sitio en el que nos encontramos, un enlace a un archivo descargable, un enlace que abre el software por defecto de la
        computadora en la que se encuentre para mandar un correo o para hacer un llamada telefónica.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">a href="#identificador"</code> enlace interno en la página actual.
        </li>
        <li>
          <code lang="en" class="etiqueta">a href="/ruta"</code> enlace relativo al sitio.
        </li>
        <li>
          <code lang="en" class="etiqueta">a href="https://dominio.com"</code> enlace externo.
        </li>
        <li>
          <code lang="en" class="etiqueta">a href="/ruta/archivo.extencion" download</code> enlace para descargar un archivo del sitio.
        </li>
        <li>
          <code lang="en" class="etiqueta">a href="https://dominio.com/ruta/archivo.extencion" download</code> enlace a archivo descargable.
        </li>
        <li>
          <code lang="en" class="etiqueta">a href="mailto:cuentadecorreo@persona.com"</code> enlace para enviar un correo.
        </li>
        <li>
          <code lang="en" class="etiqueta">a href="tel:12312341234"</code> enlace para enviar hacer una llamada.
        </li>
      </ol>
      <p>
        Para cada 'tipo' de enlace se pueden especificar diseños distintos o agregar notas de accesibilidad para que el equipe de desarrollo
        implemente atributos dependiendo de a dónde dirigirá el enlace. Por ejemplo para los enlaces externos en muchos sitios se utiliza agregarle 
        un ícono para representar la salida del sitio actual, mientras que para lectores de pantalla se agrega el texto 'enlace externo'.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <a href="#enlaces">
            Enlace local a la sección de enlaces
          </a>
  
          <a href="/">
            Enlace de ruta relativa a la página de inicio
          </a>
  
          <a href="https://www.google.com.mx/" target="_blank" ref="nonoopener noreferrer">
            Enlace de ruta absoluta a Google
          </a>
  
          <a href="/estilos.css" download>
            Descarga de archivo de estilos
          </a>
  
          <a href="mailto:flkt.crnpio@gmail.com">
            Escríbanle a vampi
          </a>
  
          <a href="tel:+12312341234">
            Llamada a nadie 123-1234-1234
          </a>
        '
      />

      <h3>Botones</h3>
      <p>
        Los botones son elementos en línea cuya función se debe agregar con <i lang="en">JavaScript</i>, 
        la acción que ejecutará debe agregarse dentro del botón igual que en el enlace, 
        de manera clara, concisa y simple.
      </p>
      <p>
        Los botones tienen una diferencia muy común de encontrar entre software de diseño y los navegadores. 
        El borde en el diseño no cuenta para calcular la altura principal del elemento, pero cuando se agrega en CSS,
        el bloque del elemento si lo agrega a la altura, por lo que, en mi opinión, hay que poner cuidado de cual es la forma final deseada,
        no tanto en la exactitud de los pixeles.
      </p>
  
      <h4>Estados de los botones</h4>
      <p>
        A la hora de diseñar también hay que considerar los estados que puede tener un botón, para
        verificar el contraste del botón contra los distintos fondos en donde estará y contraste entre sus estados.
      </p>
      <ol>
        <li><i>natural</i> como se ve sin que el usuario este interactuando con él</li>
        <li><code lang="en" class="atributo">:disabled</code> cuando el botón no puede ser utilizado</li>
        <li><code lang="en" class="atributo">:hover</code> cuando el cursor sobre el elemento</li>
        <li><code lang="en" class="atributo">:focus</code> cuando el elemento está enfocado por navegación con el teclado</li>
      </ol>
  
      <h4>Etiquetas para crear botones</h4>
      <p>
        Los botones en los formularios pueden crearse con campos <code lang="en" class="etiqueta">input</code> tipo <code lang="en" class="atributo">button</code>,
        <code lang="en" class="atributo">submit</code> y <code lang="en" class="atributo">reset</code>, pero para diseño
        la etiqueta de botón normal <code lang="en" class="etiqueta">button</code> es más fácilmente editable y la funcionalidad
        igual se puede agregar en el código, por lo que si el diseño es muy complejo, recomendaría el uso del <code lang="en" class="etiqueta">button</code>
        incluso en los formularios.
      </p>
      <p>
        Para cada etiqueta y tipo de botón se podría especificar un diseño distinto para diferenciar sus acciones.
        Es importante destacar que el elemento <code lang="en" class="etiqueta">button</code> al ser un elemento con contenido, se le pueden agregar
        múltiples etiquetas dentro, pero es imposible agregarle otra cosa que no sea texto a los botones creados con el elemento <code lang="en" class="etiqueta">input</code>.
        cuyo contenido se agrega mediante el atributo <code lang="en" class="atributo">value</code>.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">button</code> elemento interactivo para ejecutar una función.
          La función es a medida y necesita ser escrita en <i lang="en">JavaScript</i>.
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="button"</code> elemento interactivo para ejecutar una función.
          La función es a medida y necesita ser escrita en <i lang="en">JavaScript</i>.
        </li>
        <li>
          <code lang="en" class="etiqueta">intpu type="submit"</code> elemento interactivo para enviar el contenido de un formulario.
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="reset"</code> elemento interactivo para limpiar el contenido de un formulario.
        </li>
      </ol>
      <p class="nota">
        ... (me la copie de los enlaces porque aquí también)<br>
        1. ¡¡¡ No olvidar poner contenido !!! es uno de los primeros errores más comunes de accesibilidad dejar este elemento vacío.<br>
        2. El otro horrible error es poner de contenido algo que no diga nada relevante como 'aquí' o 'ver más'.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <button type="button"> contenido </button>
  
          <input type="submit" value="Enviar formulario" />
          
          <input type="reset" value="Limpiar formulario" />
          
          <input type="button" value="Acción a realizar" />
        '
      />
      <p>
        Si el elemento <code lang="en" class="etiqueta">button</code> no tiene texto dentro, sino una imágen, ícono o pictograma. 
        Necesita agregarse el atributo <code lang="en" class="atributo">arialabel</code>
        para agregar el nombre de la acción que ejecutará, y a la imagen dentro agregarle <code lang="en" class="atributo">aria-hidden="true"</code>
        para ocultarla de los lectores de pantalla y que lea el botón como un elemento normal.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <button type="button" arialabel="Buscar"> 
            <span aria-hidden="true" class="material-symbols-outlined">
              search
            </span>
          </button>
        '
      />
    </section>

    <section id="elementos-formularios">
      <h2>Formularios</h2>
      <p>
        Los elementos de formulario tienen un apartado especial porque los campos son un poco más complicados 
        y diferentes entre ellos y entre navegadores y entre maneras de editarse y serían los que dan un poco más de dolor de cabeza.
        Pero al mismo tiempo tiene elementos estáticos que de igual manera incluí aquí porque solo deben ser utilizados en formularios.
      </p>
  
      <h3>Formularios</h3>
      <p>
        TODO: etiqueta de formulario y retomar lo del botón de submit y el reset
      </p>
      <p>
        TODO: acerca del orden del label y las entradas de campos ... había una entrada de la w3c en donde hablaban de eso
      </p>
  
      <h3>Contenedor</h3>
      <p>
        Es una buena práctica de usabilidad, si el formulario que debe llenar la persona usuaria, es mejor separarlo en grupos 
        por áreas de información. Por ejemplo una sección de información personal, una de contacto, una laboral, etc.
      </p>
      <p>
        En cuanto al diseño, la etiqueta de <code lang="en" class="etiqueta">fieldset</code> genera un borde de forma nativa, 
        es como un tipo de contenedor y es fácil de editar su color de texto, fondo y borde. La etiqueta de <code lang="en" class="etiqueta">legend</code>
        es como un título, también es fácil de editar cualquier estilo referente a la tipografía.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">fieldset</code> etiqueta para agrupar varios elementos de formulario.
          <ol>
            <li>
              <code lang="en" class="etiqueta">legend</code> etiqueta del título de la agrupación.
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <fieldset>
            <legend> Información personal </legend>
  
            <label for="nombre"> Nombre </label>
            <input id="nombre" type="text" />
            
            <label for="apellido"> Apellido </label>
            <input id="apellido" type="text" />
          </fieldset>
        '
      />
      <p>Referencias</p>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/tutorials/forms/grouping/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Acerca de la accesibilidad y la agrupación de elementos del formulario
          </a>
        </li>
      </ul>
  
      <h3>Etiquetas</h3>
      <p>
        Para cada campo debe existir una etiqueta que describa el contenido que se espera en el campo consecuente.
        Esta etiqueta es como cualquier texto en línea, es fácil de editar su estilo tipográfico.
      </p>
      <p>
        Las etiquetas deben estar relacionadas con un solo elemento del formulario mediante el atributo <code lang="en" class="atributo">for</code>
        de la etiqueta y el <code lang="en" class="atributo">id</code> del campo, área de texto o selector.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">label</code> etiqueta para dar nombre a un elemento particular del formulario.
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="primercampo"> Nombre del campo </label>
          <input id="primercampo" type="text" />
        '
      />
      <p>Referencias</p>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/tutorials/forms/labels/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Acerca de la accesibilidad y el correcto etiquetado de campos de formularios.
          </a>
        </li>
      </ul>
  
  
      <h3>Salida</h3>
      <p>
        Etiqueta vacía para mostrar resultados de un cálculo. Visualmente es como cualquier texto en línea. 
        Para actualizar la información de salida se puede utilizar una función escrita en <i lang="en">JavaScript</i>
        y puede relacionarse con campos de un formulario mediante su atributo <code lang="en" class="atributo">for</code>
        parecido a las etiquetas <code lang="en" class="etiqueta">label</code> pero para este elemento se pueden agregar varios <code lang="en" class="atributo">id</code>s.
      </p>
      <p>
        En cuanto a estilos se puede editar como si fuera cualquier texto y al mirarlo en cualquier navegador se ve exactamente igual.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">output</code> es un elemento para mostrar los resultados numéricos de un cálculo.
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <form oninput="result.value=parseInt(num1.value)+parseInt(num2.value)">
            <p>
              <label for="num1">Num1</label>
              <input type="number" id="num1" value="10">
              +
  
              <label for="num2">Num2</label>
              <input type="number" id="num2" value="20">
              =
            
              <output id="res" name="result" for="num1 num2">30</output>
            </p>
          </form>
        '
      />
  
      <h3>Progreso</h3>
      <p>
        Etiqueta de contenido para mostrar información de progreso a la persona usuaria. La información puede ser manipulada
        con <i lang="en">JavaScript</i> para mostrar actualizaciones dinámicas. 
      </p>
      <p>
        Cómo casi todos los elementos en los formularios, éste campo varía como se muestra dependiendo del navegador en el que se mire.
      </p>
      <p>
        Es posible de editar mediante CSS, pero relacionado a que cada navegador lo hizo como lo quiso, para editarlo 
        es necesario escribir las reglas y propiedades para cada pseudo elemento de éste campo, que obvio se llaman diferente 
        para cada navegador.
      </p>
      <p>
        Los pseudo elementos de este campo son el fondo del elemento y la barra de progreso que sería el área de color.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">progress</code> para representar el progreso de una tarea.
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="progreso">Progreso</label>
          <progress id="progreso" max="100" value="70">70%</progress>
        '
      />
      <p>Referencias</p>
      <ul>
        <li>
          <a href="https://css-tricks.com/html5-progress-element/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Cómo editar la barra de progreso
          </a>
        </li>
      </ul>
  
  
      <h3>Medidor</h3>
      <p>
        Etiqueta de contenido para mostrar una medida y su referencia relativa a una escala establecida. La información puede ser manipulada 
        con <i lang="en">JavaScript</i> para mostrar actualizaciones dinámicas.
      </p>
      <p>
        Cómo casi todos los elementos en los formularios, éste campo varía como se muestra dependiendo del navegador en el que se mire.
      </p>
      <p>
        Para definir el rango de éste elemento se pueden utilizar distintos atributos, que comparándolo contra el valor del campo,
        calculan la cantidad de color y el color que mostrará.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">meter</code> para representar un porcentaje de un rango. 
          Éste cambia de color por defecto, dependiendo del rango en el que se encuentre.
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="medidor-bajo">Bajo</label>
          <meter id="medidor-bajo" low=".25" optimum=".8" high=".75" value=".2"></meter>
  
          <label for="medidor-nooptimo">No óptimo</label>
          <meter id="medidor-nooptimo" low=".25" optimum=".8" high=".75" value=".5"></meter>
  
          <label for="medidor-optimo">Óptimo</label>
          <meter id="medidor-optimo" low=".25" optimum=".8" high=".75" value=".8"></meter>
        '
      />
      <p>
        Para éste elemento también existen pseudo elementos declarados por cada navegador para su construcción, 
        por lo que puede ser un poco tardado pero es posible de editar mediante CSS.
      </p>
      <p>
        Referencias.
      </p>
      <ol>
        <li>
          <a href="https://css-tricks.com/html5-meter-element/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Entrada de blog acerca de como customizar el estilo del medidor.
          </a>
        </li>
      </ol>
  
      <h3>Campos</h3>
      <p>
        Todos los campos <code lang="en" class="etiqueta">input</code> de los formularios son elementos interactivos en línea para agregar o seleccionar contenido.
        La forma de los campos es por lo general un rectángulo, con variaciónes dependiendo de los estilos definidos por el navegador.
        También, como los botones, suman el borde a la altura del elemento, haciendo que en los softwares de diseño no empaten las dimensiones. 
      </p>
  
      <p>
        Los campos se tienen en general los mismos estados que los botones, todos éstos estilos necesitan ser diseñados validando siempre su contraste.
      </p>
      <ol>
        <li><i>natural</i> como se ve sin que el usuario este interactuando con él.</li>
        <li><code lang="en" class="atributo">:disabled</code> cuando el campo no puede ser utilizado.</li>
        <li><code lang="en" class="atributo">:hover</code> cuando el cursor sobre el elemento.</li>
        <li><code lang="en" class="atributo">:focus</code> cuando el elemento está enfocado por navegación con el teclado.</li>
      </ol>
  
      <p>
        Recordar que la mayoría de los campos cuentan con un <code lang="en" class="atributo">placeholder</code> para agregar texto de ejemplo,
        mismo que debe contemplarse dentro del diseño!
      </p>
  
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <p>
            <label for="text">Etiqueta</label>
            <input id="text" type="text" placeholder="Texto de ejemplo"> 
          </p>
        '
      />
  
      <p>
        La etiqueta de campo, cuenta con un atributo <code lang="en" class="atributo">type</code> que define el tipo de dato que puede utilizar,
        lo que en algúnos casos también determina cómo se ve y qué funcionalidad tiene integrada.
      </p>
  
      <h4>Campos simples</h4>
      <p>
        Comenzando por los campos más simples, se muestran como rectángulos sobre los que se puede escribir.
        La diferencia viene a la hora de la validación, ya que los navegadores escuchann el tipo de dato que debe tener y si no coincide pueden enviar mensajes de ayuda.
      </p>
      <ul>
        <li>
          <code lang="en" class="etiqueta">input type="email"</code> 
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="password"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="url"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="tel"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="text"</code>
        </li>
      </ul>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="correo">Correo</label>
          <input id="correo" type="email"> <br />
  
          <label for="contrasenia">Contraseña</label>
          <input id="contrasenia" type="password"> <br />
  
          <label for="url">URL</label>
          <input id="url" type="url"> <br />
  
          <label for="tel">Teléfono</label>
          <input id="tel" type="tel"> <br />
  
          <label for="texto">Texto</label>
          <input id="texto" type="text"> <br />
        '
      />
  
      <h4>Casillas de verificación y radio</h4>
      <p>
        Editar casillas de verificación y botones de radio es chistoso, es imposible de editar el campo en sí, 
        pero esta super normalizado ocultarlos visiblemente (no auditivamente) y re-dibujarlos con otros elementos o agregando pseudo elementos 
        a la etiqueta con la que esté relacionado el campo.
      </p>
      <p>
        De ésta manera tenemos la funcionalidad nativa con un diseño estandarizado 
        entre navegadores y acorde al sistema de diseño.
      </p>
      <ul>
        <li>
          <code lang="en" class="etiqueta">input type="checkbox"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="radio"</code>
        </li>
      </ul>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <input id="checkbox" type="checkbox"> 
          <label for="checkbox">Checkbox</label>
            
          <input id="radio" type="radio"> 
          <label for="radio">Radio</label>
        '
      />
      <p>
        A éstos campos también se les incluyen dos estados más
      </p>
      <ol>
        <li><code lang="en" class="atributo">:checked</code> estado seleccionado.</li>
        <li><code lang="en" class="atributo">:indeterminate</code> estado indeterminado.</li>
      </ol>
  
      <h4>Campo de rango</h4>
      <p>
        El campo de rango se ve fuera de lo común con respecto al resto de los tipos de campos. En general tiene los mismos problemas,
        en todos los navegadores se ve diferente y cada navegador utiliza sus propios pseudo elementos para construirlo, pero 
        editarlo, más allá de tener que escribirle a cada navegador, es medianamente fácil.
      </p>
      <p>
        <code lang="en" class="etiqueta">input type="range"</code> elemento interactivo para posicionar el valor dentro de un rango.
      </p>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="range">Rango</label>
          <input id="range" type="range"> 
        '
      />
  
      <h4>Campos con botones de acción</h4>
      <p>
        Estos campos en algúnos navegadores tienen botones para interactuar con los datos del campo.
        Los botones son pseudo elementos que le agrega el navegador, a la fecha no hay una manera fácil de modificar el estilo.
      </p>
      <p>
        Actualmente lo más común al utilizar el campo es cambiarlo para que visualmente se vea como un campo de texto normal 
        manteniendo el tipo del campo y agregar los botones y funcionalidad por separado.. construirlo otra vez pues.
      </p>
      <ul>
        <li>
          <code lang="en" class="etiqueta">input type="number"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="search"</code>
        </li>
      </ul>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="numerico">Numerico</label>
          <input id="numerico" type="number"> <br />
  
          <label for="search">Buscar</label>
          <input id="search" type="search"> <br />
        '
      />
      
      <h4>Campos con menús desplegables</h4>
      <p>
        Uf! si reconstruir los botones y funcionalidades de los pasados campos era toda una tarea... 
        reconstruir un modal con toda su funcionalidad y agregarle secciónes al campo para que se pueda escribir exactamente
        lo que necesitamos como lo necesitamos.. pues será toda una proeza.
      </p>
      <p>
        Estos deben ser los campos más difíciles de editar y los más distintos entre navegadores. 
        Elija con cuidado a la hora de hacerle su diseño particular.
      </p>
      <ul>
        <li>
          <code lang="en" class="etiqueta">input type="file"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="color"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="date"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="month"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="time"</code>
        </li>
        <li>
          <code lang="en" class="etiqueta">input type="week"</code>
        </li>
      </ul>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="file">Archivo</label>
          <input id="file" type="file"> <br />
  
          <label for="color">Color</label>
          <input id="color" type="color"> <br />
  
          <label for="date">Fecha</label>
          <input id="date" type="date"> <br />
  
          <label for="month">Mes</label>
          <input id="month" type="month"> <br />
  
          <label for="time">Tiempo</label>
          <input id="time" type="time"> <br />
  
          <label for="week">Semana</label>
          <input id="week" type="week"> <br />
        '
      />
  
      <h3>Área de texto</h3>
      <p>
        El área de texto es como un campo de texto pero multilínea. Entre navegadores mantiene bastante homologado su estilo.
        También es un elemento fácil de editar sus estilos predeterminados ya que no cuenta con pseudo elementos en su construcción.
      </p>
      <p>
        <code lang="en" class="etiqueta">textarea</code> elemento multilínea para ingresar texto.
      </p>
      <p>
        Tiene los mismos estados que los botones y campos, mismos que necesitan ser diseñados validando siempre su contraste.
        Lo más común es que campos y áreas de texto tengan homologados sus estilos y estados.
      </p>
      <ol>
        <li><i>natural</i> como se ve sin que el usuario este interactuando con él.</li>
        <li><code lang="en" class="atributo">:disabled</code> cuando el campo no puede ser utilizado.</li>
        <li><code lang="en" class="atributo">:hover</code> cuando el cursor sobre el elemento.</li>
        <li><code lang="en" class="atributo">:focus</code> cuando el elemento está enfocado por navegación con el teclado.</li>
      </ol>
  
      <p>
        El área de texto también cuenta con un <code lang="en" class="atributo">placeholder</code> para agregar texto de ejemplo.
      </p>
      <p>
        Éste es el único elemento que tiene la propiedad <code lang="en" class="atributo">resize</code> que crea un área en la esquina inferior derecha
        con la que la persona usuaria puede interactuar para hacer mas grande o pequeño el rectángulo del elemento.
      </p>
      
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="area">Área de texto</label><br />
          <textarea id="area" placeholder="Texto de ejemplo"></textarea> 
        '
      />
      
      <h3>Selector</h3>
      <p>
        El selector es un elemento para seleccionar una o varias opciones de una lista dada.
        La forma nativa de esta etiqueta varía de un navegador a otro, 
        y aunque es relativamente fácil de editar el elemento principal mediante hojas de estilo,
        el elemento secundario que despliega la lista de opciones no da mucho rango de edición.
      </p>
      <p>
        Tiene los mismos estados que los botones y campos, mismos que necesitan ser diseñados validando siempre su contraste.
        Lo más común es que campos y áreas de texto tengan homologados sus estilos y estados.
      </p>
      <ol>
        <li><i>natural</i> como se ve sin que el usuario este interactuando con él.</li>
        <li><code lang="en" class="atributo">:disabled</code> cuando el campo no puede ser utilizado.</li>
        <li><code lang="en" class="atributo">:hover</code> cuando el cursor sobre el elemento.</li>
        <li><code lang="en" class="atributo">:focus</code> cuando el elemento está enfocado por navegación con el teclado.</li>
      </ol>
      <p>
        Las formas más comunes actualmente de homologar el estilo, es crear un componente personalizado 
        y recrear la funcionalidad del selector nativo.
      </p>
      <p>
        Además cabe mencionar que es el único elemento de formularios con subestructura requerida.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">select</code> elemento para seleccionar entre una lista de opciones.
          <ol>
            <li>
              <code lang="en" class="etiqueta">optiongroup</code> elemento para agrupar un conjunto de opciones dentro de un selector.
            </li>
            <li>
              <code lang="en" class="etiqueta">option</code> opción a seleccionar.
            </li>
          </ol>
        </li>
      </ol>
      <VisualizadorCodigo
        :ejemplo="true"
        titulo=''
        codigo='
          <label for="selector">Comida favorita:</label>
          <select id="selector">
            <option value="">selecciona una opción</option>
            <optgroup label="caliente">
              <option value="caldito">caldito</option>
              <option value="taquito">taquito</option>
              <option value="pasta">pasta</option>
              <option value="carne">carne</option>
            </optgroup>
            <optgroup label="fria">
              <option value="sushi">sushi</option>
              <option value="ensalada">ensalada</option>
            </optgroup>
          </select>
        '
      />
  
      <h2 id="validacion-formularios-contenido-web">Formularios - validaciones</h2>
  
      <p>
        De manera predeterminada, todos los elementos de un formulario son opcionales, 
        a menos que se les agregue el atributo de <code lang="en" class="atributo">required</code>,
        mismo que puede ser diseñado, de requerir ser visto de manera especial.
      </p>
      <p>
        Esta propiedad está ligada con las pseudoclases que se le agregan nativamente a los campos.
      </p>
      <ol>
        <li><code lang="en" class="atributo">:required</code> </li>
        <li><code lang="en" class="atributo">:opcional</code> </li>
      </ol>
  
      <p>
        Cuando tenemos tipos de campos, que como vimos requieren específicamente formas de datos,
        nativamente se le introducen pseudo clases que avisan acerca del estatus del campo contra los datos ingresados.
      </p>
      <p>
        Éstas pseudo clases también pueden ser utilizadas para crear una forma particular en la que 
        los elementos del formulario con algún error o correctos puedan ser visualmente percibidos.
        Nativamente no se ve que cambie nada, pero el campo al adquirir el atributo puede escucharse por dispositivos de asistencia.
      </p>
      <ol>
        <li><code lang="en" class="atributo">:valid</code> </li>
        <li><code lang="en" class="atributo">:invalid</code> </li>
        <li><code lang="en" class="atributo">:user-valid</code> </li>
        <li><code lang="en" class="atributo">:user-invalid</code> </li>
        <li><code lang="en" class="atributo">:in-range</code> </li>
        <li><code lang="en" class="atributo">:out-of-range</code> </li>
      </ol>
    </section>

    <footer>
      <p>Páginas de ayuda</p>
      <ul>
        <li>
          <a href="https://learning.edx.org/course/course-v1:W3Cx+HTML5.1x+2T2024/home" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            <i lang="en">HTML5 Coding Essentials and Best Practices</i>, Curso de la W3C en edX.
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target="_blank" ref="noopener noreferrer" hreflang="en">
            Listado de todas las etiquetas de HTML, documentación de mozilla.
          </a>
        </li>
        <li>
          <a href="https://validator.w3.org/" target="_blank" ref="noopener noreferrer" hreflang="en">
            Validador de la W3C de HTML semántivo
          </a>
        </li>
      </ul>
    </footer>
  </main>
</template>
