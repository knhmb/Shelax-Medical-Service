<template>
  <div class="register-form">
    <el-form
      hide-required-asterisk
      :model="ruleForm"
      ref="ruleFormRef"
      :rules="rules"
    >
      <el-row :gutter="10">
        <el-col :span="17">
          <el-form-item prop="email">
            <el-input
              v-model="ruleForm.email"
              class="w-50 m-2"
              :placeholder="$t('enter_email_address')"
              :prefix-icon="emailIcon"
            />
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-button @click="sendVerificationCode" class="verification-code">{{
            $t("get_verification_code")
          }}</el-button>
        </el-col>

        <el-col :span="24">
          <el-form-item prop="verificationCode">
            <el-input
              v-model="ruleForm.verificationCode"
              :placeholder="$t('enter_verification_code')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              :placeholder="$t('enter_password')"
              :prefix-icon="passwordIcon"
              show-password
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item prop="confirmPassword">
            <el-input
              v-model="ruleForm.confirmPassword"
              type="password"
              :placeholder="$t('enter_confirm_password')"
              :prefix-icon="passwordIcon"
              show-password
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item prop="promotions">
            <el-checkbox
              v-model="ruleForm.promotions"
              :label="$t('get_latest_offers')"
              size="large"
            ></el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-button @click="submit">{{ $t("menu_register") }}</el-button>
        </el-col>
      </el-row>

      <el-divider content-position="center">{{ $t("quick_login") }}</el-divider>
      <p>{{ $t("third_party_login") }}</p>
      <el-row :gutter="15">
        <el-col :span="12">
          <el-button @click="logInWithFacebook" type="primary">
            <img
              src="../../assets/icon-facebook@2x.png"
              style="width: 24px"
              alt=""
            />
            <p>{{ $t("login_facebook") }}</p>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="registerWithGoogle" type="primary">
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
          <el-button @click="appleLogin" type="primary">
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
          <p class="register">
            {{ $t("already_have_an_account") }}?
            <span @click="changeAuthOption" class="register-link">{{
              $t("menu_login")
            }}</span>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Message, Lock } from "@element-plus/icons-vue";
import { ElMessage, ElNotification } from "element-plus";
import { googleTokenLogin } from "vue3-google-login";
// import initiFacebookSdk from "../../plugins/initi-facebook-sdk";

export default {
  // props: ["authOption"],
  emits: ["authChanged"],
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("要求輸入密碼"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleFormRef.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("請重新輸入密碼"));
      } else {
        if (value !== this.ruleForm.password) {
          callback(new Error("密碼不匹配"));
        } else {
          callback();
        }
      }
    };

    return {
      emailIcon: Message,
      passwordIcon: Lock,
      ruleForm: {
        email: "",
        password: "",
        verificationCode: "",
        confirmPassword: "",
        promotions: false,
      },
      rules: {
        email: [
          {
            required: true,
            message: "輸入電郵地址",
            trigger: "blur",
            type: "email",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePass,
          },
        ],
        confirmPassword: [
          {
            required: true,
            trigger: "blur",
            validator: validateConfirmPass,
          },
        ],
        verificationCode: [
          {
            required: true,
            message: "輸入驗證碼",
            trigger: "blur",
          },
        ],
        promotions: [
          {
            required: false,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    changeAuthOption() {
      this.$emit("authChanged", {
        changedAuthOption: "login",
        authTitle: "登入",
      });
    },
    registerWithGoogle() {
      googleTokenLogin().then((response) => {
        console.log("Handle the response", response);
        this.$store.dispatch("auth/googleLogin", response).then(() => {
          this.$emit("closeDialog");
        });
      });
    },
    async appleLogin() {
      try {
        const data = await window.AppleID.auth.signIn();
        console.log(data);
        this.$store
          .dispatch("auth/appleLogin", {
            id_token: data.authorization.id_token,
          })
          .then(() => {
            this.$emit("closeDialog");
          });
      } catch (err) {
        console.log(err);
      }
    },
    async logInWithFacebook() {
      // await initiFacebookSdk.logInWithFacebook().then(() => {
      //   this.$emit("closeDialog");
      // });
      // await initFacebookSdk().then(() => {
      //   this.$emit("closeDialog");
      // });
    },
    savedData() {
      const data = {
        email: this.ruleForm.email,
        otp: this.ruleForm.verificationCode,
        password: this.ruleForm.password,
        isAgreeRecvPromo: this.ruleForm.promotions,
        memberRegistration: true,
      };
      console.log(data);
      this.$store
        .dispatch("auth/register", data)
        .then(() => {
          this.$refs.ruleFormRef.resetFields();
          this.$emit("closeDialog");
          ElNotification({
            title: "Success",
            message: this.$t("register_successful"),
            type: "success",
          });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
      // .then(() => {
      //   this.$refs.ruleFormRef.resetFields();
      //   this.$emit("closeDialog");
      //   ElNotification({
      //     title: "Success",
      //     message: this.$t("register_successful"),
      //     type: "success",
      //   });
      // })
      // .catch(() => {
      //   ElNotification({
      //     title: "Error",
      //     message: this.$t("register_unsuccessful"),
      //     type: "error",
      //   });
      // });
    },
    async submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.savedData();
        }
      });
    },
    sendVerificationCode() {
      this.$refs.ruleFormRef.validateField("email", (valid) => {
        if (valid) {
          ElMessage.error(this.$t("enter_email"));
        } else {
          this.$store
            .dispatch("auth/receiveOtp", this.ruleForm.email)
            .then(() => {
              ElMessage.success(this.$t("code_sent"));
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: this.$t("account_exists"),
                type: "error",
              });
            });
        }
      });
    },
  },
};
</script>

<style>
.register-form .el-input .el-input__inner:focus {
  border-color: #7690da;
}

.register-form
  .el-input
  .el-input__inner:focus
  + .el-input__prefix
  .el-input__prefix-inner
  .el-input__icon.el-icon {
  color: #7690da;
}
.register-form .el-checkbox .el-checkbox__label {
  white-space: normal;
  color: #a8a8a8;
  line-height: 18px;
  font-size: 12px;
}

.register-form .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.register-form .el-button {
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

.register-form .el-button:hover {
  background-color: #7691dae7;
}

.register-form .el-divider.el-divider--horizontal {
  border-top-color: #a8a8a8;
  margin-top: 2rem;
}

.register-form .el-divider.el-divider--horizontal .el-divider__text {
  color: #a8a8a8;
  padding: 0 0.5rem;
}

.register-form p {
  color: #a8a8a8;
  font-size: 12px;
}

.register-form .el-button.el-button--primary {
  background-color: #fff;
  border-color: #eee;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #6f6f6f;
  margin-top: 1rem;
}

.register-form .el-button.el-button--primary p {
  color: #6f6f6f;
  margin: 0;
  margin-top: 0.5rem;
  white-space: normal;
}

.register-form .register {
  font-size: 14px;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0;
}

.register-form .register-link {
  color: #7690da;
  cursor: pointer;
}

.register-form .register-link:hover {
  text-decoration: underline;
}

.register-form .el-button.verification-code {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #ffffff;
  background: #2d99a0;
  border-radius: 4px;
  padding: 0.6rem;
  white-space: normal;
}

.register-form .el-icon.el-input__icon {
  font-size: 1.1rem;
}
</style>