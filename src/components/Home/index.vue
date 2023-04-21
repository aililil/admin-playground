<script setup lang="ts"></script>

<template>
  <home-header />
  <div class="home">
    <home-nav />
    <home-main></home-main>
    <home-footer></home-footer>
  </div>
</template>

<style scoped lang="scss">
@include b(home) {
  display: flex;
  flex-direction: row;
}
</style>
