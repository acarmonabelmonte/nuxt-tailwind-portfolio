<template>
  <select
    v-model="selectedValue"
    @change="onChange(selectedValue)"
    class="font-medium uppercase"
  >
    <option
      v-for="(locale, index) in $i18n.locales"
      :key="index"
      :value="locale.code"
    >
      {{ locale.code }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    },
  },
};
</script>

<style scoped>
</style>