<template>
  <div class="policy-options">
    <el-row>
      <el-col
        @click="$router.push('/terms-and-conditions')"
        :class="{ 'is-active': $route.path === '/terms-and-conditions' }"
      >
        <p>{{ $t("terms_of_use") }}</p>
      </el-col>
      <el-col
        @click="$router.push('/privacy-and-policy')"
        :class="{ 'is-active': $route.path === '/privacy-and-policy' }"
      >
        <p>{{ $t("privacy_policy") }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.privacy-and-policy .policy-options {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 24px 0px;
}

.privacy-and-policy .policy-options .el-col {
  padding: 24px;
  cursor: pointer;
}

.privacy-and-policy .policy-options .el-col:hover {
  background: #f5f8ff;
  box-shadow: inset 8px 0px 0px #4e68b2;
  transition: all 0.2s ease;
}

.privacy-and-policy .policy-options .el-col.is-active {
  background: #f5f8ff;
  box-shadow: inset 8px 0px 0px #4e68b2;
}

.privacy-and-policy .policy-options .el-col.is-active p {
  color: #4e68b2;
}

.privacy-and-policy .policy-options p {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #525252;
}
</style>