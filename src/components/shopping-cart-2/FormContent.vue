<template>
  <div class="form-content">
    <el-form ref="form" :model="form" label-position="top">
      <div
        class="dynamic-form"
        v-for="(item, index) in form.dynamicItem"
        :key="index"
      >
        <p>參加成員{{ index + 1 }} 資料</p>
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="選擇常用成員(如有)">
              <el-select
                v-model="item.avatarSelect"
                class="avatar"
                placeholder="Chan Tai Man"
                size="large"
              >
              </el-select>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="稱謂">
              <el-select
                v-model="item.title"
                placeholder="選擇稱謂"
              ></el-select>
            </el-form-item>
          </el-col>

          <el-col :span="9">
            <el-form-item label="姓氏">
              <el-input
                v-model="item.lastName"
                placeholder="請輸入姓氏"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="名字">
              <el-input
                v-model="item.firstName"
                placeholder="請輸入名字"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="電話區號">
              <el-select
                v-model="item.areaCode"
                placeholder="選擇電話區號"
              ></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="電話號碼">
              <el-input
                v-model="item.phoneNumber"
                placeholder="請輸入電話號碼"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="電郵地址">
              <el-input
                v-model="item.emailAddress"
                placeholder="請輸入電郵地址"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="居住國家 / 城市">
              <el-select
                v-model="item.cityOfResidence"
                class="email-input"
                placeholder="請輸入電郵地址"
              ></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div class="form-btn">
              <el-form-item>
                <el-button @click="addItem" :icon="Plus"
                  >新增為常用成員</el-button
                >
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="other-information">
        <p>其他資料</p>
        <el-row>
          <el-col>
            <el-form-item label="如有任何特別要求, 請在下方輸入">
              <el-input
                rows="3"
                placeholder="請輸入"
                type="textarea"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      Plus,
      otherInformation: "請輸入",
      form: {
        name: "",
        phone: "",
        avatarSelect: "",
        title: "",
        lastName: "",
        firstName: "",
        areaCode: "",
        phoneNumber: "",
        emailAddress: "",
        cityOfResidence: "",
        dynamicItem: [
          {
            name: "",
            phone: "",
            avatarSelect: "",
            title: "",
            lastName: "",
            firstName: "",
            areaCode: "",
            phoneNumber: "",
            emailAddress: "",
            cityOfResidence: "",
          },
        ],
      },
    };
  },
  methods: {
    addItem() {
      this.form.dynamicItem.push({
        name: "",
        phone: "",
        avatarSelect: "",
        title: "",
        lastName: "",
        firstName: "",
        areaCode: "",
        phoneNumber: "",
        emailAddress: "",
        cityOfResidence: "",
      });
    },
  },
};
</script>

<style>
.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  p {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #4e68b2;
  margin-bottom: 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select.avatar
  .el-input__inner {
  background-color: #f4f4f4;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 24px 48px;
  position: relative;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select
  .el-input__inner::placeholder {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart-step-2 .left-section-cart .shopping-cart-form .form-content img {
  position: absolute;
  width: 35px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
  margin-left: 0.5rem;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
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
  .shopping-cart-form
  .form-content
  .form-btn {
  text-align: right;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-button {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #2d99a0;
  border-color: #2d99a0;
  margin-top: 1.8rem;
  padding: 0 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select
  .el-input__inner {
  background: #fff;
  padding: 0 15px;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select.email-input {
  width: 100%;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-form
  .dynamic-form {
  border-bottom: 0.8px solid #e0e0e0;
  margin-top: 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  .other-information {
  margin-top: 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  .other-information
  p {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 2rem;
}
</style>