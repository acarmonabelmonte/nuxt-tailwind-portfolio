<template>
  <section class="dark:text-white body-font">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap w-full mb-10 sm:mb-8">
        <div class="w-full">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 not-italic"
          >
            {{ $t("about_me") }}
          </h1>
          <div class="h-1 w-20 bg-blue-600 rounded"></div>
        </div>
        <div class="w-full mx-auto mt-10">
          <p class="leading-relaxed text-lg">
            {{ $t("about_me_section") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>