<template>
  <div>
    <font-awesome-icon
      :icon="['fas', 'lightbulb']"
      class="mr-2 float-right text-2xl cursor-pointer"
      :class="
        $colorMode.preference == 'light' ? 'text-gray-900' : 'text-yellow-300'
      "
      @click="
        $colorMode.preference == 'light'
          ? ($colorMode.preference = 'dark')
          : ($colorMode.preference = 'light')
      "
    />
  </div>
</template>