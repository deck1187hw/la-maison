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
    if (process.browser) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      document.body.appendChild(sc1);
    }
  },
  mounted() {}
};
</script>
<style>
</style>
