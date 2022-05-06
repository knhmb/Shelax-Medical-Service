<template>
  <div class="personal-information-form">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <el-row :gutter="20">
        <el-col :sm="24" :md="6">
          <el-form-item :label="$t('title')" prop="title">
            <el-select v-model="ruleForm.title" :placeholder="$t('Mr')">
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
              v-model="ruleForm.lastName"
              :placeholder="$t('last_name')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item :label="$t('first_name')" prop="firstName">
            <el-input
              v-model="ruleForm.firstName"
              :placeholder="$t('first_name')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="6">
          <el-form-item :label="$t('country_code')" prop="phoneAreaCode">
            <el-select
              v-model="ruleForm.phoneAreaCode"
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
              v-model="ruleForm.phoneNumber"
              :placeholder="$t('phone_number')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item :label="$t('email_address')" prop="email">
            <el-input
              v-model="ruleForm.email"
              :placeholder="$t('email_address')"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item :label="$t('city_of_residence')" prop="country">
            <el-select
              v-model="ruleForm.country"
              :placeholder="$t('city_of_residence')"
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
      </el-row>
      <div class="button-wrapper">
        <el-button @click="submit">{{ $t("save_button") }}</el-button>
      </div>
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
        phoneAreaCode: "",
        phoneNumber: "",
        email: "",
        country: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "請輸入姓氏",
            trigger: "change",
          },
        ],
        lastName: [
          {
            required: true,
            message: "請輸入姓氏",
            trigger: "blur",
          },
        ],
        firstName: [
          {
            required: true,
            message: "請輸入名字",
            trigger: "blur",
          },
        ],
        phoneAreaCode: [
          {
            required: true,
            message: "請輸入電話區號",
            trigger: "change",
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: "請輸入電話號碼",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "請輸入電郵地址",
            type: "email",
            trigger: "blur",
          },
        ],
        country: [
          {
            required: true,
            message: "請選擇居住國家/城市",
            trigger: "change",
          },
        ],
      },
    };
  },
  watch: {
    userDetails: {
      deep: true,
      handler() {
        this.ruleForm.title = this.userDetails.salutation;
        this.ruleForm.lastName = this.userDetails.lastName;
        this.ruleForm.firstName = this.userDetails.givenName;
        this.ruleForm.phoneAreaCode = this.userDetails.phoneCode;
        this.ruleForm.phoneNumber = this.userDetails.phoneNo;
        this.ruleForm.email = this.userDetails.email;
        this.ruleForm.country = this.userDetails.placeOfResidence;
        console.log("changed");
      },
    },
  },
  computed: {
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
    countryCodes() {
      return this.$store.getters["profile/countryCodes"];
    },
  },
  methods: {
    submit() {
      const data = {
        salutation: this.ruleForm.title,
        lastName: this.ruleForm.lastName,
        givenName: this.ruleForm.firstName,
        phoneCode: this.ruleForm.phoneAreaCode,
        phoneNo: this.ruleForm.phoneNumber,
        email: this.ruleForm.email,
        placeOfResidence: this.ruleForm.country,
      };
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/checkAccessToken")
            .then(() => {
              this.$store.dispatch("profile/updateAccount", data).then(() => {
                ElNotification({
                  title: "Success",
                  message: this.$t("profile_updated"),
                  type: "success",
                });
                this.$store.dispatch("profile/getAccount");
              });
            })
            .catch(() => {
              this.checkRefreshToken(data);
            });
        }
      });
    },
    checkRefreshToken(data) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.$store.dispatch("profile/updateAccount", data).then(() => {
            ElNotification({
              title: "Success",
              message: this.$t("profile_updated"),
              type: "success",
            });
            this.$store.dispatch("profile/getAccount");
          });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.response.data.message,
            type: "error",
          });
          this.$router.replace("/");
        });
    },
  },
  created() {
    this.ruleForm.title = this.userDetails.salutation;
    this.ruleForm.lastName = this.userDetails.lastName;
    this.ruleForm.firstName = this.userDetails.givenName;
    this.ruleForm.phoneAreaCode = this.userDetails.phoneCode;
    this.ruleForm.phoneNumber = this.userDetails.phoneNo;
    this.ruleForm.email = this.userDetails.email;
    this.ruleForm.country = this.userDetails.placeOfResidence;
    console.log(this.ruleForm);
  },
};
</script>

<style>
.member-profile
  .personal-information
  .personal-information-form
  .el-form-item__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  padding-bottom: 0.5rem;
}

.member-profile .personal-information .personal-information-form .el-select {
  width: 100%;
}

.member-profile .personal-information .personal-information-form .el-row {
  border-bottom: 0.8px solid #e0e0e0;
}

.member-profile .personal-information .personal-information-form .el-button {
  background: #2d99a0;
  border-radius: 4px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: 1rem;
}

.member-profile
  .personal-information
  .personal-information-form
  .button-wrapper {
  text-align: end;
}
</style>
