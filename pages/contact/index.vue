<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeContactSection />
          <p class="leading-relaxed text-lg mt-6 mb-3">
            {{ $t("contact_p1") }}
          </p>
          <p class="leading-relaxed text-lg mt-6 mb-3">
            {{ $t("contact_p2") }}
          </p>
          <a
            class="
              dark:text-blue-500
              text-blue-600
              title-font
              uppercase
              not-italic
            "
            href="mailto:acarmona.dev@gmail.com"
          >
            acarmona.dev@gmail.com
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
          <p class="leading-relaxed text-lg mt-6 mb-3">
            {{ $t("contact_p3") }}
          </p>
          <a
            class="
              w-full
              dark:text-blue-500
              text-blue-600
              title-font
              uppercase
              text-center
              mr-4
              mb-4
            "
            v-for="(item, index) in socialMedia"
            :key="index"
            :href="item.href"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ item.name }}
            <font-awesome-icon :icon="[item.type, item.name]" />
          </a>
        </div>
      </div>
    </section>
    <UIUpButton :scrollTopPixels="100" />
    <UIMainFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          type: "fab",
          name: "linkedin",
          href: "https://www.linkedin.com/in/acarmonabelmonte/",
        },
        {
          type: "fab",
          name: "instagram",
          href: "https://www.instagram.com/adriancarbel/",
        },
        {
          type: "fab",
          name: "twitter",
          href: "https://twitter.com/adriancarbel",
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t("contact"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("contact_p1"),
        },
        { hid: "og:title", property: "og:title", content: this.$t("contact") },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("contact_p1"),
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

<style>
::-webkit-scrollbar {
  height: 0; /* height of horizontal scrollbar ← You're missing this */
  width: 0; /* width of vertical scrollbar */
}
</style>