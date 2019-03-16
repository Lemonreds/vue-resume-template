<template>
  <div class="page" :id="$route.params.resumeid">
    <component :is="$route.params.resumeid"></component>
  </div>
</template>

<script>
import Vue from "vue";
import gray from "../resumes/gray.vue";
export default {
  name: "resume",
  components: {
    gray
  }
};
</script>

<style scoped>
.page {
  position: relative;
  width: 21cm;
  height: 29.68cm;
  background: #fff;
}
.page-inner {
  width: 100%;
  height: 100%;
}
</style>
