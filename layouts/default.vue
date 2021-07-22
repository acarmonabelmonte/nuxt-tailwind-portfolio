<template>
  <div>
    <Nuxt />
    <UIUpButton :scrollTopPixels="100" />
  </div>
</template>

<style>
::-webkit-scrollbar {
  height: 0; /* height of horizontal scrollbar ← You're missing this */
  width: 0; /* width of vertical scrollbar */
}
</style>