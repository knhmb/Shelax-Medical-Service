<template>
  <section class="table" v-if="Object.keys(memberPointsHistory).length > 0">
    <base-member-card>
      <h3>{{ $t("shelax_points_history") }}</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="orderNumber"
          :label="$t('order_number')"
          width="180"
        />
        <el-table-column
          class-name="points"
          prop="earnPoints"
          :label="$t('points_rewarded')"
          width="180"
        />
        <el-table-column prop="pointsUsed" :label="$t('points_used')" />
        <el-table-column prop="validUntil" :label="$t('expiry_date')" />
        <el-table-column prop="expired" />
      </el-table>
    </base-member-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // tableData: [
      // {
      //   orderNumber: "651535",
      //   earnPoints: "400",
      //   validUntil: "2022/10/10",
      // },
      // {
      //   orderNumber: "267400",
      //   earnPoints: "400",
      //   validUntil: "2022/10/10",
      // },
      // {
      //   orderNumber: "449003",
      //   earnPoints: "400",
      //   validUntil: "2022/10/10",
      // },
      // ],
    };
  },
  computed: {
    memberPointsHistory() {
      return this.$store.getters["profile/memberPointsHistory"];
    },
    tableData() {
      return this.$store.getters["profile/tableData"];
    },
  },
  created() {
    console.log(this.memberPointsHistory);
    console.log(Object.keys(this.memberPointsHistory).length > 0);
    // this.memberPointsHistory.forEach((order) => {
    //   console.log(order);
    //   this.tableData.push({
    //     orderNumber: order.orderNo,
    //     earnPoints:
    //       order.transactionType === "DEPOSIT" ? order.pointsRewarded : "",
    //     pointsUsed:
    //       order.transactionType === "WITHDRAWAL" ? order.pointsUsed : "",
    //     validUntil: order.expiryDate,
    //     expired: order.expired ? this.$t("expired") : order.invalid ? "" : "",
    //   });
    // });
    // console.log(this.tableData);
  },
};
</script>

<style>
.member-points .table h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2rem;
}

.member-points .table .el-table__body .points {
  color: #feb431;
}

.member-points .table .el-row {
  padding-left: 0.5rem;
  padding: 8px;
  border-radius: 4px;
}

.member-points .table .el-row:hover {
  background-color: #f4f4f4;
}

.member-points .table p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.member-points .table .el-table::before {
  content: none;
}

.member-points .table .el-table th.el-table__cell.is-leaf {
  background-color: #f4f4f4;
  border-radius: 4px;
}

.member-points .table .el-table td.el-table__cell,
.member-points .table .el-table th.el-table__cell.is-leaf {
  border: none;
}
</style>