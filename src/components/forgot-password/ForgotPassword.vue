<template>
  <section class="forgot-password-section">
    <div class="first-step" v-if="!isStepOneCompleted">
      <p>{{ $t("forgot_password_text") }}</p>
      <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
        <el-form-item prop="email">
          <el-input
            :placeholder="$t('email_address')"
            :prefix-icon="Message"
            v-model="ruleForm.email"
          ></el-input>
        </el-form-item>
        <el-button @click="send">{{ $t("forgot_password_button") }}</el-button>
      </el-form>
    </div>
    <div class="second-step" v-else>
      <step-2 @closeDialog="$emit('closeDialog')"></step-2>
    </div>
  </section>
</template>

<script>
import { Message } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import Step2 from "./Step2.vue";

export default {
  components: {
    Step2,
  },
  data() {
    return {
      Message,
      isStepOneCompleted: false,
      ruleForm: {
        email: "",
      },
      rules: {
        email: [
          {
            required: true,
            type: "email",
            message: this.$t("enter_email"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  // computed: {
  //   isStepOneCompleted() {
  //     return this.$store.getters.isStepOneCompleted;
  //   },
  // },
  methods: {
    send() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/forgetPassword", this.ruleForm.email)
            .then(() => {
              ElNotification({
                title: "Success",
                message: this.$t("forgot_password_success"),
                type: "success",
              });
              // this.isStepOneCompleted = true;
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: this.$t("invalid_email"),
                type: "error",
              });
            });
        }
      });
    },
  },
  created() {
    if (this.$route.path === "/reset-password") {
      this.isStepOneCompleted = true;
    }
  },
};
</script>

<style>
.forgot-password-section p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #a8a8a8;
  margin-bottom: 1rem;
}

.forgot-password-section .el-input__icon {
  font-size: 1.2rem;
}

.forgot-password-section .el-button {
  background: linear-gradient(
      269.19deg,
      rgba(143, 0, 255, 0.4) 0%,
      rgba(143, 0, 255, 0) 100%
    ),
    #7690da;
  border-radius: 4px;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
  width: 100%;
}
</style>