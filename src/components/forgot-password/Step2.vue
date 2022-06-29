<template>
  <div class="step-2">
    <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
      <el-row>
        <el-col>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              :prefix-icon="Lock"
              type="password"
              :placeholder="$t('new_password')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="confirmPassword">
            <el-input
              v-model="ruleForm.confirmPassword"
              :prefix-icon="Lock"
              type="password"
              :placeholder="$t('confirm_new_password')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-button @click="submit">{{
            $t("reset_password_button")
          }}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Lock } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("enter_password")));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleFormRef.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("confirm_new_password")));
      } else {
        if (value !== this.ruleForm.password) {
          callback(new Error(this.$t("password_does_not_match")));
        } else {
          callback();
        }
      }
    };

    return {
      Lock,
      ruleForm: {
        password: "",
        confirmPassword: "",
      },
      rules: {
        password: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            required: true,
            validator: validateConfirmPass,
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
          const data = {
            checkString: this.$route.query.value,
            newPassword: this.ruleForm.password,
          };
          console.log(data);
          this.$store
            .dispatch("auth/resetPassword", data)
            .then(() => {
              ElNotification({
                title: "Success",
                message: this.$t("password_changed_successfully"),
                type: "success",
              });
              this.$refs.ruleFormRef.resetFields();
              this.$emit("closeDialog");
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: this.$t("error_occurred"),
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
.forgot-password-section .step-2 .el-input__icon {
  font-size: 1.2rem;
}

.forgot-password-section .step-2 .el-button {
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