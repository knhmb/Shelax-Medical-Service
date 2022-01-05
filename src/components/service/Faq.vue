<template>
  <div class="faq-content">
    <base-content-container>
      <div class="el-row">
        <el-col :span="18">
          <div id="service-description">
            <h4>服務說明</h4>
            <p>
              服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
            </p>
            <p>
              服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
            </p>
            <p>
              服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
            </p>
            <ul>
              <li>
                服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
              </li>
              <li>
                服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
              </li>
              <li>
                服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
              </li>
              <li>
                服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
              </li>
              <li>
                服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
              </li>
            </ul>
          </div>
          <div id="purchase-notes">
            <h4>服務說明</h4>
            <p>
              服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
            </p>
            <p>
              服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
            </p>
          </div>
          <service-point></service-point>
          <cancellation-policy></cancellation-policy>
          <customer-reviews></customer-reviews>
        </el-col>
      </div>
    </base-content-container>
  </div>
</template>

<script>
import ServicePoint from "./ServicePoint.vue";
import CancellationPolicy from "./CancellationPolicy.vue";
import CustomerReviews from "./CustomerReviews.vue";

export default {
  components: {
    ServicePoint,
    CancellationPolicy,
    CustomerReviews,
  },
};
</script>

<style>
.faq-content {
  padding: 20px 0;
}
.faq-content h4 {
  font-weight: 500;
  font-size: 24px;
  color: #525252;
  margin: 0;
  position: relative;
  padding-left: 1rem;
  margin-top: 1rem;
}

.faq-content h4::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 26px;
  left: 0px;
  top: 6px;
  background-color: #7690da;
}

.faq-content ul {
  padding: 0 0 0 26px;
}

.faq-content #service-description,
.faq-content #purchase-notes,
.faq-content #service-point,
.faq-content #cancellation-policy {
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

.faq-content p,
.faq-content ul li {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
}
</style>