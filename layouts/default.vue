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
.edit1{
  position:absolute;
  top:0px;
  padding:10px;
}
.edit1 img{
  width:10px !important;
  opacity: .5 !important;
}
</style>
