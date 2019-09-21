<template>
  <div>
    <navmenu />
    <nuxt />
    <footera />
  </div>
</template>
<script>
import $ from "jquery";

import navmenu from "~/components/navmenu.vue";
import footera from "~/components/footera.vue";
export default {
  components: {
    navmenu,
    footera
  },
  created() {
 
  },
  mounted() {}
};
</script>
<style>
</style>
