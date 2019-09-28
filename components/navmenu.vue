<template>
  <div class="nav-container">
    <div>
      <div class="bar bar--sm visible-xs">
        <div class="container">
          <div class="row">
            <div class="col-3 col-md-2">
              <a href="/">
                <img class="logo logo-dark" alt="logo" src="https://prismic-io.s3.amazonaws.com/maisonbbq%2F612d396f-83ea-404d-b1fc-856a3a6ba2b0_logo-dark.png" />
                <img class="logo logo-light" alt="logo" src="https://prismic-io.s3.amazonaws.com/maisonbbq%2Fe25bef4c-8ed7-4969-89d9-622836a2f63f_logo-light.png" />
              </a>
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
                 <a href="/">
                  <img class="logo logo-dark" alt="logo" src="https://prismic-io.s3.amazonaws.com/maisonbbq%2F612d396f-83ea-404d-b1fc-856a3a6ba2b0_logo-dark.png" />
                  <img class="logo logo-light" alt="logo" src="https://prismic-io.s3.amazonaws.com/maisonbbq%2Fe25bef4c-8ed7-4969-89d9-622836a2f63f_logo-light.png" />
                 </a>
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
                    <a
                      v-if="item.items.length === 0"
                      :href="item.primary.sub_navi_link"
                    >{{item.primary.label[0].text}}</a>
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
                                <a
                                  v-if="subitem.sub_nav_link_label.length>0"
                                  :href="subitem.sub_navi_link"
                                >{{subitem.sub_nav_link_label[0].text}}</a>
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
                  <a class="btn btn--sm type--uppercase btn--primary" :href="`/contact/`">
                    <span class="btn__text">Contact us</span>
                  </a>               
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