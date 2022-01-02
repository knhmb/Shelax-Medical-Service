<template>
  <div class="register-form">
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
        <el-col>
          <el-form-item>
            <el-checkbox
              label="是的！我願意接收有關Shelax的最新優惠及其他資訊，並了解我可以隨時取消訂閱。"
              size="large"
            ></el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-button>註冊</el-button>
        </el-col>
      </el-row>

      <el-divider content-position="center">或快速登入</el-divider>
      <p>如以已登記的電話號碼或第三方帳戶登記，將自動登入你的Shelax帳戶</p>
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
          <p class="register">
            已有Shelax帳號? <span class="register-link">登入</span>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Message, Lock } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      emailIcon: Message,
      passwordIcon: Lock,
      dummy: '<font-awesome-icon icon="eye-slash" />',
    };
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
}

.register-form .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.register-form .el-button {
  width: 100%;
  background-color: #7690da;
  color: #fff;
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
}

.register-form .el-button.el-button--primary p {
  color: #6f6f6f;
  margin: 0;
  margin-top: 0.5rem;
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
</style>