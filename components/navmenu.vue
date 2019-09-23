<template>
  <div class="nav-container">
    <div>
      <div class="bar bar--sm visible-xs">
        <div class="container">
          <div class="row">
            <div class="col-3 col-md-2">
              <nuxt-link :to="`/`">
                <img class="logo logo-dark" alt="logo" src="https://maisonbbq.cdn.prismic.io/maisonbbq/ffdb5088ccda770803b31eb87dc1e469263df108_logo-dark.png" />
                <img class="logo logo-light" alt="logo" src="https://maisonbbq.cdn.prismic.io/maisonbbq/67bf982f2e292aff83feb64d03b69d7d54773e79_logo-light.png" />
              </nuxt-link>
            </div>
            <div class="col-9 col-md-10 text-right">
              <a href="#" class="hamburger-toggle" data-toggle-class="#menu2;hidden-xs hidden-sm">
                <i class="icon icon--sm stack-interface stack-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu2" class="bar bar-2 hidden-xs">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
              <div class="bar__module">
                <nuxt-link :to="`/`">
                  <img class="logo logo-dark" alt="logo" src="https://maisonbbq.cdn.prismic.io/maisonbbq/ffdb5088ccda770803b31eb87dc1e469263df108_logo-dark.png" />
                  <img class="logo logo-light" alt="logo" src="https://maisonbbq.cdn.prismic.io/maisonbbq/67bf982f2e292aff83feb64d03b69d7d54773e79_logo-light.png" />
                 </nuxt-link>
              </div>
            </div>
            <div class="col-lg-5 order-lg-1">
              <div class="bar__module">
                <ul class="menu-horizontal text-left" v-if="navigation">
                  <li
                    v-for="(item, index) in navigation.nav"
                    :key="index"
                    v-bind:class="{ dropdown: item.items.length > 0 }"
                  >
                    <nuxt-link
                      v-if="item.items.length === 0"
                      :to="item.primary.sub_navi_link"
                    >{{item.primary.label[0].text}}</nuxt-link>
                    <span
                      class="dropdown__trigger"
                      v-if="item.items.length > 0"
                    >{{item.primary.label[0].text}}</span>
                    <div class="dropdown__container" v-if="item.items.length > 0">
                      <div class="container">
                        <div class="row">
                          <div class="dropdown__content col-lg-2">
                            <ul class="menu-vertical">
                              <li v-for="(subitem, indexs) in item.items" :key="indexs">
                                <nuxt-link
                                  v-if="subitem.sub_nav_link_label.length>0"
                                  :to="subitem.sub_navi_link"
                                >{{subitem.sub_nav_link_label[0].text}}</nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
              <div class="bar__module">
                  <nuxt-link class="btn btn--sm type--uppercase btn--primary" :to="`/contact/`">
                    <span class="btn__text">Contact us</span>
                  </nuxt-link>               
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  components: {},
  data: function() {
    return {
      document: null,
      documentId: null
    };
  },
  computed: {
    navigation() {
      return this.$store.getters.navigation;
    }
  }
};
</script>
<style scoped>
.bar {
  padding: 1em 0;
}
.bar .logo {
  max-height: inherit;
  max-width: inherit;
  height: 80px;
}
</style>