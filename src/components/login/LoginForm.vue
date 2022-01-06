<template>
  <div class="login-form">
    <el-form>
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-input
              class="w-50 m-2"
              placeholder="Email"
              :prefix-icon="emailIcon"
            />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item>
            <el-input
              type="password"
              placeholder="密碼"
              :prefix-icon="passwordIcon"
              show-password
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-checkbox label="記住我" size="large"></el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <p class="forgot-pass">忘記密碼?</p>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-button>登入</el-button>
        </el-col>
      </el-row>

      <el-divider content-position="center">或快速登入</el-divider>
      <p>
        如以未登記的電話號碼或第三方帳戶登入，將自動為你建立一個新的Shelax 帳戶
      </p>
      <el-row :gutter="15">
        <el-col :span="12">
          <el-button type="primary">
            <img
              src="../../assets/icon-facebook@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>使用 Facebook 登入</p>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary">
            <img
              src="../../assets/icon-google@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>使用 Facebook 登入</p>
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <p class="login">
            未有Shelax帳號?
            <span @click="changeAuthOption" class="login-link">現在註冊</span>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Message, Lock } from "@element-plus/icons-vue";

export default {
  props: ["authOption"],
  emits: ["authChanged"],
  data() {
    return {
      emailIcon: Message,
      passwordIcon: Lock,
    };
  },
  methods: {
    changeAuthOption() {
      this.$emit("authChanged", {
        changedAuthOption: "register",
        authTitle: "註冊",
      });
    },
  },
};
</script>

<style>
.login-form .el-input .el-input__inner:focus {
  border-color: #7690da;
}

.login-form
  .el-input
  .el-input__inner:focus
  + .el-input__prefix
  .el-input__prefix-inner
  .el-input__icon.el-icon {
  color: #7690da;
}
.login-form .el-checkbox .el-checkbox__label {
  white-space: normal;
  color: #a8a8a8;
  line-height: 18px;
}

.login-form .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.login-form .el-button {
  width: 100%;
  background-color: #7690da;
  color: #fff;
}

.login-form .el-button:hover {
  background-color: #7691dae7;
}

.login-form .el-divider.el-divider--horizontal {
  border-top-color: #a8a8a8;
  margin-top: 2rem;
}

.login-form .el-divider.el-divider--horizontal .el-divider__text {
  color: #a8a8a8;
  padding: 0 0.5rem;
}

.login-form p {
  color: #a8a8a8;
  font-size: 12px;
}

.login-form .el-button.el-button--primary {
  background-color: #fff;
  border-color: #eee;
}

.login-form .el-button.el-button--primary p {
  color: #6f6f6f;
  margin: 0;
  margin-top: 0.5rem;
  white-space: normal;
}

.login-form .login {
  font-size: 14px;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0;
}

.login-form .login-link {
  color: #7690da;
  cursor: pointer;
}

.login-form .login-link:hover {
  text-decoration: underline;
}

.login-form .forgot-pass {
  text-align: end;
  font-size: 14px;
  margin: 0;
  margin-top: 0.6rem;
}
</style>