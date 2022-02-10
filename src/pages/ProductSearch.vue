<template>
  <section class="product-search">
    <Search />
    <Main />
  </section>
</template>

<script>
import Search from "../components/product-search/Search.vue";
import Main from "../components/product-search/Main.vue";

export default {
  components: {
    Search,
    Main,
  },
};
</script>