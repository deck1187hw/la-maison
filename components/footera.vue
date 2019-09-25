<template>
  <footer class="space--sm footer-1 text-center-xs bg--dark">
    <client-only>
    <cookie-law theme="dark-lime"></cookie-law>
    </client-only>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <ul class="list-inline list--hover">
            <li>
              <nuxt-link to="/about/">
                <span class="h6 type--uppercase">About us</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact/">
                <span class="h6 type--uppercase">Contact</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/menus/">
                <span class="h6 type--uppercase">Our Menus</span>
              </nuxt-link>
            </li>
             <li>
              <a href="/sitemap.xml" target="_blank">
                <span class="h6 type--uppercase">Sitemap</span>
              </a>
            </li>
          </ul>
           <div class="">
                  Email:
                  <a :href="`mailto:${document.email}`">{{document.email}}</a>
                  <br />
                  Phone: <a :href="`tel:${document.phone}`">{{document.phone}}</a>
                </div>
        </div>
       
        <div class="col-sm-6 text-right text-center-xs">
          <Social />

<a href="https://www.poptop.uk.com/supplier/la-maison-mobile-bbq/">
          <b-img alt="LA MAISON - Mobile BBQ Service in Sussex" src="https://prismic-io.s3.amazonaws.com/maisonbbq%2F57697e84-aca3-4d51-b8b7-9338d8617871_logoa.png"></b-img>
</a>
                
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">

          <span class="type--fine-print">
            ©
            <span class="update-year"></span> LA MAISON - Mobile BBQ Service in Sussex
          </span>
          <nuxt-link to="/privacy" class="type--fine-print">
          Privacy Policy</nuxt-link>
          
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import CookieLaw from 'vue-cookie-law'
import Social from "~/components/Social.vue";
export default {
  components: {CookieLaw, Social},
  data: function() {
    return {
      document: {
        phone: '+44 (0)7539957483',
        email: 'info@lamaisonmobilecatering.com'
      }
    };
  },
  computed: {
  }
};
</script>
<style scoped>
footer .logo {
  max-height: 4.671429em;
}
</style>