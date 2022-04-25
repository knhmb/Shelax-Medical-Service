<template>
  <section class="table">
    <base-member-card>
      <h3>點數記錄</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="orderNumber" label="訂單號碼" width="180" />
        <el-table-column prop="earnPoints" label="獲得點數" width="180" />
        <el-table-column prop="validUntil" label="有效期至" />
      </el-table>
      <!-- <el-row>
        <el-col :span="8">
          <p>訂單號碼</p>
        </el-col>
        <el-col :span="8">
          <p>獲得點數</p>
        </el-col>
        <el-col :span="8">
          <p>有效期至</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <p>訂單號碼</p>
        </el-col>
        <el-col :span="8">
          <p>獲得點數</p>
        </el-col>
        <el-col :span="8">
          <p>有效期至</p>
        </el-col>
      </el-row> -->
    </base-member-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          orderNumber: "651535",
          earnPoints: "400",
          validUntil: "2022/10/10",
        },
        {
          orderNumber: "267400",
          earnPoints: "400",
          validUntil: "2022/10/10",
        },
        {
          orderNumber: "449003",
          earnPoints: "400",
          validUntil: "2022/10/10",
        },
      ],
    };
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