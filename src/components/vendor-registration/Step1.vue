<template>
  <el-form label-position="top">
    <el-row :gutter="20">
      <el-col>
        <p>公司資料</p>
      </el-col>
      <el-col>
        <el-form-item label="公司名稱">
          <el-input placeholder="輸入公司名稱"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="公司聯絡人姓名">
          <el-input placeholder="輸入公司聯絡人姓名"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="公司電話">
          <el-input placeholder="輸入公司電話"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="24">
        <el-form-item label="公司地址">
          <el-input placeholder="輸入公司地址"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="銀行名稱">
          <el-input placeholder="輸入銀行名稱"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="銀行號碼">
          <el-input placeholder="輸入銀行號碼"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button class="return"> 返回 </el-button>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-2')" class="next"> 下一步 </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  methods: {
    nextStep(value) {
      this.$emit("changeStep", value);
    },
  },
};
</script>