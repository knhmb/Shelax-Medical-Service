<template>
  <div class="faq-content">
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="18">
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
        <el-col class="hidden-md-and-down" :span="6">
          <a
            href="#service-description"
            @click="setFaq('service-description')"
            :class="{ 'faq-selected': faqSelected === 'service-description' }"
            class="faq-navigation"
          >
            服務說明
          </a>
          <a
            href="#purchase-notes"
            @click="setFaq('purchase-notes')"
            :class="{ 'faq-selected': faqSelected === 'purchase-notes' }"
            class="faq-navigation"
          >
            購買須知
          </a>
          <a
            href="#service-point"
            @click="setFaq('service-point')"
            :class="{ 'faq-selected': faqSelected === 'service-point' }"
            class="faq-navigation"
          >
            服務地點
          </a>
          <a
            href="#cancellation-policy"
            @click="setFaq('cancellation-policy')"
            :class="{ 'faq-selected': faqSelected === 'cancellation-policy' }"
            class="faq-navigation"
          >
            取消政策
          </a>
          <a
            href="#customer-reviews"
            @click="setFaq('customer-reviews')"
            :class="{ 'faq-selected': faqSelected === 'customer-reviews' }"
            class="faq-navigation"
          >
            顧客評價(738)
          </a>
        </el-col>
      </el-row>
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
  data() {
    return {
      faqSelected: "service-description",
    };
  },
  methods: {
    setFaq(option) {
      this.faqSelected = option;
    },
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
  margin-top: 1rem;
}

.faq-content .faq-navigation {
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #8d8d8d;
  padding-left: 1.5rem;
  cursor: pointer;
  position: relative;
  display: block;
  margin-top: 1rem;
  text-decoration: none;
}

.faq-content .faq-navigation.faq-selected {
  color: #7690da;
}

.faq-content .faq-navigation:hover {
  color: #7690da;
}

/* .faq-content .faq-navigation::before {
  display: none;
} */

.faq-content .faq-selected.faq-navigation::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 26px;
  left: 0px;
  top: 4px;
  background-color: #7690da;
  display: block;
}

@media screen and (max-width: 414px) {
  .faq-content p,
  .faq-content ul li {
    font-size: 10px;
  }
}
</style>