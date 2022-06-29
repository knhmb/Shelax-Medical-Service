<template>
  <section class="vendor-registration">
    <base-content-container>
      <base-card>
        <h3 v-if="step !== 'completed'">{{ $t("merchant_signup") }}</h3>
        <!-- <el-form label-position="top"> -->
        <!-- <el-row :gutter="20"> -->
        <step-1 @changeStep="toggleStep" v-if="step === 'step-1'"></step-1>
        <step-2 @changeStep="toggleStep" v-if="step === 'step-2'"></step-2>
        <step-3 @changeStep="toggleStep" v-if="step === 'step-3'"></step-3>
        <Completed v-if="step === 'completed'" />
        <!-- </el-row> -->
        <!-- </el-form> -->
      </base-card>
      <p class="copyright">© 2021 Shelax. All Rights Reserved.</p>
    </base-content-container>
  </section>
</template>

<script>
import Step1 from "../components/vendor-registration/Step1.vue";
import Step2 from "../components/vendor-registration/Step2.vue";
import Step3 from "../components/vendor-registration/Step3.vue";
import Completed from "../components/vendor-registration/Completed.vue";

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Completed,
  },
  data() {
    return {
      step: "step-1",
    };
  },
  methods: {
    toggleStep(step) {
      this.step = step;
    },
  },
};
</script>

<style>
.vendor-registration {
  /* background: red; */
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 0;
  min-height: calc(100vh - 60px);
  /* height: 100vh; */
}

.vendor-registration h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #7690da;
  margin-bottom: 1.5rem;
}

.vendor-registration p {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.vendor-registration .el-form .el-form-item__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.vendor-registration .el-form .el-button {
  border-radius: 4px;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  letter-spacing: 0.4px;
  margin-bottom: 0.5rem;
}

.vendor-registration .el-form .el-button.next {
  background: #7690da;
  color: #ffffff;
}

.vendor-registration .el-form .el-button.return {
  color: #7690da;
  border-color: #7690da;
}

.vendor-registration .el-form .el-button.verification-code {
  background: #2d99a0;
  border-color: #2d99a0;
  color: #fff;
  padding: 0;
  margin-top: 1.91rem;
}

.vendor-registration .el-form .el-checkbox__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a8a8a8;
  white-space: normal;
}

.vendor-registration .el-form .el-checkbox.is-checked .el-checkbox__label {
  color: #a8a8a8;
}

.vendor-registration .el-form .el-checkbox.is-checked .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.vendor-registration .copyright {
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