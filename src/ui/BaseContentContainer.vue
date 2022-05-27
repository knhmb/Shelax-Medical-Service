<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.content-container {
  padding: 0 12rem;
}

@media screen and (max-width: 991px) {
  .content-container {
    padding: 0 3rem;
  }
}

@media screen and (max-width: 767px) {
  .content-container {
    padding: 0 1rem;
  }
}
</style>