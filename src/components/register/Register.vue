<template>
  <section class="dialog">
    <el-dialog
      v-model="dialogVisibleIsOpen"
      :title="authTitle"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="電郵地址" name="first">
          <template #label>
            <span @click="selectedTab('email')" class="label">
              <img :src="emailTab" style="width: 20px" alt="" />
              電郵地址
            </span>
          </template> -->
      <register-form
        v-if="selectedOption === 'register'"
        @authChanged="changedAuth"
        @closeDialog="closeDialog"
      ></register-form>
      <login-form
        v-if="selectedOption === 'login'"
        @authChanged="changedAuth"
        @closeDialog="closeDialog"
      ></login-form>
      <!-- </el-tab-pane> -->
      <!-- <el-tab-pane label="手機號碼" name="second">
          <template #label>
            <span @click="selectedTab('phone')" class="label">
              <img :src="phoneTab" style="width: 20px" alt="" />
              手機號碼
            </span>
          </template></el-tab-pane
        > -->
      <!-- </el-tabs> -->
    </el-dialog>
  </section>
</template>

<script>
import RegisterForm from "./RegisterForm.vue";
import LoginForm from "../login/LoginForm.vue";

export default {
  props: ["dialogVisible", "selectedOption"],
  emits: ["dialogClosed"],
  components: {
    RegisterForm,
    LoginForm,
  },
  data() {
    return {
      emailTab: require("../../assets/icon-email-on@2x.png"),
      phoneTab: require("../../assets/icon-phone-off@2x.png"),
      activeName: "first",
      selectedAuthOption: "register",
      // authTitle: "登入",
      authTitle: this.$t("menu_login"),
    };
  },
  watch: {
    selectedOption() {
      if (this.selectedOption === "register") {
        // this.authTitle = "註冊";
        this.authTitle = this.$t("menu_register");
      } else {
        // this.authTitle = "登入";
        this.authTitle = this.$t("menu_login");
      }
    },
  },
  computed: {
    dialogVisibleIsOpen() {
      return this.dialogVisible;
    },
  },
  methods: {
    handleClose(done) {
      // this.$confirm("Are you sure to close this dialog?")
      // .then(() => {
      done();
      this.$emit("dialogClosed", false);
      // })
      // .catch(() => {});
    },
    closeDialog() {
      this.$emit("dialogClosed", false);
    },
    selectedTab(option) {
      if (option === "email") {
        this.emailTab = require("../../assets/icon-email-on@2x.png");
        this.phoneTab = require("../../assets/icon-phone-off@2x.png");
      } else if (option === "phone") {
        this.emailTab = require("../../assets/icon-email-off@2x.png");
        this.phoneTab = require("../../assets/icon-phone-on@2x.png");
      }
    },
    changedAuth(event) {
      if (event.changedAuthOption === "register") {
        // this.selectedAuthOption = event.changedAuthOption;
        this.$emit("toggleAuth", event.changedAuthOption);
        this.authTitle = event.authTitle;
      } else if (event.changedAuthOption === "login") {
        // this.selectedAuthOption = event.changedAuthOption;
        this.$emit("toggleAuth", event.changedAuthOption);
        this.authTitle = event.authTitle;
      }
      console.log("changed");
    },
  },
};
</script>

<style>
.dialog .el-dialog {
  border-radius: 24px;
  min-width: 490px;
}

@media screen and (max-width: 540px) {
  .dialog .el-dialog {
    min-width: 320px;
  }
}

.dialog .el-dialog__title {
  color: #262626;
  font-weight: 700;
  font-size: 24px;
}

.dialog .label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog .label img {
  margin-right: 0.3rem;
}

.dialog .el-tabs__item {
  color: #a8a8a8;
}

.dialog .el-tabs__item.is-active {
  color: #7690da;
}

.dialog .el-tabs__item.is-active .label svg {
  color: #7690da;
}

.dialog .el-tabs__active-bar {
  background-color: #7690da;
}

.dialog .login-icons {
  font-size: 16px;
  color: #a8a8a8;
  margin-right: 0.3rem;
}

.dialog .el-dialog__header,
.dialog .el-dialog__body,
.dialog .el-dialog__footer {
  padding-right: 40px;
  padding-left: 40px;
}
</style>