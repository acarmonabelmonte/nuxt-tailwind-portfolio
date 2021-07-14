<template>
  <div class="bg-white text-black">
    <UINavbar />
    <div v-for="(edu, index) in education" :key="index">
      <!-- <div class="text-xs uppercase font-bold">{{ edu.date }}</div> -->
      <div class="md:text-xl text-lg font-bold">
        {{ edu.title }}
        <p>{{ edu.description }}</p>
      </div>
      <!-- <nuxt-content class="mt-1 text-base" :document="edu" /> -->
    </div>
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
