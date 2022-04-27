<template>
  <div class="personal-information-form">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <el-row :gutter="20">
        <el-col :sm="24" :md="6">
          <el-form-item label="稱謂" prop="title">
            <el-select v-model="ruleForm.title" placeholder="先生">
              <el-option label="先生" value="先生">先生</el-option>
              <el-option label="太太" value="太太">太太</el-option>
              <el-option label="小姐" value="小姐">小姐</el-option>
              <el-option label="女士" value="女士">女士</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="姓氏" prop="lastName">
            <el-input
              v-model="ruleForm.lastName"
              placeholder="請輸入姓氏"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="名字" prop="firstName">
            <el-input
              v-model="ruleForm.firstName"
              placeholder="請輸入名字"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="6">
          <el-form-item label="電話區號" prop="phoneAreaCode">
            <el-input
              v-model="ruleForm.phoneAreaCode"
              placeholder="請輸入電話區號"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="電話號碼" prop="phoneNumber">
            <el-input
              v-model="ruleForm.phoneNumber"
              placeholder="請輸入電話號碼"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="電郵地址" prop="email">
            <el-input
              v-model="ruleForm.email"
              placeholder="請輸入電郵地址"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="居住國家 / 城市" prop="country">
            <el-input
              v-model="ruleForm.country"
              placeholder="請選擇居住國家/城市"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="button-wrapper">
        <el-button @click="submit">儲存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        title: "",
        lastName: "",
        firstName: "",
        phoneAreaCode: "",
        phoneNumber: "",
        email: "",
        country: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "請輸入姓氏",
            trigger: "change",
          },
        ],
        lastName: [
          {
            required: true,
            message: "請輸入姓氏",
            trigger: "blur",
          },
        ],
        firstName: [
          {
            required: true,
            message: "請輸入名字",
            trigger: "blur",
          },
        ],
        phoneAreaCode: [
          {
            required: true,
            message: "請輸入電話區號",
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: "請輸入電話號碼",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "請輸入電郵地址",
            type: "email",
            trigger: "blur",
          },
        ],
        country: [
          {
            required: true,
            message: "請選擇居住國家/城市",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          console.log("valid");
        }
      });
    },
  },
};
</script>

<style>
.member-profile
  .personal-information
  .personal-information-form
  .el-form-item__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  padding-bottom: 0.5rem;
}

.member-profile .personal-information .personal-information-form .el-select {
  width: 100%;
}

.member-profile .personal-information .personal-information-form .el-row {
  border-bottom: 0.8px solid #e0e0e0;
}

.member-profile .personal-information .personal-information-form .el-button {
  background: #2d99a0;
  border-radius: 4px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: 1rem;
}

.member-profile
  .personal-information
  .personal-information-form
  .button-wrapper {
  text-align: end;
}
</style>
