<template>
  <div class="completed">
    <h3>{{ $t("merchant_partnership") }}</h3>
    <p>{{ $t("merchant_partnership_submitted") }}</p>
    <el-button>{{ $t("complete_button") }}</el-button>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_VENDOR_STEP", 3);
  },
};
</script>

<style scoped>
.completed {
  text-align: center;
}

.completed h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #262626;
}

.completed p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #525252;
}

.completed .el-button {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
  width: 100%;
  background: #7690da;
  border-radius: 4px;
}
</style>