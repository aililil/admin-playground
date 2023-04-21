<script setup lang="ts" name="loginSignupForm">
import { useRefs } from "@/hooks/tools";
import { onMounted, ref } from "vue";
const [refs, setRef] = useRefs();

onMounted(() => {
  console.log(refs.box);
  addEvent(refs.box);
});

function addEvent(eventTarget: EventTarget) {
  eventTarget.addEventListener("wheel", onWheel);
  eventTarget.addEventListener("drag", onTouchMove);
}

// resize event
const size = ref(1);
function onWheel(e: WheelEvent): void {
  e.preventDefault();
  const { deltaX, deltaY } = e;
  size.value += deltaY > 0 ? 0.05 : -0.05;

  refs.box.style.transform = `scaleX(${size.value}) scaleY(${size.value})`;
}

function onTouchMove(e: TouchEvent) {
  console.log(e);
  console.log(e.target.screenx);

  refs.box.style.left = "122px";
}
</script>

<template>
  <section :ref="setRef('box')" class="box">
    <slot> </slot>
  </section>
</template>

<style scoped lang="scss">
.box {
  position: absolute;
  transition-duration: 0.2s;
  padding: 12px;
  &:hover {
    outline: 2px dashed black;
  }
}
</style>
