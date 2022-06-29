<template>
  <el-form label-position="top">
    <el-row>
      <el-col>
        <h3>{{ $t("reset_password_text") }}</h3>
      </el-col>
      <!-- <el-col>
        <p>輸入你用以創建Shelax商戶帳號的電郵地址，我們會發送重設密碼的連結</p>
      </el-col> -->
      <el-col>
        <el-input
          :placeholder="$t('new_password')"
          :prefix-icon="Lock"
        ></el-input>
      </el-col>
      <el-col>
        <el-input
          :placeholder="$t('confirm_new_password')"
          :prefix-icon="Lock"
        ></el-input>
      </el-col>
      <el-col>
        <el-button>{{ $t("reset_password_button") }}</el-button>
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