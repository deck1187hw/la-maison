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
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://lamaisonmobilecatering.com' + this.$route.path,
        },
      ],
    }
  },
  created() {},
  mounted() {}
};
</script>
<style>
.edit1 {
  position: absolute;
  top: 0px;
  padding: 10px;
}
.edit1 img {
  width: 10px !important;
  opacity: 0.5 !important;
}
h1,
h2,
h3,
h4 {
  color: #bb4a28;
}
</style>
