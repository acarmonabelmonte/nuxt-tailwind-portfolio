<template>
  <div class="bg-white dark:bg-gray-900 text-black">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeContactSection />
        </div>
      </div>
    </section>
    <UIUpButton :scrollTopPixels="100" />
    <UIMainFooter />
  </div>
</template>