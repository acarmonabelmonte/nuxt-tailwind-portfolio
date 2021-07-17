<template>
  <nuxt-link
    class="
      tracking-widest
      dark:text-blue-500
      text-blue-600 text-sm
      font-medium
      title-font
      float-right
    "
    :to="localePath(url)"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>