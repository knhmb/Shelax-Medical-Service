<template>
  <section class="how-to-use">
    <base-member-card :invisible="true">
      <h3>{{ $t("how_to_use_shelax_points") }}</h3>
      <p>{{ $t("shelax_point_usage") }}</p>
      <p>{{ $t("how_to_get_shelax_points") }}</p>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="8">
          <div class="box">
            <h4>{{ $t("book_a_trip") }}</h4>
            <p>{{ $t("book_a_trip_method") }}</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="box">
            <h4>{{ $t("how_much_to_use") }}</h4>
            <p>{{ $t("how_much_to_use_text") }}</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="box">
            <h4>{{ $t("how_much_to_use") }}</h4>
            <p>{{ $t("how_much_to_use_text") }}</p>
          </div>
        </el-col>
      </el-row>
    </base-member-card>
  </section>
</template>

<style scoped>
.how-to-use {
  margin: 1rem 0;
}

.how-to-use h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.how-to-use p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.how-to-use p:nth-of-type(2) {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin-top: 1rem;
  color: #262626;
}

.how-to-use .box {
  padding: 14px;
  border-radius: 4px;
  background: #fff;
  border: 0.8px solid #e0e0e0;
  margin-top: 1rem;
  width: 100%;
  height: 90%;
}

.how-to-use .box h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.how-to-use .box p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}
</style>