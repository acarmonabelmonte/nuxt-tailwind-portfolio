<template>
  <div class="bg-white dark:bg-gray-900 text-black">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeAboutSection />
          <!-- <div v-for="(edu, index) in education" :key="index"> -->
          <!-- <div class="text-xs uppercase font-bold">{{ edu.date }}</div> -->
          <!-- <div>
              {{ edu.title }}
              <p>{{ edu.description }}</p>
            </div> -->
          <!-- <nuxt-content class="mt-1 text-base" :document="edu" /> -->
          <!-- </div> -->
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
    const education = await $content(`education/${defaultLocale}`).fetch();
    const experience = await $content(`experience/${defaultLocale}`).fetch();

    return {
      education: education,
      experience: experience,
    };
  },
};
</script>
