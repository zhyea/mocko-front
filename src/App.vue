
<template>
  <router-view></router-view>
</template>


<script setup>
console.log(import.meta.env);
</script>


<style scoped>
.main {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
