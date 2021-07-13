<template>
  <p>Projectos: {{ $t("hello_world") }}</p>
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