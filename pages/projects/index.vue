<template>
  <div class="bg-white text-black">
    <UINavbar />
    <section class="text-gray-600 body-font">
      <div class="container lg:px-80 px-5 py-32 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              class="
                sm:text-3xl
                text-2xl
                font-medium
                title-font
                mb-2
                text-gray-900
              "
            >
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div class="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const projects = await $content(`projects/${defaultLocale}`).fetch();

    return {
      projects: projects,
    };
  },
};
</script>