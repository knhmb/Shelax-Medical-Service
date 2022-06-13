<template>
  <div class="form-content">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <template v-for="(item, index) in ruleForm.dynamicItem" :key="index">
        <div
          class="dynamic-form"
          v-if="singleItemDetail.itemType === 'service'"
        >
          <p>{{ $t("information_of_service_user", { index: index + 1 }) }}</p>
          <el-row :gutter="10">
            <el-col>
              <el-form-item :label="$t('select_members')">
                <el-select
                  v-model="item.avatarSelect"
                  class="avatar"
                  :placeholder="$t('select_a_member')"
                  size="large"
                >
                  <el-option
                    v-for="user in serviceUsers"
                    :key="user"
                    :label="user"
                  ></el-option>
                </el-select>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                />
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="6">
              <el-form-item :label="$t('salutation')" prop="title">
                <el-select v-model="item.title" :placeholder="$t('Mr')">
                  <el-option label="先生" value="先生">先生</el-option>
                  <el-option label="太太" value="太太">太太</el-option>
                  <el-option label="小姐" value="小姐">小姐</el-option>
                  <el-option label="女士" value="女士">女士</el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :sm="24" :md="9">
              <el-form-item :label="$t('last_name')" prop="lastName">
                <el-input
                  v-model="item.firstName"
                  :placeholder="$t('last_name')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="9">
              <el-form-item :label="$t('first_name')" prop="firstName">
                <el-input
                  v-model="item.lastName"
                  :placeholder="$t('first_name')"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :sm="24" :md="6">
              <el-form-item :label="$t('country_code')" prop="areaCode">
                <el-select
                  v-model="item.areaCode"
                  :placeholder="$t('country_code')"
                >
                  <el-option
                    v-for="code in countryCodes"
                    :key="code.id"
                    :label="code.name + '(+' + code.isd + ')'"
                    :value="code.alphaThree"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="9">
              <el-form-item :label="$t('phone_number')" prop="phoneNumber">
                <el-input
                  v-model="item.phoneNumber"
                  :placeholder="$t('phone_number')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="9">
              <el-form-item :label="$t('email_address')" prop="emailAddress">
                <el-input
                  v-model="item.emailAddress"
                  :placeholder="$t('email_address')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="12">
              <el-form-item
                :label="$t('city_of_residence')"
                prop="cityOfResidence"
              >
                <el-input
                  v-model="item.cityOfResidence"
                  class="email-input"
                  :placeholder="$t('city_of_residence')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="12">
              <div class="form-btn">
                <el-form-item>
                  <el-button @click="addItem" :icon="Plus">{{
                    $t("add_service_user")
                  }}</el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="other-information">
          <p>{{ $t("other_information") }}</p>
          <el-row>
            <el-col>
              <el-form-item :label="$t('any_requests')">
                <el-input
                  rows="3"
                  :placeholder="$t('enter_a request')"
                  type="textarea"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </template>
    </el-form>
  </div>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";
export default {
  props: ["quantity"],
  data() {
    return {
      Plus,
      otherInformation: "請輸入",
      ruleForm: {
        avatarSelect: "",
        title: "",
        lastName: "",
        firstName: "",
        areaCode: "",
        phoneNumber: "",
        emailAddress: "",
        cityOfResidence: "",
        dynamicItem: [
          // {
          //   avatarSelect: "Chan Tai Man",
          //   title: "Mr.",
          //   lastName: "Tai Man",
          //   firstName: "Chan",
          //   areaCode: "香港(+852)",
          //   phoneNumber: "6123 4567",
          //   emailAddress: "chantaiman@email.com",
          //   cityOfResidence: "香港",
          // },
        ],
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
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    serviceUsers() {
      return this.$store.getters["profile/serviceUsers"];
    },
    countryCodes() {
      return this.$store.getters["profile/countryCodes"];
    },
  },
  methods: {
    addItem() {
      this.ruleForm.dynamicItem.push({
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
  created() {
    console.log(this.singleItemDetail);
    console.log(this.orderItem);
    this.$store.dispatch("profile/getServiceUsers").then(() => {
      const user = {
        avatarSelect: this.serviceUsers.givenName,
        title: this.serviceUsers.salutation,
        lastName: this.serviceUsers.lastName,
        firstName: this.serviceUsers.givenName,
        areaCode: this.serviceUsers.phoneCode,
        phoneNumber: this.serviceUsers.phoneNo,
        emailAddress: this.serviceUsers.email,
        cityOfResidence: this.serviceUsers.placeOfResidence,
      };
      this.ruleForm.dynamicItem.push(user);
    });
    console.log(this.ruleForm.dynamicItem);
    this.$store.dispatch("profile/getCountryCode");
    for (let i = 1; i < this.quantity; i++) {
      this.ruleForm.dynamicItem.push({
        avatarSelect: "",
        title: "",
        lastName: "",
        firstName: "",
        areaCode: "",
        phoneNumber: "",
        emailAddress: "",
        cityOfResidence: "",
      });
    }
    console.log(this.serviceUsers);
  },
};
</script>

<style>
.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  .el-input
  .el-input__inner::placeholder {
  color: #c0c4cc;
}

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
  .el-select.avatar {
  width: 50%;
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
  .el-select {
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

@media screen and (max-width: 650px) {
  .shopping-cart-step-2
    .left-section-cart
    .shopping-cart-form
    .form-content
    .el-select.avatar {
    width: 100%;
  }
}
</style>