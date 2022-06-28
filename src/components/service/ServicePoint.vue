<template>
  <div id="service-point" v-if="singleItemDetail.itemType === 'service'">
    <h4>{{ $t("service_location") }}</h4>
    <div class="maps-header">
      <h6>{{ singleItemDetail.basicInfo.providerName }}</h6>
      <p>
        {{ $t("address_text") }}：{{
          singleItemDetail.basicInfo.providerAddress
        }}
      </p>
    </div>
    <div class="maps-body">
      <google-maps></google-maps>
    </div>
  </div>
</template>

<script>
import GoogleMaps from "./GoogleMaps.vue";

export default {
  components: {
    GoogleMaps,
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  created() {
    console.log(this.singleItemDetail);
  },
};
</script>

<style scoped>
.maps-header,
.maps-body {
  border: 0.8px solid #e0e0e0;
  padding: 16px;
}

.maps-body {
  border-radius: 0 0 8px 8px;
  border-top: none;
}

.maps-header {
  border-radius: 8px 8px 0 0;
  margin-top: 1rem;
}
.maps-header h6 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
  margin: 0;
}

.maps-header p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #8d8d8d;
  margin: 0;
}
</style>
