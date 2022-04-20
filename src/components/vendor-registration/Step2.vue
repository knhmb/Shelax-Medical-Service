<template>
  <el-form
    label-position="top"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
  >
    <el-row :gutter="20">
      <el-col>
        <p>申請人資料</p>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="申請人姓名" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="輸入申請人姓名"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="出生日期" prop="dob">
          <el-input
            v-model="ruleForm.dob"
            placeholder="輸入出生日期"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="24">
        <el-form-item label="香港身份證號碼" prop="idCardNumber">
          <el-input
            v-model="ruleForm.idCardNumber"
            placeholder="輸入電郵地址"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="9">
        <el-form-item label="電郵地址" prop="email">
          <el-input
            v-model="ruleForm.email"
            placeholder="輸入電郵地址"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="6">
        <el-button class="verification-code">獲取驗證碼</el-button>
      </el-col>
      <el-col :sm="24" :md="9">
        <el-form-item label="驗證碼" prop="verificationCode">
          <el-input
            v-model="ruleForm.verificationCode"
            placeholder="輸入驗證碼"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="密碼" prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="輸入密碼"
            type="password"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-form-item label="確認密碼" prop="confirmPassword">
          <el-input
            v-model="ruleForm.confirmPassword"
            placeholder="再次輸入密碼"
            type="password"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item prop="checkbox">
          <el-checkbox
            v-model="ruleForm.checkbox"
            label="我已閱讀並同意Shelax的使用條款及隱私政策。"
          ></el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-1')" class="return"> 返回 </el-button>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button @click="nextStep('step-3')" class="next"> 下一步 </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { ElNotification } from "element-plus";

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