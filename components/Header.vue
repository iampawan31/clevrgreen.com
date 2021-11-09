<template>
  <div
    :class="isHomePage ? 'mt-32 lg:mt-10' : 'mt-0'"
    class="fixed top-0 z-50 bg-secondary w-full shadow"
  >
    <div class="container mx-auto px-4 lg:px-44">
      <div
        class="h-14 flex justify-start align-middle content-center items-center"
      >
        <div>
          <MenuIcon />
        </div>
        <div class="flex-1 flex justify-center">
          <NuxtLink to="/">
            <img src="/logo.png" alt="Clevrgreen" class="h-6" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHomePage: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
