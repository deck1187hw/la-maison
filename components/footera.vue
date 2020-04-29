<template>
  <footer class="space--sm footer-1 text-center-xs bg--dark">
    <no-ssr>
      <cookie-law theme="dark-lime"></cookie-law>
    </no-ssr>
    <div class="container">
      <div class="row text-center">
        <div class="col-sm-12"></div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <ul class="list-inline list--hover">
            <li>
              <a href="/about/">
                <span class="h6 type--uppercase">About us</span>
              </a>
            </li>
            <li>
              <a href="/contact/">
                <span class="h6 type--uppercase">Contact</span>
              </a>
            </li>
            <li>
              <a href="/menus/">
                <span class="h6 type--uppercase">Our Menus</span>
              </a>
            </li>
          </ul>
          <div class="">
            Email:
            <a :href="`mailto:${document.email}`">{{ document.email }}</a>
            <br />
            Phone: <a :href="`tel:${document.phone}`">{{ document.phone }}</a>
          </div>
        </div>

        <div class="col-sm-6 text-right-md text-center-xs">
          <Social />

          <a href="https://www.poptop.uk.com/supplier/la-maison-mobile-bbq/">
            <b-img
              alt="LA MAISON - Mobile BBQ Service in Sussex"
              src="https://prismic-io.s3.amazonaws.com/maisonbbq%2F57697e84-aca3-4d51-b8b7-9338d8617871_logoa.png"
            ></b-img>
          </a>
          <a
            target="_parent"
            href="https://www.addtoevent.co.uk/la-maison-mobile-bbq-and-catering-service"
            ><img
              src="https://www.addtoevent.co.uk/sites/default/files/badges/top_rated_circular_white_medium.png"
              alt="Add To Event Featured Supplier"
          /></a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <a href="/privacy/" class="type--fine-print">
            <span>Privacy Policy</span></a
          >

          <a href="/sitemap.xml" class="type--fine-print" target="_blank">
            <span>Sitemap</span>
          </a>
          <br />
          <span class="type--fine-print">
            ©
            <span class="update-year"></span> LA MAISON - Mobile BBQ Service in
            Sussex
          </span>
          <br />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

import Social from "~/components/Social.vue";
export default {
  components: {  Social },
  data: function() {
    return {
      document: {
        phone: "+44 (0)7539957483",
        email: "info@lamaisonmobilecatering.com"
      }
    };
  },
  computed: {}
};
</script>
<style scoped>
footer .logo {
  max-height: 4.671429em;
}
</style>
