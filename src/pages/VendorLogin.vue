<template>
  <section class="vendor-login">
    <base-content-container>
      <base-card>
        <Login />
      </base-card>
      <p class="copyright">© 2021 Shelax. All Rights Reserved.</p>
    </base-content-container>
  </section>
</template>

<script>
import Login from "../components/vendor-login/Login.vue";

export default {
  components: {
    Login,
  },
};
</script>

<style>
.vendor-login {
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 0;
  height: 100%;
}

.vendor-login h3 {
  color: #7690da;
  margin-bottom: 1.5rem;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
}

.vendor-login p {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.vendor-login .el-form .el-form-item__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.vendor-login .el-form .el-button {
  border-radius: 4px;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  letter-spacing: 0.4px;
  margin-bottom: 0.5rem;
  background: #7690da;
  color: #ffffff;
}

.vendor-login .el-form .el-button.verification-code {
  background: #2d99a0;
  border-color: #2d99a0;
  color: #fff;
  padding: 0;
  margin-top: 1.91rem;
}

.vendor-login .el-form .el-checkbox__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a8a8a8;
  white-space: normal;
}

.vendor-login .el-form .el-checkbox.is-checked .el-checkbox__label {
  color: #a8a8a8;
}

.vendor-login .el-form .el-checkbox.is-checked .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.vendor-login .copyright {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #ffffff;
  text-align: center;
  margin-top: 3rem;
}
</style>