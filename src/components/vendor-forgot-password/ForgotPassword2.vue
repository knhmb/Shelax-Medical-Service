<template>
  <el-form label-position="top">
    <el-row>
      <el-col>
        <h3>重設密碼</h3>
      </el-col>
      <el-col>
        <p>輸入你用以創建Shelax商戶帳號的電郵地址，我們會發送重設密碼的連結</p>
      </el-col>
      <el-col>
        <el-input placeholder="新密碼" :prefix-icon="Lock"></el-input>
      </el-col>
      <el-col>
        <el-input placeholder="確認新密碼" :prefix-icon="Lock"></el-input>
      </el-col>
      <el-col>
        <el-button>重設密碼</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { Lock } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Lock,
    };
  },
};
</script>