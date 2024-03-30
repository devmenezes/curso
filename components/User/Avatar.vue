<script setup>

const props = defineProps({
  size: {
    type: String,
    default: 'sm',
  },
})

const height = computed(() => {
  switch (props.size) {
    case 'xs':
      return '6'
    case 'sm':
      return '8'
    case 'md':
      return '12'
    case 'lg':
      return '14'
    case 'xl':
      return '16'
    default:
      return '8'
  }
})

const weight = height.value


</script>

<template>
  <span class="relative inline-block">
    <img
      class="rounded-full"
      :class="`h-${height} w-${weight}`"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <span
      class="absolute bottom-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"
    />
  </span>
</template>

<style scoped></style>
