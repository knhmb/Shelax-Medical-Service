<template>
  <section class="contact-us">
    <Banner />
    <div class="contact-us-content">
      <base-content-container>
        <h2>聯絡我們</h2>
        <el-row :gutter="20">
          <el-col :sm="24" :lg="12">
            <div class="contact-method">
              <el-row>
                <el-col :span="4">
                  <img src="../assets/icon-contact-phone@2x.png" alt="" />
                </el-col>
                <el-col :span="20">
                  <h3>客戶服務熱線</h3>
                  <p>公司電話: (852) 1234 5678</p>
                  <p>Whatspp: (852) 1234 5678</p>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="24" :lg="12">
            <div class="contact-method">
              <el-row>
                <el-col :span="4">
                  <img src="../assets/icon-contact-email@2x.png" alt="" />
                </el-col>
                <el-col :span="20">
                  <h3>公司電郵</h3>
                  <p>公司電郵: info@shelax.com</p>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="24" :lg="12">
            <div class="contact-method">
              <el-row>
                <el-col :span="4">
                  <img src="../assets/icon-contact-map@2x.png" alt="" />
                </el-col>
                <el-col :span="20">
                  <h3>辦公室地址</h3>
                  <p>
                    方比水朱員東少常綠十國連飽要牙蝶弟頁借寫服工十王像了哭買
                  </p>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="24" :lg="12">
            <div class="contact-method">
              <el-row>
                <el-col :span="4">
                  <img src="../assets/icon-contact-map@2x.png" alt="" />
                </el-col>
                <el-col :span="20">
                  <h3>辦公時間</h3>
                  <p>星期一至五: 09:00 - 17:00</p>
                  <p>星期六: 09:00 - 17:00</p>
                  <p>公眾假期休息</p>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </base-content-container>
    </div>
  </section>
</template>

<script>
import Banner from "../components/contact-us/Banner.vue";

export default {
  components: {
    Banner,
  },
};
</script>

<style scoped>
.contact-us .contact-us-content {
  background-color: #f5f7fa;
  margin-top: -0.3rem;
  padding: 2rem 0;
}
.contact-us h2 {
  text-align: center;
  color: #4e68b2;
  font-size: 32px;
  margin-bottom: 3rem;
}

.contact-us .contact-method {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 24px 48px 48px 24px;
  margin-bottom: 2rem;
  max-height: 144px;
}

.contact-us .contact-method img {
  width: 64px;
}

.contact-us .contact-method h3 {
  font-size: 22px;
  font-weight: 500;
  color: #262626;
}

.contact-us .contact-method p {
  font-size: 14px;
  color: #525252;
}

.contact-us .contact-method h3,
.contact-us .contact-method p {
  margin-left: 1rem;
}

@media screen and (max-width: 414px) {
  .contact-us .contact-method h3,
  .contact-us .contact-method p {
    margin-left: 2rem;
  }
}

@media screen and (max-width: 375px) {
  .contact-us .contact-method h3,
  .contact-us .contact-method p {
    margin-left: 2.5rem;
  }
}

@media screen and (min-width: 1400px) {
  .contact-us .contact-method h3,
  .contact-us .contact-method p {
    margin-left: 0.5;
  }
}
</style>