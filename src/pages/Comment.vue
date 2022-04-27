<template>
  <section class="comment">
    <base-member-card :invisible="true">
      <h3>評價管理</h3>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="未評價預約" name="first">
          <first-tab></first-tab>
        </el-tab-pane>
        <el-tab-pane label="已評價預約" name="second">
          <past-comment></past-comment>
        </el-tab-pane>
      </el-tabs>
    </base-member-card>
  </section>
</template>

<script>
import FirstTab from "../components/comment/FirstTab.vue";
import PastComment from "../components/comment/PastComment.vue";

export default {
  components: {
    FirstTab,
    PastComment,
  },
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>

<style>
.member-profile .comment h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.member-profile .comment .el-tabs__item {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 20px; */
  letter-spacing: 0.1px;
  color: #8d8d8d;
}

.member-profile .comment .el-tabs__active-bar {
  background-color: #7690da;
}

.member-profile .comment .el-tabs__item.is-active {
  color: #7690da;
}
</style>