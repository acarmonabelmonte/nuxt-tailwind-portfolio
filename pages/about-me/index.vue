<template>
  <div class="bg-white text-black">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <p>
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware. Man bun next level coloring book skateboard
            four loko knausgaard. Kitsch keffiyeh master cleanse direct trade
            indigo juice before they sold out gentrify plaid gastropub normcore
            XOXO 90's pickled cindigo jean shorts. Slow-carb next level
            shoindigoitch ethical authentic, yr scenester sriracha forage
            franzen organic drinking vinegar.
          </p>
          <div v-for="(edu, index) in education" :key="index">
            <!-- <div class="text-xs uppercase font-bold">{{ edu.date }}</div> -->
            <div>
              {{ edu.title }}
              <p>{{ edu.description }}</p>
            </div>
            <!-- <nuxt-content class="mt-1 text-base" :document="edu" /> -->
          </div>
        </div>
      </div>
    </section>
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
