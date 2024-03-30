<script setup lang="ts">

import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'

const colorMode = useColorMode();

const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
}

</script>

<template>
    <Transition mode="out-in" name="fade-and-rotate" class="cursor-pointer">
      <MoonIcon class="w-6 h-6" v-if="colorMode.preference === 'dark'" @click="toggleColorMode()"/>
      <SunIcon class="w-6 h-6" v-else @click="toggleColorMode()"/>
    </Transition>
</template>

<style scoped>
.fade-and-rotate-enter-active,.fade-and-rotate-leave-active {
  @apply transition-all duration-300 ease-in-out;
}
.fade-and-rotate-enter-from{
  opacity: 0;
  transform: translateY(-15px);
}
.fade-and-rotate-leave-to {
  opacity: 0;
  transform: translateY(15px);
}


</style>
