<template>
  <section class="product-detail">
    <Banner />
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="18">
          <product-name></product-name>
        </el-col>
        <el-col :sm="24" :lg="6">
          <Offer />
        </el-col>
      </el-row>
    </base-content-container>
    <quantity-selection></quantity-selection>
    <Faq />
  </section>
</template>

<script>
import Banner from "../components/product-detail/Banner.vue";
import ProductName from "../components/product-detail/ProductName.vue";
import QuantitySelection from "../components/product-detail/QuantitySelection.vue";
import Offer from "../components/product-detail/Offer.vue";
import Faq from "../components/service/Faq.vue";

export default {
  components: {
    Banner,
    ProductName,
    QuantitySelection,
    Offer,
    Faq,
  },
};
</script>