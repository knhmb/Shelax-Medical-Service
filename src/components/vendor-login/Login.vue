<template>
  <el-form label-position="top">
    <el-row :gutter="20">
      <el-col :span="12">
        <h3>商戶登入</h3>
      </el-col>
      <el-col :span="12">
        <p class="merchant-registration">商戶註冊</p>
      </el-col>
      <el-col>
        <el-form-item label="登入帳號">
          <el-input
            v-model="email"
            placeholder="輸入電郵地址或電話號碼"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item label="密碼">
          <el-input
            v-model="password"
            :type="inputType"
            placeholder="輸入密碼"
          ></el-input>
          <img @click="togglePasswordVisibility" :src="passwordIcon" alt="" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-checkbox label="記住我"></el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <p class="forgot-password">忘記密碼?</p>
        </el-form-item>
      </el-col>
      <el-col>
        <el-button>登入</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      passwordIcon: require("../../assets/icon-eye-off@2x.png"),
      inputType: "password",
      email: "",
      password: "",
    };
  },
  methods: {
    togglePasswordVisibility() {
      if (this.passwordIcon === require("../../assets/icon-eye-off@2x.png")) {
        this.passwordIcon = require("../../assets/icon-eye-on@2x.png");
        this.inputType = "text";
      } else {
        this.passwordIcon = require("../../assets/icon-eye-off@2x.png");
        this.inputType = "password";
      }
    },
  },
};
</script>

<style scoped>
.el-row {
  align-items: center;
}

.merchant-registration {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #7690da;
  text-align: end;
  cursor: pointer;
}

.merchant-registration:hover {
  text-decoration: underline;
}

.el-input {
  position: relative;
}

img {
  position: absolute;
  right: 0.5rem;
  width: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.forgot-password {
  text-align: end;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #393939;
  /* margin-top: 0.58rem; */
}
</style>