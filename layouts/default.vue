<template>
  <div class="font-body text-black">
    <TopBanner v-show="isHomePage" />
    <div>
      <Header :is-home-page="isHomePage" />
      <div class="pt-10">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isHomePage() {
      return this.$route.path === '/'
    },
  },
}
</script>

<style></style>
