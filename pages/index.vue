<template>
  <div class="bg-white dark:bg-gray-900 text-black">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 sm:py-20 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeHeader />
          <HomeProjectSection :projects="projects" />
          <CommonViewMoreLink :url="'projects'" :text="$t('more_projects')" />
          <HomeAboutSection />
          <CommonViewMoreLink :url="'about-me'" :text="$t('more_about_me')" />
          <HomeContactSection />
        </div>
      </div>
    </section>
    <UIUpButton :scrollTopPixels="100" />
    <UIMainFooter />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const projects = await $content(`projects/${defaultLocale}`).fetch();

    return {
      // shuffle array and extract two elements
      projects: projects.sort(() => Math.random() - 0.5).slice(0, 2),
    };
  },
};
</script>

><style>
::-webkit-scrollbar {
  height: 0; /* height of horizontal scrollbar ← You're missing this */
  width: 0; /* width of vertical scrollbar */
}
</style>
