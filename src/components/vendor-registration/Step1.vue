<template>
  <el-form
    label-position="top"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
  >
    <el-row :gutter="20">
      <el-col>
        <p>{{ $t("company_information") }}</p>
      </el-col>
      <el-col>
        <el-form-item :label="$t('company_name')" prop="companyName">
          <el-input
            v-model="ruleForm.companyName"
            :placeholder="$t('enter_company_name')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('company_contact_person')" prop="contactName">
          <el-input
            v-model="ruleForm.contactName"
            :placeholder="$t('enter_company_contact_person')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('company_phone_number')" prop="companyPhone">
          <el-input
            v-model="ruleForm.companyPhone"
            :placeholder="$t('enter_company_phone_number')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="24">
        <el-form-item :label="$t('company_address')" prop="companyAddress">
          <el-input
            v-model="ruleForm.companyAddress"
            :placeholder="$t('enter_company_address')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('bank_name')" prop="bankName">
          <el-input
            v-model="ruleForm.bankName"
            :placeholder="$t('enter_bank_name')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item :label="$t('bank_number')" prop="bankNumber">
          <el-input
            v-model="ruleForm.bankNumber"
            :placeholder="$t('enter_bank_address')"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button class="return"> {{ $t("previous_button") }} </el-button>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-2')" class="next">
          {{ $t("next_button") }}
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      ruleForm: {
        companyName: "",
        contactName: "",
        companyPhone: "",
        companyAddress: "",
        bankName: "",
        bankNumber: "",
      },
      rules: {
        companyName: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        contactName: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        companyPhone: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        companyAddress: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        bankName: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        bankNumber: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    nextStep(value) {
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
  },
  created() {
    this.$store.commit("SET_VENDOR_STEP", 0);
  },
};
</script>