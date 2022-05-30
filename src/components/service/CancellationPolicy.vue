<template>
  <div id="cancellation-policy">
    <h4>{{ $t("cancellation_policy") }}</h4>
    <p>
      {{ singleItemDetail.basicInfo.cancellationPolicy }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
};
</script>