<template>
  <section class="contact-us">
    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="contact-us-content">
          <h2>{{ contactUsContent.title }}</h2>
          <!-- <h2>{{ $t("contact_us") }}</h2> -->
          <el-form
            label-position="top"
            :model="ruleForm"
            ref="ruleFormRef"
            :rules="rules"
            hide-required-asterisk
          >
            <el-row :gutter="20">
              <el-col :sm="12" :md="9">
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
              <el-col :sm="12" :md="15">
                <el-form-item :label="$t('name')" prop="name">
                  <el-input
                    v-model="ruleForm.name"
                    :placeholder="$t('enter_name')"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="9">
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
              <el-col :sm="12" :md="15">
                <el-form-item :label="$t('phone_number')" prop="phoneNumber">
                  <el-input
                    v-model="ruleForm.phoneNumber"
                    :placeholder="$t('phone_number')"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="24">
                <el-form-item :label="$t('email_address')" prop="email">
                  <el-input
                    v-model="ruleForm.email"
                    :placeholder="$t('email_address')"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="24">
                <el-form-item :label="$t('your_message')" prop="message">
                  <el-input
                    v-model="ruleForm.message"
                    type="textarea"
                    rows="7"
                    :placeholder="$t('enter_message_content')"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item>
                  <el-button @click="submit">{{ $t("send_button") }}</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <!-- <Banner /> -->
        <img :src="contactUsContent.thumbnail" alt="" />
        <!-- <img src="../assets/asian-woman-call-center-2.png" alt="" /> -->
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      ruleForm: {
        title: "",
        name: "",
        phoneAreaCode: "",
        phoneNumber: "",
        email: "",
        message: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: this.$t("choose_title"),
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: this.$t("enter_name"),
            trigger: "blur",
          },
        ],
        phoneAreaCode: [
          {
            required: true,
            message: this.$t("select_phone_area_code"),
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: this.$t("enter_phone_number"),
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: this.$t("enter_email_address"),
            type: "email",
            trigger: "blur",
          },
        ],
        message: [
          {
            required: true,
            message: this.$t("enter_message_content"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    lang() {
      this.$store.dispatch("dashboard/getContactUsContent");
    },
  },
  computed: {
    countryCodes() {
      return this.$store.getters["profile/countryCodes"];
    },
    lang() {
      return this.$store.getters.lang;
    },
    contactUsContent() {
      return this.$store.getters["dashboard/contactUsContent"];
    },
  },
  methods: {
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            salutation: this.ruleForm.title,
            name: this.ruleForm.name,
            phoneCode: this.ruleForm.phoneAreaCode,
            phoneNo: this.ruleForm.phoneNumber,
            email: this.ruleForm.email,
            message: this.ruleForm.message,
          };
          console.log(data);
          this.$store.dispatch("dashboard/contactUs", data).then(() => {
            ElNotification({
              title: "Success",
              message: this.$t("message_sent"),
              type: "success",
            });
            this.$refs.ruleFormRef.resetFields();
          });
        }
      });
    },
  },
  created() {
    this.$store.dispatch("dashboard/getContactUsContent");
  },
};
</script>

<style>
.contact-us .contact-us-content {
  /* background-color: #f5f7fa; */
  margin-top: -0.3rem;
  padding: 1rem 0;
  padding-left: 13rem;
}
.contact-us h2 {
  /* text-align: center; */
  color: #4e68b2;
  font-size: 32px;
  margin-bottom: 1rem;
}

.contact-us .contact-us-content .el-form .el-form-item {
  /* margin-bottom: 2rem; */
}

.contact-us .contact-us-content .el-form .el-form-item__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  padding-bottom: 0.5rem;
}

.contact-us .contact-us-content .el-form .el-select {
  width: 100%;
}

.contact-us .contact-us-content .el-form .el-button {
  background: #7690da;
  border-radius: 4px;
  width: 100%;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
}

.contact-us img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 991px) {
  .contact-us .contact-us-content {
    padding: 0 5rem;
  }

  .contact-us h2 {
    margin-top: 1rem;
  }
}

/* .contact-us .contact-method {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 24px 48px 48px 24px;
  margin-bottom: 2rem;
  max-height: 144px;
}

.contact-us .contact-method img {
  width: 64px;
}

.contact-us .contact-method h3 {
  font-size: 22px;
  font-weight: 500;
  color: #262626;
}

.contact-us .contact-method p {
  font-size: 14px;
  color: #525252;
}

.contact-us .contact-method h3,
.contact-us .contact-method p {
  margin-left: 1rem;
}

@media screen and (max-width: 414px) {
  .contact-us .contact-method h3,
  .contact-us .contact-method p {
    margin-left: 2rem;
  }
}

@media screen and (max-width: 375px) {
  .contact-us .contact-method h3,
  .contact-us .contact-method p {
    margin-left: 2.5rem;
  }
}

@media screen and (min-width: 1400px) {
  .contact-us .contact-method h3,
  .contact-us .contact-method p {
    margin-left: 0.5;
  }
} */
</style>