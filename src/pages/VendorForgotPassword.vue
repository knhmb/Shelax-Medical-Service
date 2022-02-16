<template>
  <section class="vendor-forgot-password">
    <base-content-container>
      <base-card>
        <forgot-password
          @changeStep="switchStep"
          v-if="step === 1"
        ></forgot-password>
        <forgot-password-2 v-else-if="step === 2"></forgot-password-2>
      </base-card>
      <p class="copyright">© 2021 Shelax. All Rights Reserved.</p>
    </base-content-container>
  </section>
</template>

<script>
import ForgotPassword from "../components/vendor-forgot-password/ForgotPassword.vue";
import ForgotPassword2 from "../components/vendor-forgot-password/ForgotPassword2.vue";

export default {
  components: {
    ForgotPassword,
    ForgotPassword2,
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    switchStep(step) {
      this.step = step;
    },
  },
};
</script>

<style>
.vendor-forgot-password {
  background: blue;
  padding: 2rem 0;
  min-height: calc(100vh - 60px);
}

.vendor-forgot-password h3 {
  margin-bottom: 1.5rem;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
}

.vendor-forgot-password p {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #a8a8a8;
  margin-bottom: 1rem;
}

.vendor-forgot-password .el-form .el-button {
  border-radius: 4px;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  letter-spacing: 0.4px;
  margin-top: 1rem;
  background: #7690da;
  color: #ffffff;
}

.vendor-forgot-password .el-form .el-input {
  margin-bottom: 1rem;
}

.vendor-forgot-password .el-form .el-input .el-icon.el-input__icon {
  font-size: 25px;
}

.vendor-forgot-password .copyright {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #ffffff;
  text-align: center;
  margin-top: 3rem;
  /* vertical-align: ; */
}
</style>