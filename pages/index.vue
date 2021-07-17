<template>
  <div class="bg-white text-black">
    <UINavbar />
    <section>
      <div class="container px-5 py-24 sm:py-10 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
          <HomeHeader />
          <HomeProjectSection />
          <HomeAboutSection />
          <HomeContactSection />
        </div>
      </div>
    </section>
    <UIMainFooter />
  </div>
</template>

><style>
::-webkit-scrollbar {
  height: 4px; /* height of horizontal scrollbar ← You're missing this */
  width: 4px; /* width of vertical scrollbar */
  border: 2px solid #b2ebf9;
}
</style>
