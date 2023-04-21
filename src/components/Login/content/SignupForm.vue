<script setup lang="ts" name="loginSignupForm">
import { reactive } from "vue";

const ruleForm = reactive({});
</script>

<template>
  <section>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="max-content"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="age">
        <el-input v-model="ruleForm.age" placeholder="请输入用户名或手机号" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          placeholder="请输入"
        />
      </el-form-item>
      <el-button @click="sginIn">注册</el-button>
      <el-button type="primary" @click="sginUp">登录</el-button>
    </el-form>
  </section>
</template>

<style scoped lang="scss">
@include e(form) {
  border: 1px solid black;
  padding: 16px;
  width: 400px;
  border-radius: 8px;
  @include m(btn) {

  }
}
</style>
