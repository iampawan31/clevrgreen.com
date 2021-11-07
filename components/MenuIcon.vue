<template>
  <div
    :class="menuOpen ? 'change' : ''"
    class="cursor-pointer group"
    @click="toggleMenu"
  >
    <div
      class="
        menu-icon-top
        w-6
        h-0.5
        bg-primary
        my-1.5
        transition
        transform
        group-hover:-translate-y-px
      "
    ></div>
    <div class="menu-icon-middle w-6 h-0.5 bg-primary my-1.5 transition"></div>
    <div
      class="
        menu-icon-bottom
        w-6
        h-0.5
        bg-primary
        my-1.5
        transition
        transform
        group-hover:translate-y-px
      "
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style scoped>
.change .menu-icon-top {
  -webkit-transform: rotate(-45deg) translate(-5px, 5px);
  transform: rotate(-45deg) translate(-5px, 5px);
}

.change .menu-icon-middle {
  opacity: 0;
}

.change .menu-icon-bottom {
  -webkit-transform: rotate(45deg) translate(-7px, -6px);
  transform: rotate(45deg) translate(-7px, -6px);
}
</style>
