<template>
  <button
    @click="upToTop()"
    id="myBtn"
    type="button"
    class="bg-blue-600 rounded-full"
  >
    <font-awesome-icon :icon="['fas', 'chevron-up']" class="text-white" />
  </button>
</template>

<script>
export default {
  name: "BackToTopButton",
  props: ["scrollTopPixels"],
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      var mybutton = document.getElementById("myBtn");
      if (
        document.body.scrollTop > this.scrollTopPixels ||
        document.documentElement.scrollTop > this.scrollTopPixels
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
    // When the user clicks on the button, scroll to the top of the document
    upToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
#myBtn {
  display: none;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 30px;
  font-size: 22px;
  line-height: 22px;
  bottom: 40px;
  right: 7px;
  z-index: 49;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
}
</style>
