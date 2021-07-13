<template>
  <div>
    <UINavbar />
    <!-- <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" /> -->
    <Tutorial />
    <Tutorial />
  </div>
</template>

<script>
// export default {
//   async asyncData({ $content, params, error, app }) {
//     const slug = app.i18n.locale + '/' + (params.slug || 'hello')
//     const page = await $content(slug)
//       .fetch()
//       .catch((err) => {
//         error({ statusCode: 404, message: 'Page not found' })
//       })

//     return {
//       page,
//     }
//   },
// }
</script>
