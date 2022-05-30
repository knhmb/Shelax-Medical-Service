<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 8px 32px;
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

button:hover,
button.is-active {
  background-color: #7690da;
  color: white;
  border-color: #7690da;
}
</style>