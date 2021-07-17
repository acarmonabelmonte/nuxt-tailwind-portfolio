<template>
  <section class="dark:text-white body-font relative mt-10" id="contact">
    <div class="mx-auto">
      <!-- <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label> Don’t fill this out: <input name="bot-field" /> </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" v-model="formData.name" />
          </div>
          <div>
            <label for="email">Your email</label>
            <input type="email" name="email" v-model="formData.email" />
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message">Message</label>
          <textarea name="message" v-model="formData.message"></textarea>
        </div>

        <button type="submit">Submit form</button>
      </form> -->
      <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="flex flex-wrap -m-2"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="p-2 w-full sm:w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm">{{
              $t("contact_label_name")
            }}</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="formData.name"
              class="
                w-full
                bg-gray-100 bg-opacity-50
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-2 focus:ring-blue-200
                text-base
                outline-none
                text-black
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
        </div>
        <div class="p-2 w-full sm:w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm">{{
              $t("contact_label_email")
            }}</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              class="
                w-full
                bg-gray-100 bg-opacity-50
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-2 focus:ring-blue-200
                text-base
                outline-none
                text-black
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm">{{
              $t("contact_label_message")
            }}</label>
            <textarea
              id="message"
              name="message"
              v-model="formData.message"
              class="
                w-full
                bg-gray-100 bg-opacity-50
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-2 focus:ring-blue-200
                h-32
                text-base
                outline-none
                text-black
                py-1
                px-3
                resize-none
                leading-6
                transition-colors
                duration-200
                ease-in-out
              "
            ></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            type="submit"
            class="
              flex
              mx-auto
              text-white
              bg-blue-500
              border-0
              py-2
              px-8
              focus:outline-none
              hover:bg-blue-600
              rounded
              text-lg
            "
          >
            {{ $t("btn_send") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => (this.formData = {}))
        .catch((error) => alert(error));
    },
  },
};
</script>