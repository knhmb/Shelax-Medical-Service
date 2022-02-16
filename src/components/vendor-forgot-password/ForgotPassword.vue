<template>
  <el-form label-position="top">
    <el-row>
      <el-col>
        <h3>忘記密碼</h3>
      </el-col>
      <el-col>
        <el-input :prefix-icon="Message"></el-input>
      </el-col>
      <el-col>
        <el-button @click="$emit('changeStep', 2)">下一步</el-button>
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
