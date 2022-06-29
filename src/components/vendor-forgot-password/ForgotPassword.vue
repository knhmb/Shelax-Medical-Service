<template>
  <el-form label-position="top">
    <el-row>
      <el-col>
        <h3>{{ $t("vendor_forgot_password") }}</h3>
      </el-col>
      <el-col>
        <el-input
          :placeholder="$t('email_address')"
          :prefix-icon="Message"
        ></el-input>
      </el-col>
      <el-col>
        <el-button @click="$emit('changeStep', 2)">{{
          $t("next_button")
        }}</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { Message } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Message,
    };
  },
};
</script>
