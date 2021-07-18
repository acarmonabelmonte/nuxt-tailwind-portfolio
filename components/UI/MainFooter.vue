<template>
  <footer class="dark:text-white body-font">
    <div
      class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col"
    >
      <img
        class="
          w-10
          h-auto
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
        "
        alt="logo"
        :src="
          $colorMode.preference == 'light'
            ? '/images/logo/logo-light.png'
            : '/images/logo/logo-dark.png'
        "
      />

      <p
        class="
          text-sm
          sm:ml-4
          sm:pl-4
          sm:border-l-2 sm:border-blue-300
          sm:py-2
          sm:mt-0
          mt-4
        "
      >
        © Adrián Carmona {{ currentYear }}. {{ $t("made_with") }}
      </p>
      <span
        class="
          inline-flex
          sm:ml-auto
          sm:mt-0
          mt-4
          justify-center
          sm:justify-start
        "
      >
        <a
          class="ml-3 text-blue-500 hover:text-blue-600"
          v-for="(item, index) in socialMedia"
          :key="index"
          :href="item.href"
          target="_blank"
          rel="noreferrer noopener"
          :aria-label="item.name"
        >
          <font-awesome-icon
            :icon="[item.type, item.name]"
            class="mr-2 float-right text-2xl"
          />
        </a>
      </span>
    </div>
  </footer>
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
          name: "github",
          href: "https://github.com/acarmonabelmonte",
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
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>