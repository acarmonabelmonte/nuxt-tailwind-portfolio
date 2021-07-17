<template>
  <div class="bg-white dark:bg-gray-900 text-black">
    <UINavbar />

    <section>
      <div class="container px-5 py-24 mx-auto -mb-20">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <section class="dark:text-white body-font">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex flex-wrap w-full mb-10 sm:mb-8">
                <div class="w-full">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
                    {{ $t("projects") }}
                  </h1>
                  <div class="h-1 w-20 bg-blue-600 rounded"></div>
                </div>
              </div>
              <div class="flex flex-wrap -m-4 mb-3">
                <div
                  class="py-8 sm:px-4"
                  v-for="(project, index) in projects"
                  :key="index"
                >
                  <div class="rounded-lg">
                    <img
                      class="
                        h-40
                        sm:h-80
                        rounded
                        w-full
                        object-cover object-center
                        mb-6
                      "
                      :src="project.image"
                      alt="content"
                    />
                    <a
                      v-if="project.url"
                      class="
                        tracking-widest
                        dark:text-blue-500
                        text-blue-600 text-xs
                        font-medium
                        title-font
                        uppercase
                      "
                      :href="project.url"
                    >
                      {{ $t("see_web") }}
                      <font-awesome-icon :icon="['fas', 'globe']" />
                    </a>
                    <h2 class="text-lg font-medium title-font">
                      {{ project.title }}
                    </h2>
                    <p class="leading-relaxed text-base">
                      {{ project.description }}
                    </p>
                    <p
                      v-if="project.list"
                      class="leading-relaxed text-base list-inside"
                      v-html="project.list"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
    const projects = await $content(`projects/${defaultLocale}`).fetch();

    return {
      projects: projects.sort(() => Math.random() - 0.5),
    };
  },
};
</script>