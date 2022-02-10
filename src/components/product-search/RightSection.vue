<template>
  <div class="right-section">
    <div class="options">
      <el-row>
        <el-col
          @click="setOption('推薦')"
          :class="{ 'is-selected': isActive === '推薦' }"
          :sm="12"
          :md="6"
        >
          <p>推薦</p>
        </el-col>
        <el-col
          @click="setOption('價錢由低至高')"
          :class="{ 'is-selected': isActive === '價錢由低至高' }"
          :sm="12"
          :md="6"
        >
          <p>價錢由低至高</p>
        </el-col>
        <el-col
          @click="setOption('價錢由高至低')"
          :class="{ 'is-selected': isActive === '價錢由高至低' }"
          :sm="12"
          :md="6"
        >
          <p>價錢由高至低</p>
        </el-col>
        <el-col
          @click="setOption('評級最高')"
          :class="{ 'is-selected': isActive === '評級最高' }"
          :sm="12"
          :md="6"
        >
          <p>評級最高</p>
        </el-col>
      </el-row>
    </div>
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :description="item.desc"
      :image="item.image"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      isActive: "推薦",
      items: [
        {
          id: 1,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image.png"),
        },
        {
          id: 2,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-2.png"),
        },
        {
          id: 3,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-3.png"),
        },
        {
          id: 4,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-4.png"),
        },
        {
          id: 5,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image.png"),
        },
        {
          id: 6,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-2.png"),
        },
        {
          id: 7,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-3.png"),
        },
        {
          id: 8,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-4.png"),
        },
        {
          id: 9,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image.png"),
        },
        {
          id: 10,
          title: "產品名稱",
          desc: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          image: require("../../assets/product-search-image-2.png"),
        },
      ],
    };
  },
  methods: {
    setOption(option) {
      this.isActive = option;
    },
  },
};
</script>

<style scoped>
.product-search-content .right-section .options {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.product-search-content .right-section .options .el-col {
  text-align: center;
  cursor: pointer;
  padding: 8px 24px;
  position: relative;
}

.product-search-content .right-section .options .el-col p {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.product-search-content
  .right-section
  .options
  .el-col:not(:last-of-type):after {
  content: "";
  position: absolute;
  width: 1px;
  height: 30px;
  background: #e0e0e0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.product-search-content
  .right-section
  .options
  .el-col:hover:not(:last-of-type):after {
  background: #7690da;
}

.product-search-content .right-section .options .el-col:hover {
  background: #7690da;
  transition: all 0.2s ease;
}

.product-search-content .right-section .options .el-col:hover p {
  color: #fff;
}

.product-search-content .right-section .options .el-col.is-selected {
  background: #7690da;
}

.product-search-content .right-section .options .el-col.is-selected p {
  color: #fff;
}

.product-search-content .right-section .options .el-col.is-selected:after {
  background: #7690da;
}
</style>