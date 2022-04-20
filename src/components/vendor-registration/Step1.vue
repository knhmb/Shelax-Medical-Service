<template>
  <el-form
    label-position="top"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
  >
    <el-row :gutter="20">
      <el-col>
        <p>公司資料</p>
      </el-col>
      <el-col>
        <el-form-item label="公司名稱" prop="companyName">
          <el-input
            v-model="ruleForm.companyName"
            placeholder="輸入公司名稱"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="公司聯絡人姓名" prop="contactName">
          <el-input
            v-model="ruleForm.contactName"
            placeholder="輸入公司聯絡人姓名"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="公司電話" prop="companyPhone">
          <el-input
            v-model="ruleForm.companyPhone"
            placeholder="輸入公司電話"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="24">
        <el-form-item label="公司地址" prop="companyAddress">
          <el-input
            v-model="ruleForm.companyAddress"
            placeholder="輸入公司地址"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="銀行名稱" prop="bankName">
          <el-input
            v-model="ruleForm.bankName"
            placeholder="輸入銀行名稱"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="銀行號碼" prop="bankNumber">
          <el-input
            v-model="ruleForm.bankNumber"
            placeholder="輸入銀行號碼"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button class="return"> 返回 </el-button>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-2')" class="next"> 下一步 </el-button>
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
          this.$emit("changeStep", value);
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
};
</script>