<template>
  <section class="q-and-a">
    <Banner />
    <base-content-container>
      <p>常見問題</p>
      <el-collapse
        v-for="question in questions"
        :key="question.id"
        v-model="activeName"
        accordion
      >
        <el-collapse-item :title="question.title" :name="question.name">
          <p>{{ question.text }}</p>
        </el-collapse-item>
      </el-collapse>
    </base-content-container>
  </section>
</template>

<script>
import Banner from "../components/q-and-a/Banner.vue";

export default {
  components: {
    Banner,
  },
  data() {
    return {
      activeName: "1",
      componentKey: 0,
      getLang() {
        return localStorage.getItem("lang");
      },
      questions: [
        {
          id: 1,
          title: this.$t("q_a_title"),
          name: "1",
          text: this.$t("q_a_description"),
        },
        {
          id: 2,
          title: this.$t("q_a_title"),
          name: "2",
          text: this.$t("q_a_description"),
        },
        {
          id: 3,
          title: this.$t("q_a_title"),
          name: "3",
          text: this.$t("q_a_description"),
        },
        {
          id: 4,
          title: this.$t("q_a_title"),
          name: "4",
          text: this.$t("q_a_description"),
        },
        {
          id: 5,
          title: this.$t("q_a_title"),
          name: "5",
          text: this.$t("q_a_description"),
        },
        {
          id: 6,
          title: this.$t("q_a_title"),
          name: "6",
          text: this.$t("q_a_description"),
        },
        {
          id: 7,
          title: this.$t("q_a_title"),
          name: "7",
          text: this.$t("q_a_description"),
        },
        {
          id: 8,
          title: this.$t("q_a_title"),
          name: "8",
          text: this.$t("q_a_description"),
        },
        {
          id: 9,
          title: this.$t("q_a_title"),
          name: "9",
          text: this.$t("q_a_description"),
        },
        {
          id: 10,
          title: this.$t("q_a_title"),
          name: "10",
          text: this.$t("q_a_description"),
        },
      ],
    };
  },
  watch: {
    lang: {
      deep: true,
      handler() {
        this.questions = [
          {
            id: 1,
            title: this.$t("q_a_title"),
            name: "1",
            text: this.$t("q_a_description"),
          },
          {
            id: 2,
            title: this.$t("q_a_title"),
            name: "2",
            text: this.$t("q_a_description"),
          },
          {
            id: 3,
            title: this.$t("q_a_title"),
            name: "3",
            text: this.$t("q_a_description"),
          },
          {
            id: 4,
            title: this.$t("q_a_title"),
            name: "4",
            text: this.$t("q_a_description"),
          },
          {
            id: 5,
            title: this.$t("q_a_title"),
            name: "5",
            text: this.$t("q_a_description"),
          },
          {
            id: 6,
            title: this.$t("q_a_title"),
            name: "6",
            text: this.$t("q_a_description"),
          },
          {
            id: 7,
            title: this.$t("q_a_title"),
            name: "7",
            text: this.$t("q_a_description"),
          },
          {
            id: 8,
            title: this.$t("q_a_title"),
            name: "8",
            text: this.$t("q_a_description"),
          },
          {
            id: 9,
            title: this.$t("q_a_title"),
            name: "9",
            text: this.$t("q_a_description"),
          },
          {
            id: 10,
            title: this.$t("q_a_title"),
            name: "10",
            text: this.$t("q_a_description"),
          },
        ];
      },
    },
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
  },
};
</script>

<style>
.q-and-a p {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #4e68b2;
  margin-top: 2.5rem;
}

.q-and-a .el-collapse {
  margin: 1rem 0;
  border-radius: 16px;
}

.q-and-a .el-collapse .el-collapse-item {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
}

.q-and-a .el-collapse .el-collapse-item__header {
  background: #ffffff;
  border-radius: 16px;
  transition: all 0.5s ease;
  padding: 2rem;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
}

.q-and-a .el-collapse .el-collapse-item__header.is-active {
  border-radius: 16px 16px 0 0;
  position: relative;
}

.q-and-a .el-collapse .el-collapse-item__header.is-active::after {
  content: "";
  position: absolute;
  background-color: #e0e0e0;
  width: calc(100% - 4rem);
  height: 1px;
  left: 2rem;
  bottom: 0;
}

.q-and-a .el-collapse .el-collapse-item__wrap {
  border-radius: 0 0 16px 16px;
}

.q-and-a .el-collapse .el-collapse-item__content {
  padding: 1rem 2rem;
  border-radius: 0 0 16px 16px;
}

.q-and-a .el-collapse .el-collapse-item__content p {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  margin: 0;
  text-align: justify;
}
</style>