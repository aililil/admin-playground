<script setup lang="ts" name="homeNav">
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
  <nav class="ns-nav">
    <el-menu
      router
      default-active="2"
      :collapse="isCollapse"
      class="ns-nav__container"
    >
      <el-sub-menu index="1" title="菜单">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </nav>
</template>

<style lang="scss" scoped>
@include b(nav) {
  width: max-content;
  @include e(container) {
    min-height: 100vh;
  }
}
</style>
