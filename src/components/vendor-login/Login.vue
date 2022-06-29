<template>
  <el-form label-position="top">
    <el-row :gutter="20">
      <el-col :span="12">
        <h3>{{ $t("merchant_login") }}</h3>
      </el-col>
      <el-col :span="12">
        <p
          @click="$router.push('/vendor-registration')"
          class="merchant-registration"
        >
          {{ $t("merchant_signup") }}
        </p>
      </el-col>
      <el-col>
        <el-form-item :label="$t('sign_in')">
          <el-input
            v-model="email"
            :placeholder="$t('enter_email_address')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item :label="$t('password')">
          <el-input
            v-model="password"
            :type="inputType"
            :placeholder="$t('enter_password')"
          ></el-input>
          <img @click="togglePasswordVisibility" :src="passwordIcon" alt="" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-checkbox :label="$t('remember_me')"></el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <p
            @click="$router.push('/vendor-forgot-password')"
            class="forgot-password"
          >
            {{ $t("forgot_password") }}
          </p>
        </el-form-item>
      </el-col>
      <el-col>
        <el-button>{{ $t("menu_login") }}</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      passwordIcon: require("../../assets/icon-eye-off@2x.png"),
      inputType: "password",
      email: "",
      password: "",
    };
  },
  methods: {
    togglePasswordVisibility() {
      if (this.passwordIcon === require("../../assets/icon-eye-off@2x.png")) {
        this.passwordIcon = require("../../assets/icon-eye-on@2x.png");
        this.inputType = "text";
      } else {
        this.passwordIcon = require("../../assets/icon-eye-off@2x.png");
        this.inputType = "password";
      }
    },
  },
};
</script>

<style scoped>
.el-row {
  align-items: center;
}

.merchant-registration {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #7690da;
  text-align: end;
  cursor: pointer;
}

.merchant-registration:hover {
  text-decoration: underline;
}

.el-input {
  position: relative;
}

img {
  position: absolute;
  right: 0.5rem;
  width: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.forgot-password {
  text-align: end;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #393939;
  cursor: pointer;
  /* margin-top: 0.58rem; */
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>