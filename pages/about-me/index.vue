<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeAboutSection class="italic -mb-16" />
          <div class="container px-5 mx-auto italic -pt-32">
            <p class="leading-relaxed text-lg mb-3">
              {{ $t("about_p1") }}
            </p>
            <p class="leading-relaxed text-lg mb-4">
              {{ $t("about_p2") }}
            </p>
            <AboutTechSection class="-mb-4" />
            <p class="leading-relaxed text-lg mb-4">
              {{ $t("about_p3") }}
            </p>
            <a
              class="
                tracking-widest
                dark:text-blue-500
                text-blue-600
                title-font
                uppercase
                not-italic
              "
              href="/documents/cv-acarmona.pdf"
              download="cv-adrian-carmona-belmonte"
            >
              {{ $t("btn_cv") }}
              <font-awesome-icon :icon="['fas', 'file-download']" />
            </a>
            <p class="leading-relaxed text-lg mt-6 mb-3">
              {{ $t("about_p4") }}
            </p>
            <p class="leading-relaxed text-lg mb-3">{{ $t("about_p5") }}</p>
          </div>
        </div>
      </div>
    </section>
    <UIUpButton :scrollTopPixels="100" />
    <UIMainFooter />
  </div>
</template>


