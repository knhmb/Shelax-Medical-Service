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
          <el-form-item :label="$t('salutation')" prop="title">
            <el-select
              @change="changed"
              v-model="ruleForm.title"
              :placeholder="$t('Mr')"
            >
              <el-option :label="$t('Mr')" :value="$t('Mr')">{{
                $t("Mr")
              }}</el-option>
              <el-option :label="$t('Mrs')" :value="$t('Mrs')">{{
                $t("Mrs")
              }}</el-option>
              <el-option :label="$t('Miss')" :value="$t('Miss')">{{
                $t("Miss")
              }}</el-option>
              <el-option :label="$t('Ms')" :value="$t('Ms')">{{
                $t("Ms")
              }}</el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :sm="24" :md="9">
          <el-form-item :label="$t('last_name')" prop="lastName">
            <el-input
              @input="changed"
              v-model="ruleForm.lastName"
              :placeholder="$t('last_name')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="名字" prop="firstName">
            <el-input
              @input="changed"
              v-model="ruleForm.firstName"
              :placeholder="$t('first_name')"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :sm="24" :md="6">
          <el-form-item :label="$t('country_code')" prop="areaCode">
            <el-select
              @change="changed"
              v-model="ruleForm.areaCode"
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
              @input="changed"
              v-model="ruleForm.phoneNumber"
              :placeholder="$t('phone_number')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item :label="$t('email_address')" prop="emailAddress">
            <el-input
              @input="changed"
              v-model="ruleForm.emailAddress"
              :placeholder="$t('email_address')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col class="place-of-residence-section" :sm="24" :md="24">
          <el-form-item :label="$t('city_of_residence')" prop="cityOfResidence">
            <el-select
              @changed="changed"
              class="email-input"
              :placeholder="$t('city_of_residence')"
              v-model="ruleForm.cityOfResidence"
            >
              <el-option
                v-for="code in countryCodes"
                :key="code.id"
                :label="code.name + '(+' + code.isd + ')'"
                :value="code.alphaThree"
              />
            </el-select>
            <el-select v-model="ruleForm.region" @change="setRegion">
              <el-option
                v-for="region in regions"
                :key="region.id"
                :label="region.name"
                :value="region.slug"
              />
            </el-select>
            <el-select @change="changed" v-model="ruleForm.district">
              <el-option
                v-for="district in specifiedDistricts"
                :key="district.id"
                :label="district.name"
                :value="district.slug"
              />
            </el-select>
            <el-input
              @input="changed"
              :placeholder="$t('address')"
              class="address"
              v-model="ruleForm.address"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="24">
          <el-checkbox
            @change="changed"
            v-model="ruleForm.updateProfile"
            :label="$t('update_user_profile')"
          ></el-checkbox>
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
        title: "",
        lastName: "",
        firstName: "",
        areaCode: "",
        phoneNumber: "",
        emailAddress: "",
        cityOfResidence: "",
        region: "",
        district: "",
        address: "",
        updateProfile: false,
      },
      rules: {
        title: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
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
            trigger: "change",
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
            trigger: "change",
          },
        ],
        region: [
          {
            required: false,
            message: "Region is required",
            trigger: "change",
          },
        ],
        district: [
          {
            required: false,
            message: "District is required",
            trigger: "change",
          },
        ],
        address: [
          {
            required: false,
            message: "Address is required",
            trigger: "blur",
          },
        ],
        updateProfile: [
          {
            required: false,
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
    countryCodes() {
      return this.$store.getters["profile/countryCodes"];
    },
    regions() {
      return this.$store.getters["search/regions"];
    },
    specifiedDistricts() {
      return this.$store.getters["order/specifiedDistricts"];
    },
  },
  methods: {
    setRegion() {
      console.log(this.ruleForm.region);
      this.$store
        .dispatch("order/getSpecifiedDistrict", this.ruleForm.region)
        .then(() => {
          this.ruleForm.district = "";
        });
      this.changed();
    },
    changed() {
      this.$emit("orderInformation", this.ruleForm);
      this.$store.commit("order/STORE_USER_DATA", this.ruleForm);
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getAccount").then(() => {
          console.log(this.userDetails);
          this.ruleForm.title = this.userDetails.salutation;
          this.ruleForm.lastName = this.userDetails.lastName;
          this.ruleForm.firstName = this.userDetails.givenName;
          this.ruleForm.areaCode = this.userDetails.phoneCode;
          this.ruleForm.emailAddress = this.userDetails.email;
          this.ruleForm.cityOfResidence = this.userDetails.placeOfResidence;
          this.ruleForm.phoneNumber = this.userDetails.phoneNo;
        });
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
    this.$store.dispatch("search/getRegions").then(() => {
      console.log(this.regions);
    });
    this.$emit("orderInformation", this.ruleForm);
    this.$store.commit("order/STORE_USER_DATA", this.ruleForm);
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

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-col.place-of-residence-section
  .el-select {
  width: 8rem;
  display: inline-block;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-col.place-of-residence-section
  .el-input.address {
  display: inline-block;
  width: 16.2rem;
}
</style>