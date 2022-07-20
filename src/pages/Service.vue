<template>
  <!-- <the-header></the-header> -->
  <section class="service">
    <base-content-container>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }"
          >{{ $t("home") }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{
          singleItemDetail.basicInfo.itemName
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{
          singleItemDetail.basicInfo.providerName
        }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="service-carousel">
        <service-carousel></service-carousel>
      </div>
      <div class="checkup-package">
        <el-row :gutter="20">
          <el-col :sm="24" :lg="16">
            <Package />
          </el-col>
          <el-col :sm="24" :lg="8">
            <right-section></right-section>
          </el-col>
        </el-row>
      </div>
    </base-content-container>
    <div class="appointment-section">
      <base-content-container>
        <Appointment />
      </base-content-container>
    </div>
    <div class="faq">
      <Faq />
    </div>
    <div class="recommended-services-section">
      <recommended-services></recommended-services>
    </div>
  </section>
  <!-- <the-footer></the-footer> -->
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";

// import TheHeader from "../components/TheHeader.vue";
// import TheFooter from "../components/TheFooter.vue";
import ServiceCarousel from "../components/service/ServiceCarousel.vue";
import Package from "../components/service/Package.vue";
import BaseContentContainer from "../ui/BaseContentContainer.vue";
import Appointment from "../components/service/Appointment.vue";
import Faq from "../components/service/Faq.vue";
import RecommendedServices from "../components/service/RecommendedServices.vue";
import RightSection from "../components/service/RightSection.vue";
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  components: {
    // TheHeader,
    // TheFooter,
    ServiceCarousel,
    Package,
    BaseContentContainer,
    Appointment,
    Faq,
    RecommendedServices,
    RightSection,
  },
  data() {
    return {
      ArrowRight: ArrowRight,
    };
  },
  watch: {
    lang() {
      if (this.singleItemDetail.itemType === "service") {
        const time = this.singleItemDetail.defaultBookingTime.substring(
          0,
          this.singleItemDetail.defaultBookingTime.lastIndexOf(":")
        );
        const data = {
          itemId: this.singleItemDetail.basicInfo.id,
          bookingDate: moment(this.singleItemDetail.defaultBookingDate).format(
            "YYYYMMDD"
          ),
          bookingTime: time.replace(":", ""),
        };
        console.log(data);
        this.$store
          .dispatch("auth/checkAccessToken")
          .then(() => {
            this.$store.dispatch("search/getItemDetail", data).then(() => {
              this.$router.push("/service");
            });
          })
          .catch(() => {
            this.$store
              .dispatch("auth/checkRefreshToken")
              .then(() => {
                this.$store.dispatch("search/getItemDetail", data).then(() => {
                  this.$router.push("/service");
                });
              })
              .catch((err) => {
                ElNotification({
                  title: "Error",
                  message: this.$t(err.response.data.message),
                  type: "error",
                });
                this.$store.dispatch("auth/logout");
              });
          });
      } else if (this.singleItemDetail.itemType === "product") {
        const data = {
          itemId: this.singleItemDetail.basicInfo.id,
          bookingDate: "-",
          bookingTime: "-",
        };
        console.log(data);
        this.$store
          .dispatch("auth/checkAccessToken")
          .then(() => {
            this.$store.dispatch("search/getItemDetail", data).then(() => {
              this.$router.push("/service");
            });
          })
          .catch(() => {
            this.$store
              .dispatch("auth/checkRefreshToken")
              .then(() => {
                this.$store.dispatch("search/getItemDetail", data).then(() => {
                  this.$router.push("/service");
                });
              })
              .catch((err) => {
                ElNotification({
                  title: "Error",
                  message: this.$t(err.response.data.message),
                  type: "error",
                });
                this.$store.dispatch("auth/logout");
              });
          });
      }
    },
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
    lang() {
      return this.$store.getters.lang;
    },
  },
};
</script>

<style scoped>
.service {
  margin-top: 2rem;
}

.service .el-breadcrumb {
  margin-bottom: 1rem;
}

.service .service-carousel {
  margin-bottom: 1rem;
}

.service .appointment-section {
  background-color: #f5f7fa;
  padding: 2rem 0;
  /* min-width: 386px; */
}

@media screen and (max-width: 414px) {
  .service .el-breadcrumb .el-breadcrumb__item {
    font-size: 12px;
  }
}
</style>