<template>
  <div :class="{ hide: hide }" class="member-card-categories">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["hide"],
  // created() {
  //   console.log(this.hide);
  // },
};
</script>

<style scoped>
.member-card-categories {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 16px;
  position: relative;
}

.member-card-categories::after {
  content: "";
  position: absolute;
  background-color: #e0e0e0;
  width: 100%;
  height: 1px;
  top: 3.7rem;
  left: 0;
}

.hide.member-card-categories::after {
  display: none;
}
</style>