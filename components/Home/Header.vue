<template>
  <section class="dark:text-white body-font">
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div
        class="
          lg:flex-grow
          md:w-1/2
          flex flex-col
          md:items-start
          md:text-left
          mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium">
          {{ $t("welcome_title") }}
        </h1>
        <p class="mb-8">
          {{ $t("welcome_subtitle") }}
        </p>
        <div class="flex justify-center">
          <a
            class="
              inline-flex
              text-white
              bg-blue-600
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-blue-700
              rounded
              text-lg
              font-semibold
            "
            href="/documents/cv-acarmona.pdf"
            download="cv-adrian-carmona-belmonte"
          >
            {{ $t("btn_cv") }}
          </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="about-me"
          src="/svg/about-me.svg"
          width="500"
          height="600"
        />
      </div>
    </div>
  </section>
</template>