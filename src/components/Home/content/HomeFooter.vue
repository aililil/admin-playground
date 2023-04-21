<script setup lang="ts" name="homeFooter">
defineProps({
  // is menu collapsed
  isCollapse: {
    type: Boolean,
    default: false,
  },
  // menu
  menu: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <footer class="fotter"></footer>
</template>

<style lang="scss" scoped>
@include b(fotter) {
}
</style>
