<template>
  <section class="wishlist-first-tab">
    <template v-for="item in wishlists" :key="item.wishlistId">
      <div class="box" v-if="item.isService">
        <el-row>
          <el-col :sm="24" :md="7">
            <img :src="item.thumbnail" alt="" />
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="close">
              <h4>{{ item.itemName }}</h4>
              <img
                @click="removeItem(item.itemId)"
                class="close-icon"
                src="../../assets/icon-close@2x.png"
                alt=""
              />
            </div>
            <p>{{ item.providerName }} - {{ item.providerAddress }}</p>
            <el-rate
              disabled
              :void-color="'#c6c6c6'"
              :colors="colors"
              :model-value="item.rating"
              :score-template="item.reviewsCount"
              show-score
            />
            <p v-if="item.isService" class="date-time">
              {{ $t("earliest_appointment_time") }}
            </p>
            <el-row>
              <el-col :xs="24" :sm="12">
                <div v-if="item.isService" class="date-content">
                  <span>{{ item.earliestBookingDate }}</span>
                  <span>{{ item.earliestBookingTime }}</span>
                </div>
              </el-col>
              <el-col class="all-prices" :xs="24" :sm="12">
                <small class="original-price"
                  >HK$ {{ item.originalPrice }}</small
                >
                <span class="discount-price"
                  >HKD {{ item.discountedPrice }}</span
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </template>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
    };
  },
  computed: {
    wishlists() {
      return this.$store.getters["profile/wishlists"];
    },
  },
  methods: {
    removeItem(item) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store
            .dispatch("profile/removeWishlist", {
              itemId: item,
            })
            .then(() => {
              this.$store.dispatch("profile/getWishlist");
            });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store
                .dispatch("profile/removeWishlist", {
                  itemId: item,
                })
                .then(() => {
                  this.$store.dispatch("profile/getWishlist");
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
    },
  },
};
</script>

<style>
.wishlist-first-tab .box {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.wishlist-first-tab .box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wishlist-first-tab .box .close {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wishlist-first-tab .box .close img.close-icon {
  width: 1.5rem;
  cursor: pointer;
}

.wishlist-first-tab .box .el-col:nth-of-type(2) {
  padding: 16px 12px;
}

.wishlist-first-tab .box h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
}

.wishlist-first-tab .box p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #525252;
  margin-top: 0.5rem;
}

.wishlist-first-tab .box .el-rate {
  margin-top: 0.5rem;
}

.wishlist-first-tab .box .el-rate .el-rate__item .el-rate__icon {
  margin-right: 0;
}

.wishlist-first-tab .box .el-rate .el-rate__text {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d !important;
}

.wishlist-first-tab .box p.date-time {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}

.wishlist-first-tab .box .date-content {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.wishlist-first-tab .box .date-content span {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
}

.wishlist-first-tab .box .original-price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-decoration-line: line-through;
  color: #8d8d8d;
}

.wishlist-first-tab .box .discount-price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #4e68b2;
  margin-left: 0.5rem;
}

.wishlist-first-tab .box .all-prices {
  text-align: end;
}
</style>