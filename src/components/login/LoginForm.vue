<template>
  <div class="login-form">
    <el-form
      hide-required-asterisk
      :model="ruleForm"
      ref="ruleFormRef"
      :rules="rules"
    >
      <el-row>
        <el-col :span="24">
          <el-form-item prop="email">
            <el-input
              v-model="ruleForm.email"
              class="w-50 m-2"
              placeholder="Email"
              :prefix-icon="emailIcon"
            />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              :placeholder="$t('password')"
              :prefix-icon="passwordIcon"
              show-password
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-checkbox :label="$t('remember_me')" size="large"></el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <p class="forgot-pass">{{ $t("forgot_password") }}</p>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-button @click="login">{{ $t("menu_login") }}</el-button>
        </el-col>
      </el-row>

      <el-divider content-position="center">{{ $t("quick_login") }}</el-divider>
      <p class="divider">
        {{ $t("login_note") }}
      </p>
      <el-row :gutter="15">
        <el-col :span="12">
          <el-button type="primary">
            <img
              src="../../assets/icon-facebook@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>{{ $t("login_facebook") }}</p>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary">
            <img
              src="../../assets/icon-google@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>{{ $t("login_google") }}</p>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary">
            <img
              src="../../assets/icon-wechat@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>{{ $t("login_wechat") }}</p>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary">
            <img
              src="../../assets/icon-apple@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>{{ $t("login_apple") }}</p>
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <p class="login">
            {{ $t("dont_have_account") }}
            <span @click="changeAuthOption" class="login-link">{{
              $t("signup_now")
            }}</span>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Message, Lock } from "@element-plus/icons-vue";

export default {
  // props: ["authOption"],
  emits: ["authChanged"],
  data() {
    return {
      emailIcon: Message,
      passwordIcon: Lock,
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("password"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    changeAuthOption() {
      this.$emit("authChanged", {
        changedAuthOption: "register",
        authTitle: "註冊",
      });
    },
    login() {
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
  font-size: 12px;
}

.login-form .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.login-form .el-button {
  width: 100%;
  background-color: #7690da;
  color: #fff;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
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
  margin-top: 1rem;
}

.login-form .el-button.el-button--primary p {
  color: #6f6f6f;
  margin: 0;
  margin-top: 0.5rem;
  white-space: normal;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  /* font-size: 14px; */
  line-height: 20px;
  letter-spacing: 0.1px;
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
  cursor: pointer;
}
.login-form .forgot-pass:hover {
  text-decoration: underline;
}

.login-form .divider {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #a8a8a8;
  font-size: 12px;
}
</style>