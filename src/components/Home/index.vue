<script setup lang="ts">
import { getOrderDetails } from "@/api/index";
getOrderDetails({ orderNo: "6790520230419110816756" });
</script>

<template>
  <home-header />
  <div class="ns-home">
    <home-nav />
    <section>
      <home-main></home-main>
      <home-footer></home-footer>
    </section>
  </div>
</template>

<style scoped lang="scss">
@include b(home) {
  display: flex;
  flex-direction: row;
}
</style>
