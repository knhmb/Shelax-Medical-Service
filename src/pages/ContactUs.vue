<template>
  <section class="contact-us">
    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="contact-us-content">
          <h2>聯絡我們</h2>
          <el-form
            label-position="top"
            :model="ruleForm"
            ref="ruleFormRef"
            :rules="rules"
            hide-required-asterisk
          >
            <el-row :gutter="20">
              <el-col :sm="12" :md="9">
                <el-form-item label="稱謂" prop="title">
                  <el-select v-model="ruleForm.title" placeholder="選擇稱謂">
                    <el-option label="先生" value="先生">先生</el-option>
                    <el-option label="太太" value="太太">太太</el-option>
                    <el-option label="小姐" value="小姐">小姐</el-option>
                    <el-option label="女士" value="女士">女士</el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="15">
                <el-form-item label="姓名" prop="name">
                  <el-input
                    v-model="ruleForm.name"
                    placeholder="請輸入姓名"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="9">
                <el-form-item label="電話區號" prop="phoneAreaCode">
                  <el-input
                    v-model="ruleForm.phoneAreaCode"
                    placeholder="選擇電話區號"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="15">
                <el-form-item label="電話號碼" prop="phoneNumber">
                  <el-input
                    v-model="ruleForm.phoneNumber"
                    placeholder="請輸入電話號碼"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="24">
                <el-form-item label="電郵地址" prop="email">
                  <el-input
                    v-model="ruleForm.email"
                    placeholder="請輸入電郵地址"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12" :md="24">
                <el-form-item label="你的訊息" prop="message">
                  <el-input
                    v-model="ruleForm.message"
                    type="textarea"
                    rows="7"
                    placeholder="請輸入訊息內容"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item>
                  <el-button @click="submit">送出</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <!-- <Banner /> -->
        <img src="../assets/asian-woman-call-center-2.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<script>
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
            message: "選擇稱謂",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "請輸入姓名",
            trigger: "blur",
          },
        ],
        phoneAreaCode: [
          {
            required: true,
            message: "選擇電話區號",
            trigger: "blur",
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
        message: [
          {
            required: true,
            message: "請輸入訊息內容",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          console.log("valid");
        }
      });
    },
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