<script setup>
import VisualizadorCodigo from '@/componentes/VisualizadorCodigo.vue';
</script>

<template>
  <main id="main">
    <h1>Estructura con <abbr>HTML</abbr> semántico</h1>
    <p>
      La forma requerida para un documento <abbr>HTML</abbr>, ha variado con el tiempo desde la invención del <abbr>HTML</abbr> en 1991,
      hasta la actualización de <abbr>HTML5</abbr> en octubre del 2014, simplificándose muchísimo.
    </p>
    <p>
      Actualmente requiere de una etiqueta de documento <code lang="en" class="etiqueta">DOCTYPE</code>, 
      una etiqueta de <code lang="en" class="etiqueta">html</code> con su lenguaje en código iso,
      una cabecera <code lang="en" class="etiqueta">head</code> en donde se incluyen todas las etiquetas de configuración que no son visibles
      y una etiqueta de cuerpo <code lang="en" class="etiqueta">body</code> en donde se escribe todo el contenido que verá la persona usuaria.
    </p>
    <VisualizadorCodigo
      titulo='Estructura documento HTML5'
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
    
    <section id="estructura-cabecera">
      <h2>Estructura de la cabecera</h2>
      <p>
        Cuando una <strong>computadora</strong> lee la cabecera <code lang="en" class="etiqueta">head</code> 
        puede encontrar toda la información acerca de la página y su configuración.
      </p>
      <p>
        Son etiquetas no visibles en la pantalla pero muy importantes para posicionar el sitio en la web,
        ya que los robots leen los metadatos de ésta sección, tomando información para indexar y compartir el sitio a lo largo de la internet.
      </p>
      
      <ol>
        <li>
          <code lang="en" class="etiqueta">title</code>
          título de la página que aparece en la pestaña del navegador y en los resultados de búsqueda.
        </li>
        <li>
          <code lang="en" class="etiqueta">base</code>
          para escribir la url base de todas las rutas relativas del documento.
        </li>
        <li>
          <code lang="en" class="etiqueta">link</code>
          se utiliza para enlazar recursos externos, como las hojas de estilo o las tipografías.
        </li>
        <li>
          <code lang="en" class="etiqueta">meta</code>
          proporciona metadatos acerca de la página web.
        </li>
        <li>
          <code lang="en" class="etiqueta">style</code>
          para agregar estilos de css en la página.
        </li>
        <li>
          <code lang="en" class="etiqueta">script</code>
          para incluir código ejecutable, como JavaScript
        </li>
        <li>
          <code lang="en" class="etiqueta">noscript</code>
          para decirle al navegador que mostrar en caso de que el navegador no admita scripst.
        </li>
      </ol>
      <p class="nota">
        1. El <code lang="en" class="etiqueta">noscript</code> ya no he visto que se use... como ahora toooodo está armado con JavaScript, los navegadores ya están re acostumbrados.<br>
        2. Las etiquetas <code lang="en" class="etiqueta">style</code>, <code lang="en" class="etiqueta">script</code> y <code lang="en" class="etiqueta">noscript</code>
        también pueden utilizarse dentro del cuerpo del sitio.
      </p>
  
      <p>
        De éstas, quizás la más relevante para una persona diseñadora sería el metadato para cargar la imagen
        para compartir en redes, que para casi todas las redes es el mismo protocolo 
        <a href="https://ogp.me/" target="_blank" ref="nonoopener noreferrer" lang="en">open graph</a>,
        menos para <i lang="en">twitter</i> que utiliza su metadato propio y único como copito de nieve.
      </p>
      <VisualizadorCodigo
        titulo='Metadato de imagen para compartir'
        codigo='
          <meta property="og:image" content="https://dominio.com/img/redes.png" />
          <meta name="twitter:image" content="https://dominio.com/img/redes.png" />
        '
      />
      <p>
        El tamaño que necesita esta imagen varía dependiendo de la plataforma 
        y se van actualizando conforme cada plataforma va cambiando su diseño, entonces, es necesario investigar esta información 
        directamente en la plataforma en la que se compartirá. 
      </p>
      <p>
        El tipo de archivo que aceptan actualmente son png y jpg. Algunas plataformas dicen que también se pueden utilizar gifs,
        pero nunca salen animadas y por el tipo de archivo, pierden calidad y no son ligeras, así que no hay ninguna ventaja.
      </p>
      <p>
        Para leer la documentación de las redes sociales, normalmente hay que acceder a la sección de <i lang="en">developers</i> del sitio,
        a la que se puede acceder con el mismo usuario de la red, dándose de alta como desarrollador. Por ejemplo para <i lang="en">facebook</i>
        debes entrar a 
        <a lang="en" href="https://developers.facebook.com/docs/sharing/webmasters/images/" target="_blank" ref="nonoopener noreferrer">
          Images in Link Shares
        </a> 
        y para <i lang="en">X</i> antes <i lang="en">twitter</i>
        <a lang="en" href="https://developer.x.com/en/docs/x-for-websites/cards/overview/summary-card-with-large-image" target="_blank" ref="nonoopener noreferrer">
          Summary Card with Large Image
        </a>.
      </p>
      <p>
        Si se quiere verificar que se haya escrito correctamente la información a compartir, tiene que estar la página pública,
        esto significa que cualquier persona que conozca la url del sitio la pueda ver.
        Una vez publicada, se puede ir a los sitios de pruebas de cada plataforma, como son el 
        <a href="https://developers.facebook.com/tools/debug/" target="_blank" ref="nonoopener noreferrer" lang="en">
          Sharing debugger
        </a>
        para <i lang="en">facebook</i> y 
        <a href="https://cards-dev.x.com/validator" target="_blank" ref="nonoopener noreferrer" lang="en">
          Card validator
        </a> para <i lang="en">twitter</i>. Al menos actualmente, la url también ha variado con el tiempo.
      </p>
  
      <VisualizadorCodigo
        titulo='Ejemplo de información en la cabecera de un sitio'
        codigo='
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
            <title>Título de la página</title>
            <meta name="description" content="Descripción del sitio">
            <meta name="keywords" content="palabras, clave, separadas, por, comas">
            <meta name="robots" content="follow, index">
            
            <meta property="og:title" content="título de la página" />
            <meta property="og:description" content="descripción de la página" />
            <meta property="og:locale" content="es_MX" />
            <meta property="og:image" content="https://dominio.com/img/redes.png" />
            <meta name="twitter:title" content="título de la página" />
            <meta name="twitter:description" content="descripción de la página" />
            <meta name="twitter:image" content="https://dominio.com/img/redes.png" />
            
            <link rel="stylesheet" href="styles.css">
            <link rel="icon" href="favicon.ico">
            
          </head>
          <body>
            <!-- Estructura y contenido visible de la página -->
          </body>
          </html>
        '
      />
    </section>

    <section id="estructura-cuerco">
      <h2>Estructura del cuerpo</h2>
      <p>
        Cuando una <strong>persona</strong> o <strong>computadora</strong>, ven o leen el cuerpo <code lang="en" class="etiqueta">body</code>, 
        acceden al contenido visible y audible del sitio. Pero antes del contenido, debemos organizar de manera general la información del sitio.
      </p>
      <p>
        Para ayudarnos a crear la estructura utilizamos las etiquetas <i lang="en">landmarks</i>,
        que crean regiones semánticas de contenido definiendo la función que se espera de los elementos dentro de ella.
      </p>
      <ol>
        <li>
          <code lang="en" class="etiqueta">main</code>
          contenido principal de la página, solo debe existir uno por página.
        </li>
        <li>
          <code lang="en" class="etiqueta">nav</code>
          conjunto de enlaces dentro o fuera del sitio web.
        </li>
        <li>
          <code lang="en" class="etiqueta">aside</code>
          información complementaria al contenido principal.
        </li>
        <li>
          <code lang="en" class="etiqueta">search</code>
          formulario para buscar contenido o información.
        </li>
        <li>
          <code lang="en" class="etiqueta">form</code>
          información relevante para completar un formulario.<br />
          Para generar una región <i lang="en">landmark</i> se debe agregar
          <code lang="en" class="atributo">aria-label</code>, <code lang="en" class="atributo">aria-labeledby</code> o <code lang="en" class="atributo">title</code>.
        </li>
        <li>
          <code lang="en" class="etiqueta">section</code>
          área de contenido relacionado entre sí.<br />
          Para generar una región <i lang="en">landmark</i> se debe agregar 
          <code lang="en" class="atributo">aria-label</code> ó <code lang="en" class="atributo">aria-labeledby</code>.
        </li>
        <li>
          <code lang="en" class="etiqueta">header</code>
          encabezado del sitio web, generalmente se utiliza para agregar el logotipo, título, banners de presentación.
        </li>
        <li>
          <code lang="en" class="etiqueta">footer</code> pie de página del sitio web con información general.
        </li>
      </ol>
      <p class="nota">
        1. Para el <code lang="en" class="etiqueta">header</code> y el <code lang="en" class="etiqueta">footer</code>, 
        si se agrega dentro de otra etiqueta semántica, se convierte en información relacionada únicamente con la sección madre.<br>
        2. Si la página incluye más de una etiqueta de <i lang="en">landmark</i>, cada una debe diferenciarse con una 
        <code lang="en" class="atributo">aria-label</code> ó <code lang="en" class="atributo">aria-labeledby</code> única.
      </p>
      <p>
        Los programas de asistencia pueden leer estas etiquetas para navegar entre ellas
        y como existe un significado semántico establecido para cada etiqueta, es de esperar que por ejemplo la información principal 
        de un sitio esté en un <code lang="en" class="etiqueta">main</code>, mientras que la navegación en un <code lang="en" class="etiqueta">nav</code>.
      </p>
      <p>
        Por lo que hay que poner mucha atención a la hora de estructurar el sitio con éstas etiquetas, 
        ya que con ellas podemos construir un hermoso mapa o un complejo laberinto.
      </p>
  
      <VisualizadorCodigo
        titulo='Landmarks de una página web'
        codigo='
          <!DOCTYPE html>
          <html lang="es">
            <head> ... </head>
            
            <body>
              <nav aria-label="Menú Principal"> 
                <!-- Contenido del menú principal -->
              </nav>
  
              <main>
                <h1>Título de la página</h1>
                <!-- Contenido principal de la página -->
              </main>
  
              <aside>
                <!-- Índice de contenido del sitio -->
                <nav aria-labeledby="idNavIndice">
                  <h2 id="idNavIndice">
                    Título de la navegación
                  </h2>
                  <!-- Contenido de la navegación -->
                </nav>
              </aside>
  
              <footer>
                <!-- Información del sitio web -->
              </footer>
            </body>
          </html>
        '
      />
  
      <p>Referencias acerca de las <i lang="en">landmarks</i></p>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Ejemplos de <i lang="en"> ARIA landmarks</i>, referencia de la W3C.
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles/" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            <i lang="en">Using HTML landmark roles to improve accessibility</i>, referencia del blog de mozilla.
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/at.html" target="_blank" ref="nonoopener noreferrer" hreflang="en">
            Acerca de como las tecnologías de asistencia utilizan las <i lang="en">landmarks</i>, referencia de la W3C.
          </a>
        </li>
      </ul>
  
      <h3>Secciones de contenido</h3>
      <p>
        También tenemos unas pocas etiquetas para estructurar información, que NO son <i lang="en">landmarks</i>,
        muy útiles para contener y dar formato a secciones de contenido sin afectar la estructura general del sitio. 
        Estas etiquetas deben ser hijas de una <i lang="en">landmarks</i>.
      </p>
      <p id="titulo-seccion">Secciones</p>
      <ol aria-labelledby="titulo-seccion">
        <li>
          <code lang="en" class="etiqueta">section</code>
          grupo de contenido relacionado entre sí.
        </li>
        <li>
          <code lang="en" class="etiqueta">article</code>
          etiqueta semántica que representa un contenido independiente.
        </li>
        <li>
          <code lang="en" class="etiqueta">div</code>
          etiqueta no semántica para agrupar lo que sea.
        </li>
        <li>
          <code lang="en" class="etiqueta">address</code>
          etiqueta semántica con información de contacto de la página.
          Si se agrega dentro de otra etiqueta la información de contacto se refiere únicamente a la sección que lo contenga.
        </li>
      </ol>
  
      <p>
        El uso de éstas etiquetas no altera nada al diseño, son contenedores sin estilo que agrupan información 
        (aunque si se le agregan estilos con css pues ya aplica el diseño relacionado).
      </p>
      <p>
        Como diseñador, saber de la existencia de estas etiquetas puede ayudar a organizar mejor la estructura de información del sitio,
        agrupando los elementos del mismo tipo, se puede crear una jerarquía más obvia del contenido, tanto visual como auditivamente.
      </p>
      <p>
        Recordando que tan importante es el espacio vacío como el silencio en la composición de un sitio web.
      </p>
    </section>

  </main>
</template>
