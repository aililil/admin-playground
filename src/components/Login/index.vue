<script setup lang="ts" name="login">
import { onMounted, ref } from "vue";
let module = "SIGN_IN";
import { useRefs } from "@/hooks/tools/index";

let [refs, setRefs] = useRefs<{ test: HTMLDivElement }>();

onMounted(() => {
  console.log(refs.test);
  console.log(refs.el.a);
});
</script>

<template>
  <main>
    <section>
      <signin-form :ref="setRefs('el')" class="ns-login__form" />
      <signup-form class="ns-login__form" />
    </section>
    <div :ref="setRefs('test')">123</div>
  </main>
</template>

<style scoped lang="scss">
@include b(login) {
  @include e(form) {
    border: 1px solid black;
    padding: 16px;
    width: 400px;
    border-radius: 8px;
  }
}
</style>
