<template>
  <div class="order-information">
    <h3>{{ $t("customers_information") }}</h3>
    <p>{{ $t("change_in_order") }}</p>
    <el-form
      label-position="top"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
    >
      <el-row :gutter="10">
        <el-col :sm="24" :md="6">
          <el-form-item label="稱謂" prop="title">
            <el-select
              v-model="ruleForm.title"
              placeholder="選擇稱謂"
            ></el-select>
          </el-form-item>
        </el-col>

        <el-col :sm="24" :md="9">
          <el-form-item label="姓氏" prop="firstName">
            <el-input
              v-model="ruleForm.firstName"
              placeholder="請輸入姓氏"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="名字" prop="lastName">
            <el-input
              v-model="ruleForm.lastName"
              placeholder="請輸入名字"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :sm="24" :md="6">
          <el-form-item label="電話區號" prop="areaCode">
            <el-select
              v-model="ruleForm.areaCode"
              placeholder="選擇電話區號"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="電話號碼" prop="phoneNumber">
            <el-input
              v-model="ruleForm.phoneNumber"
              placeholder="請輸入電話號碼"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="電郵地址" prop="emailAddress">
            <el-input
              v-model="ruleForm.emailAddress"
              placeholder="請輸入電郵地址"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="居住國家 / 城市" prop="cityOfResidence">
            <el-select
              class="email-input"
              placeholder="請輸入電郵地址"
              v-model="ruleForm.cityOfResidence"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="24">
          <el-checkbox checked label="同時更新會員資料"></el-checkbox>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      ruleForm: {
        title: "Mr.",
        lastName: "Tai Man",
        firstName: "Chan",
        areaCode: "香港(+852)",
        phoneNumber: "6123 4567",
        emailAddress: "chantaiman@email.com",
        cityOfResidence: "香港",
      },
      rules: {
        title: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Lastname is required",
            trigger: "blur",
          },
        ],
        firstName: [
          {
            required: true,
            message: "Firstname is required",
            trigger: "blur",
          },
        ],
        areaCode: [
          {
            required: false,
            message: "Area code is required",
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: false,
            message: "Phone number is required",
            trigger: "blur",
          },
        ],
        emailAddress: [
          {
            required: false,
            type: "email",
            message: "Email is required",
            trigger: "blur",
          },
        ],
        cityOfResidence: [
          {
            required: false,
            message: "City is required",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getAccount");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getAccount");
          })
          .catch((err) => {
            ElNotification({
              title: "Error",
              message: this.$t(err.response.data.message),
              type: "error",
            });
            this.$store.dispatch("auth/logout");
          });
      });
  },
};
</script>

<style>
.shopping-cart-step-2 .left-section-cart .order-information h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #fff;
  position: relative;
  z-index: 1;
  margin: 1.5rem 0;
}

.shopping-cart-step-2 .left-section-cart .order-information h3::before {
  content: "";
  position: absolute;
  background: linear-gradient(90deg, #7690da 0%, rgba(118, 144, 218, 0) 100%);
  height: 40px;
  z-index: -1;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 70%;
}

.shopping-cart-step-2 .left-section-cart .order-information .el-form {
  margin-top: 2rem;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-form
  .el-form-item__label {
  padding-bottom: 0.5rem;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-form
  .el-select {
  width: 100%;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-checkbox__label {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #393939;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-checkbox__input.is-checked
  .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}
</style>