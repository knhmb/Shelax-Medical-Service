<template>
  <div class="personal-information">
    <base-member-card :invisible="true">
      <h3>{{ $t("member_profile_page_title") }}</h3>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane :label="$t('personal_information')" name="first">
          <Form />
        </el-tab-pane>
        <el-tab-pane :label="$t('change_password')" name="second">
          <change-password></change-password>
        </el-tab-pane>
      </el-tabs>
    </base-member-card>
  </div>
</template>

<script>
import Form from "../components/personal-information/Form.vue";
import ChangePassword from "../components/personal-information/ChangePassword.vue";

export default {
  components: {
    Form,
    ChangePassword,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    // handleClick(tab) {
    //   if (tab.props.name === "first") {
    //     this.$router.push({ name: "personal-information" });
    //   } else {
    //     this.$router.push("/");
    //   }
    //   console.log(tab.props.name);
    // },
  },
};
</script>

<style>
.member-profile .personal-information h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.member-profile .personal-information .el-tabs__item {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 20px; */
  letter-spacing: 0.1px;
  color: #8d8d8d;
}

.member-profile .personal-information .el-tabs__active-bar {
  background-color: #7690da;
}

.member-profile .personal-information .el-tabs__item.is-active {
  color: #7690da;
}
</style>