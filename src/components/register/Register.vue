<template>
  <section class="dialog">
    <el-dialog
      v-model="dialogVisibleIsOpen"
      title="登入"
      width="30%"
      :before-close="handleClose"
    >
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="電郵地址" name="first">
          <template #label>
            <span @click="selectedTab('email')" class="label">
              <img :src="emailTab" style="width: 20px" alt="" />
              <!-- <img
                v-else
                src="../../assets/icon-email-off@2x.png"
                style="width: 20px"
                alt=""
              /> -->
              電郵地址
            </span>
          </template>
          <register-form></register-form>
        </el-tab-pane>
        <el-tab-pane label="手機號碼" name="second">
          <template #label>
            <span @click="selectedTab('phone')" class="label">
              <!-- <font-awesome-icon class="login-icons" icon="user-secret" /> -->
              <img :src="phoneTab" style="width: 20px" alt="" />
              手機號碼
            </span> </template
          >Config</el-tab-pane
        >
      </el-tabs>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog">Cancel</el-button>
          <el-button type="primary" @click="closeDialog">Confirm</el-button>
        </span>
      </template> -->
    </el-dialog>
  </section>
</template>

<script>
import RegisterForm from "./RegisterForm.vue";

export default {
  props: ["dialogVisible"],
  emits: ["dialogClosed"],
  components: {
    RegisterForm,
  },
  data() {
    return {
      emailTab: require("../../assets/icon-email-on@2x.png"),
      phoneTab: require("../../assets/icon-phone-off@2x.png"),
      activeName: "first",
    };
  },
  computed: {
    dialogVisibleIsOpen() {
      return this.dialogVisible;
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
          this.$emit("dialogClosed", false);
        })
        .catch(() => {});
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
  },
  //   watch: {
  //     dialogIsOpen() {
  //       this.dialogIsOpen = this.$props.dialogVisible;
  //     },
  //   },
};
</script>

<style>
.dialog .el-dialog {
  border-radius: 24px;
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
  padding-right: 30px;
  padding-left: 30px;
}
</style>