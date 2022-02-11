<template>
  <el-form label-position="top">
    <el-row :gutter="20">
      <el-col>
        <p>申請人資料</p>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="申請人姓名">
          <el-input placeholder="輸入申請人姓名"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="出生日期">
          <el-input placeholder="輸入出生日期"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="24">
        <el-form-item label="香港身份證號碼">
          <el-input placeholder="輸入電郵地址"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="9">
        <el-form-item label="電郵地址">
          <el-input placeholder="輸入電郵地址"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="6">
        <el-button class="verification-code">獲取驗證碼</el-button>
      </el-col>
      <el-col :sm="24" :md="9">
        <el-form-item label="驗證碼">
          <el-input placeholder="輸入驗證碼"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="密碼">
          <el-input placeholder="輸入密碼"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="確認密碼">
          <el-input placeholder="再次輸入密碼"></el-input>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item>
          <el-checkbox
            label="我已閱讀並同意Shelax的使用條款及隱私政策。"
          ></el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-1')" class="return"> 返回 </el-button>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-3')" class="next"> 下一步 </el-button>
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