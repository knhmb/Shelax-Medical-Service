<template>
  <the-header></the-header>
  <section class="service">
    <base-content-container>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主頁 </el-breadcrumb-item>
        <el-breadcrumb-item>身體檢查</el-breadcrumb-item>
        <el-breadcrumb-item>綜合個人健康體檢套餐</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="service-carousel">
        <service-carousel></service-carousel>
      </div>
      <div class="checkup-package">
        <el-row>
          <el-col :span="16">
            <Package />
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </div>
    </base-content-container>
  </section>
  <the-footer></the-footer>
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";

import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import ServiceCarousel from "../components/service/ServiceCarousel.vue";
import Package from "../components/service/Package.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ServiceCarousel,
    Package,
  },
  data() {
    return {
      ArrowRight: ArrowRight,
    };
  },
};
</script>

<style scoped>
.service {
  margin-top: 2rem;
}

.service .el-breadcrumb {
  margin-bottom: 1rem;
}

.service .service-carousel {
  margin-bottom: 1rem;
}
</style>