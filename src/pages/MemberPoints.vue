<template>
  <section class="member-points">
    <base-member-card :invisible="true">
      <h3>Shelax Points</h3>
      <p>
        目前可使用點數:
        <img src="../assets/Group-110.png" alt="" />
        <span>999</span>
      </p>
    </base-member-card>
    <how-to-use></how-to-use>
    <Table />
  </section>
</template>

<script>
import HowToUse from "../components/member-points/HowToUse.vue";
import Table from "../components/member-points/Table.vue";

export default {
  components: {
    HowToUse,
    Table,
  },
};
</script>

<style scoped>
.member-points h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #7690da;
  margin-bottom: 1rem;
}

.member-points p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  display: flex;
  align-items: center;
}

.member-points img {
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
}

.member-points span {
  color: #feb431;
}
</style>