<template>
  <div class="bg-white text-black">
    <UINavbar />

    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeProjectSection />
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