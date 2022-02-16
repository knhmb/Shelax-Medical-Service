<template>
  <div class="packages">
    <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox></el-checkbox>
        <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img src="../../assets/Rectangle-77.png" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number v-model="num" size="small" />
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :xs="24" :sm="14">
        <span>更改</span>
        <span>刪除</span>
      </el-col>
      <el-col :xs="24" :sm="10">
        <p>HKD 1,140</p>
      </el-col>
    </el-row>
  </div>

  <div class="packages">
    <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox></el-checkbox>
        <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img src="../../assets/Rectangle-77.png" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number v-model="num" size="small" />
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :xs="24" :sm="14">
        <span>更改</span>
        <span>刪除</span>
      </el-col>
      <el-col :xs="24" :sm="10">
        <p>HKD 570</p>
      </el-col>
    </el-row>
  </div>

  <div class="title">
    <h2>產品類型</h2>
  </div>

  <div class="selection">
    <el-checkbox></el-checkbox>
    <span>全選(3)</span>
    <span>刪除已選產品</span>
  </div>
  <div class="packages">
    <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox></el-checkbox>
        <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img src="../../assets/product-search-image.png" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>產品名稱 A</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number v-model="num" size="small" />
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :xs="24" :sm="14">
        <span>更改</span>
        <span>刪除</span>
      </el-col>
      <el-col :xs="24" :sm="10">
        <p>HKD 160</p>
      </el-col>
    </el-row>
  </div>
  <div class="packages">
    <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox></el-checkbox>
        <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img src="../../assets/product-search-image-2.png" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>產品名稱 A</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number v-model="num" size="small" />
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :xs="24" :sm="14">
        <span>更改</span>
        <span>刪除</span>
      </el-col>
      <el-col :xs="24" :sm="10">
        <p>HKD 120</p>
      </el-col>
    </el-row>
  </div>

  <div class="expired-section">
    <h2>以下服務已失效需重新確認</h2>
    <div class="title">
      <h2>服務類型</h2>
    </div>
    <div class="packages">
      <el-row class="top">
        <el-col :xs="24" :sm="1" :md="1">
          <el-checkbox></el-checkbox>
          <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
        </el-col>
        <el-col :xs="24" :sm="2" :md="2">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="16" :md="16">
          <div class="text">
            <h3>綜合個人健康體檢套餐</h3>
            <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
            <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          </div>
        </el-col>
        <el-col class="input-range" :xs="24" :sm="5" :md="5">
          <p>人數</p>
          <el-input-number disabled v-model="num" size="small" />
        </el-col>
      </el-row>

      <el-row class="bottom">
        <el-col :xs="24" :sm="12">
          <span>更改</span>
          <span>刪除</span>
        </el-col>
        <el-col :xs="24" :sm="12">
          <p>服務已失效，請重新選擇後購買</p>
        </el-col>
      </el-row>
    </div>

    <div class="packages">
      <el-row class="top">
        <el-col :xs="24" :sm="1" :md="1">
          <el-checkbox></el-checkbox>
          <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
        </el-col>
        <el-col :xs="24" :sm="2" :md="2">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="16" :md="16">
          <div class="text">
            <h3>綜合個人健康體檢套餐</h3>
            <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
            <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          </div>
        </el-col>
        <el-col class="input-range" :xs="24" :sm="5" :md="5">
          <p>人數</p>
          <el-input-number disabled v-model="num" size="small" />
        </el-col>
      </el-row>

      <el-row class="bottom">
        <el-col :xs="24" :sm="12">
          <span>更改</span>
          <span>刪除</span>
        </el-col>
        <el-col :xs="24" :sm="12">
          <p>服務已失效，請重新選擇後購買</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
};
</script>

<style>
.shopping-cart .selection {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.shopping-cart .title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #26408a;
  margin-bottom: 1rem;
}

.shopping-cart .selection span {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-left: 1rem;
}

.shopping-cart .selection span:not(:last-of-type) {
  border-right: 1px solid #c6c6c6;
  padding-right: 1rem;
}

.shopping-cart .packages {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 1rem;
  position: relative;
}

.shopping-cart .packages::after {
  content: "";
  position: absolute;
  background: #e0e0e0;
  width: 100%;
  height: 1px;
  bottom: 3.5rem;
  left: 0;
}

.shopping-cart .packages .el-row.top {
  margin-bottom: 1rem;
}

.shopping-cart .packages img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* margin-left: -1rem; */
}

.shopping-cart .packages .text h3 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.shopping-cart .packages .text p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d;
  text-align: start;
}

.shopping-cart .packages .text h3,
.shopping-cart .packages .text p {
  margin-left: 2rem;
}

.shopping-cart .packages .input-range {
  text-align: center;
}

.shopping-cart .packages .input-range p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.shopping-cart .packages .el-input-number.el-input-number--small .el-icon {
  color: #262626;
  font-size: 10px;
  height: 14px;
}

.shopping-cart .packages .bottom {
  padding: 1rem 1.8rem;
  align-items: center;
}

.shopping-cart .packages .bottom span {
  padding-right: 2rem;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart .packages .bottom span:last-of-type {
  border-left: 1px solid #c6c6c6;
  padding-left: 2rem;
  padding-right: 0;
}

.shopping-cart .packages .bottom p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #4e68b2;
  text-align: end;
}

.shopping-cart .expired-section h2 {
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin: 2rem 0;
}

.shopping-cart .title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #26408a;
  margin-bottom: 1rem;
}

.shopping-cart .expired-section .packages .bottom p {
  color: #fa5757;
  font-weight: normal;
}

@media screen and (min-width: 768px) and (max-width: 1230px) {
  .shopping-cart .packages img {
    margin-left: 0;
  }

  .shopping-cart .packages .text {
    margin-left: 2.5rem;
  }
}

@media screen and (max-width: 767px) {
  .shopping-cart .packages img {
    margin-left: 0;
  }

  .shopping-cart .packages .text {
    margin-left: 0;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .shopping-cart .packages .text p,
  .shopping-cart .packages {
    text-align: center;
  }

  .shopping-cart .packages::after {
    bottom: 6rem;
  }

  .shopping-cart .packages .bottom p {
    text-align: center;
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 417px) {
  .shopping-cart .expired-section .packages::after {
    bottom: 7rem;
  }
}
</style>