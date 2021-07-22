<template>
  <div class="bg-white dark:bg-gray-900 text-black">
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
  head() {
    return {
      title: this.$t("home"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("welcome_subtitle"),
        },
        { hid: "og:title", property: "og:title", content: this.$t("home") },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("welcome_subtitle"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/images/logo/logo-light.png",
        },
      ],
    };
  },
};
</script>


