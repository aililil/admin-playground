<script setup lang="ts" name="homeHeader">
import Icon from "@/assets/icons/vue.svg";
import { ref } from "vue";

let settingDrawer = ref(false);
let userDrawer = ref(false);
const nickName = ref("管理员");
</script>

<template>
  <header class="header-nav">
    <!-- icons -->
    <el-image class="header-nav-icon" :src="Icon"></el-image>

    <!-- router breadcrumb  -->
    <el-breadcrumb class="header-nav-breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- search -->
    <div class="header-nav-search">
      <el-icon>
        <Search />
      </el-icon>
      <p>搜索</p>
      <p>ctrl+k</p>
    </div>

    <!-- avatar and nickname -->
    <el-tooltip content="User Center">
      <div class="header-nav-avatar header-nav-hover">
        <el-avatar class="header-nav-avatar" @click.stop="userDrawer = true" />
        <p>{{ nickName }}</p>
      </div>
    </el-tooltip>

    <!-- notice icon -->
    <el-tooltip content="Message Center">
      <ChatDotSquare class="header-nav-icon header-nav-hover" />
    </el-tooltip>

    <!-- setting icon -->
    <el-tooltip content="Setting Center">
      <Setting
        class="header-nav-icon header-nav-hover"
        @click.stop="settingDrawer = true"
      />
    </el-tooltip>
  </header>
</template>

<style scoped lang="sass">
$ns: '.header-nav'

#{$ns}
  display: flex
  flex-direction: row
  align-items: center
  width: 100%
  padding: 8px
  background-color: #394664
  color: white
  & > *
    padding: 8px
    &:hover
      cursor: pointer

  #{$ns}-breadcrumb
    margin: 0 24px
    justify-content: flex-start

  #{$ns}-search
    display: flex
    align-items: center
    border: #f7f7f7 1px solid
    border-radius: 8px
    &:hover
      border-color: red
    & > p:last-child
      opacity: 0.5
      margin-left: 4px

  #{$ns}-avatar
    margin-left: auto
    margin-right: 0
    display: flex
    align-items: center
    & > span
      width: 2em
      height: 2em
      border-radius: 50%
    & > p
      margin-left: 4px
      display: block

  #{$ns}-icon
    width: 2.6em
    height: 2.6em

  #{$ns}-hover
    transition-duration: 0.2s
    &:hover
      color: white
      transform: scale(1.05)
      transition-duration: 0.2s
      background-color: #485573
</style>
