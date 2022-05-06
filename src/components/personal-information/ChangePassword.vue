<template>
  <section class="profile-change-password">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <el-row>
        <el-col>
          <el-form-item :label="$t('original_password')" prop="oldPassword">
            <el-input
              type="password"
              v-model="ruleForm.oldPassword"
              :placeholder="$t('original_password')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item :label="$t('new_password')" prop="newPassword">
            <el-input
              type="password"
              v-model="ruleForm.newPassword"
              :placeholder="$t('new_password')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item
            :label="$t('confirm_new_password')"
            prop="confirmPassword"
          >
            <el-input
              type="password"
              v-model="ruleForm.confirmPassword"
              :placeholder="$t('confirm_new_password')"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="button-wrapper">
        <el-button @click="submit">{{ $t("update_button") }}</el-button>
      </div>
    </el-form>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("password_required")));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleFormRef.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("confirm_password_required")));
      } else {
        if (value !== this.ruleForm.newPassword) {
          callback(new Error(this.$t("password_does_not_match")));
        } else {
          callback();
        }
      }
    };

    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: this.$t("old_password_required"),
            trigger: "blur",
          },
        ],
        newPassword: [
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
      },
    };
  },
  methods: {
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/checkAccessToken")
            .then(() => {
              this.changePassword();
            })
            .catch(() => {
              this.checkRefreshToken();
            });
        }
      });
    },
    checkRefreshToken() {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.changePassword();
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
          this.$router.replace("/");
        });
    },
    changePassword() {
      const data = {
        oldPassword: this.ruleForm.oldPassword,
        newPassword: this.ruleForm.newPassword,
      };
      console.log(data);

      this.$store
        .dispatch("profile/profileChangePassword", data)
        .then(() => {
          ElNotification({
            title: "Success",
            message: this.$t("password_changed"),
            type: "success",
          });
          this.$refs.ruleFormRef.resetFields();
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
  },
};
</script>

<style>
.member-profile
  .personal-information
  .profile-change-password
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

.member-profile .personal-information .profile-change-password .el-select {
  width: 100%;
}

.member-profile .personal-information .profile-change-password .el-row {
  border-bottom: 0.8px solid #e0e0e0;
}

.member-profile .personal-information .profile-change-password .el-button {
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

.member-profile .personal-information .profile-change-password .button-wrapper {
  text-align: end;
}
</style>