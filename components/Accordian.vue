<template>
  <div v-if="items">
    <AccordianItem v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style></style>
