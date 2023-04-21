<script setup lang="ts" name="homeMain"></script>

<template>
  <main class="ns-main">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
@include b(main) {
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 1000px;
}
</style>
