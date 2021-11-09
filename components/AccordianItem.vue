/* eslint-disable vue/no-v-html */
<template>
  <div>
    <button
      :class="isActive ? 'active' : ''"
      class="accordion"
      @click="isActive = !isActive"
      v-html="item.title ? item.title : ''"
    ></button>
    <div
      :class="isActive ? 'block max-h-full' : 'hidden max-h-0'"
      class="panel"
      v-html="item.content ? item.content : ''"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style>
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #93c43b;
  color: #000000;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  font-weight: 900;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  margin-bottom: 1px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.accordion:hover {
  background-color: #000000;
  color: #ffffff;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #000000;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: '\2796'; /* Unicode character for "minus" sign (-) */
  color: #ffffff;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 8px 18px;
  background-color: white;
  overflow: hidden;
  transition: max-height 1s ease-out;
}
</style>
