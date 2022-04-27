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
          <el-form-item label="原始密碼" prop="oldPassword">
            <el-input
              type="password"
              v-model="ruleForm.oldPassword"
              placeholder="輸入原始密碼"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="新密碼" prop="newPassword">
            <el-input
              type="password"
              v-model="ruleForm.newPassword"
              placeholder="輸入新密碼"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="確認新密碼" prop="confirmPassword">
            <el-input
              type="password"
              v-model="ruleForm.confirmPassword"
              placeholder="再次輸入新密碼"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="button-wrapper">
        <el-button @click="submit">儲存</el-button>
      </div>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
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
            message: "請輸入原始密碼",
            trigger: "blur",
          },
        ],
        newPassword: [
          {
            required: true,
            message: "請輸入新密碼",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: "請確認新密碼",
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