<template>
  <div class="tabs">
    <base-content-container>
      <el-row justify="space-around">
        <el-col
          @click="$router.push('/about-us')"
          :class="{ 'is-active': $route.path === '/about-us' }"
          :span="8"
        >
          <p>關於Shelax</p>
        </el-col>
        <el-col
          @click="$router.push('/become-a-partner')"
          :class="{ 'is-active': $route.path === '/become-a-partner' }"
          :span="8"
        >
          <p>商戶合作</p>
        </el-col>
      </el-row>
    </base-content-container>
    <!-- <el-tabs
      stretch
      v-model="activeName"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="User" name="about-us"></el-tab-pane>
      <el-tab-pane label="Config" name="be-a-partner"></el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
    };
  },
  created() {
    this.$route.path === "/about-us"
      ? (this.activeName = "about-us")
      : "be-a-partner";
  },
};
</script>

<style>
.tabs {
  margin-top: -0.3rem;
  margin-bottom: 1rem;
  background: #ffffff;
  box-shadow: inset 0px -2px 0px #e6e6e6;
  padding: 0 16px;
}

.tabs .el-col {
  text-align: center;
  cursor: pointer;
  position: relative;
  padding: 24px 16px;
}

.tabs .el-col.is-active::after {
  content: "";
  position: absolute;
  background-color: #4e68b2;
  height: 4px;
  width: 100%;
  left: 0;
  bottom: 0;
}

.tabs .el-col p {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #525252;
}

.tabs .el-col.is-active p {
  color: #4e68b2;
}
.tabs .el-tabs.el-tabs--top.demo-tabs {
  /* padding: 0 12rem; */
  background: #ffffff;
  /* box-shadow: inset 0px -2px 0px #e6e6e6; */
}

.tabs .el-tabs__header.is-top {
  margin: 0;
}

.tabs .el-tabs__active-bar.is-top {
  /* display: none;
  border: none; */
}
</style>