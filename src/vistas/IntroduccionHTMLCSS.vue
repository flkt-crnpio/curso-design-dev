<script setup>
import VisualizadorEtiquetas from '@/componentes/VisualizadorEtiquetas.vue';
import VisualizadorCodigo from '@/componentes/VisualizadorCodigo.vue';
</script>

<template>
  <main id="main">
    
    <h1>
      Curso introductorio al HTML semántico y CSS 
      para diseñadoras de interfaces digitales
    </h1>

    <p>
      --- Descripción ---
    </p>


    <p>Escrito en agosto del 2024</p>


    <article>
      <h2>Introducción al HTML semántico</h2>
      <!-- <p>
        HTML is the technology that defines the content and structure of any website. 
        Written properly, it should also define the semantics (meaning) of the content in a machine-readable way, 
        which is vital for accessibility, search engine optimization, 
        and making use of the built-in features browsers provide for content to work optimally. 
        This module covers the basics of the language, 
        before looking at key areas such as document structure, links, lists, images, forms, and more.
      </p> -->
      <!-- <p>
        Screen readers will announce the type of role the landmark is. 
        Because of this, you do not need to describe what the landmark is in its label
      </p> -->
      <p>
        El HTML <em lang="en">(HyperText Markup Language)</em> es el lenguaje mediante el cuál
        damos <strong>estructura</strong> a una página web.
      </p>
      <p>
        Si se escribe semánticamente proporciona además sentido al contenido
        que distintas máquinas, programas y dispositivos de asistencia son capaces de leer 
        proporcionando mejoras en la accesibilidad y el posicionamiento orgánico del sitio web
        en la red de internet.
      </p>
      <p>
        La forma básica de un elemento de html consta generalmente de una etiqueta de apertura, 
        atributo, valor del atributo, contenido y etiqueta de cierre. 
        Lo que se ve de la siguiente manera:
      </p>
      <VisualizadorCodigo
        tipo='HTML'
        codigo='<p class="nombre-clase">ejemplo</p>'
      />
      <p>
        También existen elementos vacíos que no contienen una etiqueta de cierre,
        únicamente tiene de apertura y distintos atributos, como por ejemplo la etiqueta de imágen
      </p>
      <VisualizadorCodigo
        tipo='HTML'
        codigo='<img src="/ruta/al/archivo.png" alt="Texto alternativo" />'
      />
      
      
      <section>
        <h3>Estructura de una página web</h3>

        <p>
          Estructura general  doctype, html, head, body
        </p>
        <p>
          etiquetas en la cabecera cuales son, las mas comunes, para que sirven
        </p>
        <p>
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html">Landmarks</a>
  
          provide a powerful way to identify the organization and structure of a web page.
       
          etiquetas de landmarks vs roles <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles">_landmark_roles</a>
        </p>
        <p>
          etiquetas semánticas para estructurar <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning">secciones</a>
        </p>

  
        <p>ejemplo</p>
        <VisualizadorEtiquetas />
      </section>

      <section>

        <h3>Contenido de una página web</h3>
        <p>etiquetas de texto</p>
        <p>etiquetas de imagen y multimedia</p>
        <p>tablas</p>
        <p>listas</p>
        <p>formularios</p>
        <p>botones</p>
        <p>enlaces</p>
        <p>interactivas</p>
  
        <p>etiquetas no semanticas</p>

        <p>elementos interactivos <a href="https://web.dev/learn/html/focus?hl=es-419">estado de enfoque</a></p>
  
        <VisualizadorEtiquetas />
      </section>
   
    </article>

    <article>
      <h2>CSS</h2>
      <p>que es</p>
      <p>como se escribe</p>
      <p>para que sirve</p>

      <p>clases</p>
      <p>
        CSS Elementos y Pseudoelementos
      </p>
      <p>pseudoclases</p>
      <p>variables css</p>


      <p>Diseño de Interfaces pensando en CSS</p>
      <p>
          diseño responsivo
        </p>
        <p>
          movile first
        </p>
        <p>
          el media query. cuantos hay 
        </p>

      <VisualizadorEtiquetas />

    </article>

    <article>
      <h2>Modelo de objetos de accesibilidad (AOM)</h2>
      <p>
        A medida que el navegador analiza el contenido recibido, crea el modelo de objetos del documento (DOM) 
        y el modelo de objetos CSS (CSSOM). Luego, también crea un árbol de accesibilidad. Los dispositivos de asistencia, 
        como los lectores de pantalla, usan la AOM para interpretar y analizar contenido. 
        El DOM es un árbol de todos los nodos del documento. 
        El AOM es como una versión semántica del DOM.

        <a href="https://web.dev/learn/html/semantic-html?hl=es-419">html semantico y el modelo de objetos de accesibilidad</a>
      </p>
    </article>

  </main>
</template>
