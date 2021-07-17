<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeAboutSection />
          <div class="container px-5 mx-auto italic -pt-32">
            <p class="leading-relaxed text-lg mb-3">
              Soy Desarrollador Front-End. Mi trabajo consiste en construir a
              partir de código las interfaces web que utilizamos a partir de
              ideas o diseños. El front-end es la capa frontal y que se ve en
              los sitios webs o en aplicaciones. Incluye el diseño, la
              distribución del contenido, las funcionalidades y todos los
              elementos con los que un usuario interactúa: Fuentes, botones,
              tablas, menús, colores, etc.
            </p>
            <p class="leading-relaxed text-lg mb-3">
              He trabajado con las siguientes tecnologías:
            </p>
          </div>
        </div>
      </div>
    </section>
    <UIUpButton :scrollTopPixels="100" />
    <UIMainFooter />
  </div>
</template>


