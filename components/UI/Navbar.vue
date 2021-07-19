<template>
  <div class="fixed w-full z-10">
    <nav
      :class="{ scrolled: !view.atTopOfPage }"
      class="
        flex
        items-center
        justify-between
        lg:justify-center
        px-6
        py-8
        h-16
        bg-white
        dark:text-white
        dark:bg-gray-800
        text-black
      "
    >
      <div class="flex items-center">
        <button
          class="mr-5 block lg:hidden"
          aria-label="Open Menu"
          @click="drawer"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center">
        <div class="flex justify-between md:bg-transparent font-semibold">
          <div
            class="flex items-center p-3 mr-2 text-center hidden md:block"
            v-for="(route, index) in routes"
            :key="index"
          >
            <nuxt-link :to="localePath(route.path)" class="">{{
              route.name
            }}</nuxt-link>
          </div>
          <div class="flex items-center p-3 mr-2 text-center">
            <UILangSelector />
          </div>
          <div class="flex items-center p-3 text-center">
            <UIThemeSelector />
          </div>
        </div>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="
          transform
          top-0
          left-0
          w-full
          h-full
          bg-white
          dark:text-white
          dark:bg-gray-800
          text-black
          fixed
          overflow-auto
          ease-in-out
          transition-all
          duration-300
          z-30
        "
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <span
          @click="isOpen = false"
          class="flex w-full justify-center relative"
        >
          <div class="absolute top-0 right-0 h-16 w-16 flex mt-2 justify-end">
            <font-awesome-icon
              :icon="['fas', 'times']"
              class="mr-2 float-right text-2xl"
            />
          </div>
        </span>
        <div class="w-full flex items-center justify-center">
          <ul class="flex flex-col text-center mt-24">
            <li
              @click="isOpen = false"
              v-for="(route, index) in routes"
              :key="index"
              class="font-semibold text-3xl py-8"
            >
              <font-awesome-icon
                :icon="['fas', route.icon]"
                class="mr-2"
              /><nuxt-link :to="localePath(route.path)">{{
                route.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      view: {
        atTopOfPage: true,
      },
      routes: [
        {
          name: this.$t("home"),
          path: "/",
          icon: "home",
        },
        {
          name: this.$t("about_me"),
          path: "about-me",
          icon: "user",
        },
        {
          name: this.$t("projects"),
          path: "projects",
          icon: "rocket",
        },
        {
          name: this.$t("contact"),
          path: "contact",
          icon: "envelope",
        },
      ],
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>

<style scoped>
.dark a.nuxt-link-exact-active {
  font-weight: bold;
  box-shadow: inset 0 -10px 0 0 #03378b;
}

a.nuxt-link-exact-active {
  font-weight: bold;
  box-shadow: inset 0 -10px 0 0 #87b2f7;
}

nav {
  z-index: 10;
  box-shadow: 1px 1px 7px -4px #000;
}

nav.scrolled {
  box-shadow: 1px 1px 12px -4px #000;
  border-bottom: 0px;
}
</style>
