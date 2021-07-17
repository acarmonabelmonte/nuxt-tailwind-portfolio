<template>
  <section class="body-font">
    <div class="container px-5 py-8 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div
          class="w-1/2 sm:w-1/4 sm:mb-0 mb-6 p-4"
          v-for="(tech, index) in technologies"
          :key="index"
        >
          <div class="h-full text-center">
            <img
              alt="testimonial"
              class="
                w-20
                h-20
                mb-8
                object-cover object-center
                rounded-full
                inline-block
                border-2 border-blue-200
                bg-blue-100
              "
              :src="tech.image"
            />
            <p class="leading-relaxed">{{ tech.name }}</p>
            <span
              class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          name: "Javascript",
          image: "/images/tech/js.png",
        },
        {
          name: "Vue",
          image: "/images/tech/vue.png",
        },
        {
          name: "Nuxt",
          image: "/images/tech/nuxt.png",
        },
        {
          name: "React",
          image: "/images/tech/react.png",
        },
        {
          name: "Next",
          image: "/images/tech/next.png",
        },
        {
          name: "Node",
          image: "/images/tech/node.png",
        },
        {
          name: "Tailwind CSS",
          image: "/images/tech/tailwind.png",
        },
        {
          name: "Strapi",
          image: "/images/tech/strapi.png",
        },
      ],
    };
  },
};
</script>