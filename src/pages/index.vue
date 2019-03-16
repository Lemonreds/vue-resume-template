<template>
  <div class="index">
    <router-link to="/resume/gray">默认主题</router-link>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.component("resume", {
  name: "app"
});
</script>

<style scoped>
.index {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
