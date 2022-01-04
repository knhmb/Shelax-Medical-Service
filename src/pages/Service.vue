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
    <div class="appointment-section">
      <base-content-container>
        <Appointment />
      </base-content-container>
    </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";

import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import ServiceCarousel from "../components/service/ServiceCarousel.vue";
import Package from "../components/service/Package.vue";
import BaseContentContainer from "../ui/BaseContentContainer.vue";
import Appointment from "../components/service/Appointment.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ServiceCarousel,
    Package,
    BaseContentContainer,
    Appointment,
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

.service .appointment-section {
  background-color: #f5f7fa;
  padding: 2rem 0;
}
</style>