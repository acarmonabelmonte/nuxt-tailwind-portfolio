<template>
  <div>
    <font-awesome-icon
      :icon="['fas', $colorMode.preference == 'light' ? 'sun' : 'moon']"
      class="mr-2 float-right text-2xl"
      @click="
        $colorMode.preference == 'light'
          ? ($colorMode.preference = 'dark')
          : ($colorMode.preference = 'light')
      "
    />
  </div>
</template>