<template>
  <div class="policy-info">
    <div class="header">
      <h3>{{ tAndCContent.title }}</h3>
      <!-- <h3>{{ $t("terms_of_use") }}</h3> -->
    </div>
    <div class="body">
      <div v-html="tAndCContent.content"></div>
      <!-- <div class="policy-content">
        <h4>1.{{ $t("that_is_to_say") }}</h4>
        <p>
          {{ $t("privacy_policy_description") }}
        </p>
      </div>
      <div class="policy-content">
        <h4>2.{{ $t("that_is_to_say") }}</h4>
        <p>
          {{ $t("privacy_policy_description") }}
        </p>
      </div>
      <div class="policy-content">
        <h4>3.{{ $t("that_is_to_say") }}</h4>
        <p>
          {{ $t("privacy_policy_description") }}
        </p>
      </div>
      <div class="policy-content">
        <h4>4.{{ $t("that_is_to_say") }}</h4>
        <p>
          {{ $t("privacy_policy_description") }}
        </p>
      </div>
      <div class="policy-content">
        <h4>5.{{ $t("that_is_to_say") }}</h4>
        <p>
          {{ $t("privacy_policy_description") }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tAndCContent() {
      return this.$store.getters["dashboard/tAndCContent"];
    },
  },
};
</script>

.<style scoped>
.policy-info {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
}

.policy-info .header {
  border-radius: 16px 16px 0 0;
  border-bottom: 0.5px solid #e0e0e0;
  box-shadow: none;
}

.policy-info .header h3 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #4e68b2;
  padding: 1rem 1.5rem;
}

.policy-info .body {
  box-shadow: none;
  /* margin-top: 1rem; */
  padding: 1rem 1.5rem;
}

.policy-info .body .policy-content {
  margin-bottom: 1.5rem;
}

.policy-info .body .policy-content h4 {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #393939;
  margin-bottom: 1rem;
}

.policy-info .body .policy-content p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
}
</style>