<script setup>
const props = defineProps({
  to: String,
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="hidden lg:inline-flex gap-2.5 items-center rounded-full whitespace-nowrap px-4 py-2 font-medium text-sm transition-colors xl:text-base focus:outline-none focus-visible:ring  dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-black/10 dark:hover:bg-white/10"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>

</style>
