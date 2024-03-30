<template>
  <div class="flex py-1 border-b border-gray-400/20">
    <div
      class="flex flex-row items-center justify-between w-full mx-auto space-x-12 max-w-7xl"
    >
      <div class="flex flex-row items-center justify-start space-x-12 grow">
        <NuxtLink to="/" style="background-color: transparent !important" >
          <img
            class="w-auto h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </NuxtLink>
        <NavLink to="forum">Fórum</NavLink>
        <NavLink to="questoes">Questões</NavLink>
        <NavLink to="cards">Cards</NavLink>
      </div>

      <div class="flex flex-row items-center justify-center h-12 space-x-12">
        <ThemeSelector />
        <UserAvatar size="md" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
