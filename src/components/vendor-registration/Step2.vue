<template>
  <el-form
    label-position="top"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
  >
    <el-row :gutter="20">
      <el-col>
        <p>{{ $t("applicant_information") }}</p>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('applicant_name')" prop="name">
          <el-input
            v-model="ruleForm.name"
            :placeholder="$t('enter_applicant_name')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('dob')" prop="dob">
          <el-date-picker
            v-model="ruleForm.dob"
            :placeholder="$t('enter_dob')"
            type="date"
          ></el-date-picker>
          <!-- <el-input
            v-model="ruleForm.dob"
            :placeholder="$t('enter_dob')"
          ></el-input> -->
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="24">
        <el-form-item
          :label="$t('hong_kong_identity_card_number')"
          prop="idCardNumber"
        >
          <el-input
            v-model="ruleForm.idCardNumber"
            :placeholder="$t('enter_hong_kong_identity_card_number')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="9">
        <el-form-item :label="$t('email_address')" prop="email">
          <el-input
            v-model="ruleForm.email"
            :placeholder="$t('enter_email_address')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="6">
        <el-button @click="getVerificationCode" class="verification-code">{{
          $t("get_verification_code")
        }}</el-button>
      </el-col>
      <el-col :sm="24" :md="9">
        <el-form-item :label="$t('verification_code')" prop="verificationCode">
          <el-input
            v-model="ruleForm.verificationCode"
            :placeholder="$t('enter_verification_code')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('password')" prop="password">
          <el-input
            v-model="ruleForm.password"
            :placeholder="$t('enter_password')"
            type="password"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('confirm_password')" prop="confirmPassword">
          <el-input
            v-model="ruleForm.confirmPassword"
            :placeholder="$t('enter_confirm_password')"
            type="password"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item prop="checkbox">
          <el-checkbox
            v-model="ruleForm.checkbox"
            :label="$t('applicant_terms_and_conditions')"
          ></el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-1')" class="return">
          {{ $t("previous_button") }}
        </el-button>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-3')" class="next">{{
          $t("next_button")
        }}</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { ElNotification, ElMessage } from "element-plus";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("This field is required"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleFormRef.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("This field is required"));
      } else {
        if (value !== this.ruleForm.password) {
          callback(new Error("Password does not match"));
        } else {
          callback();
        }
      }
    };

    return {
      ruleForm: {
        name: "",
        dob: "",
        idCardNumber: "",
        email: "",
        verificationCode: "",
        password: "",
        confirmPassword: "",
        checkbox: false,
      },
      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        dob: [
          {
            type: "date",
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        idCardNumber: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        verificationCode: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
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
        checkbox: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    nextStep(value) {
      if (value === "step-1") {
        this.$emit("changeStep", { value: value, formData: {} });
        return;
      }
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.$emit("changeStep", { value: value, formData: this.ruleForm });
          console.log(this.ruleForm);
        } else {
          ElNotification({
            title: "Error",
            message: "Please fill all the fields",
            type: "error",
          });
        }
      });
    },
    getVerificationCode() {
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
  created() {
    this.$store.commit("SET_VENDOR_STEP", 1);
    console.log("my-vendor");
  },
};
</script>

<style scoped>
.el-form :deep(.el-input) {
  width: 100%;
}
</style>