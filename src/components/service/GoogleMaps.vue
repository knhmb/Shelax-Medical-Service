<template>
  <GoogleMap
    api-key="AIzaSyAASsvWXR-8Fuy7eD0xMUPR1pe1FFlFziM"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 22.3193, lng: 114.1694 };

    return { center };
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  created() {
    console.log(this.singleItemDetail);
    this.center.lat = +this.singleItemDetail.basicInfo.latitude;
    this.center.lng = +this.singleItemDetail.basicInfo.longitude;
    console.log(this.center);
  },
});
</script>

<style>
div[data-v-6a675aa5] .mapdiv {
  border-radius: 8px;
}
</style>