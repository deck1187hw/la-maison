<template>
  <div class="main-container">
     <section class="bg--primary bg-maison space--sm">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1>Discover our menus</h1>
            <p class="lead">Get in touch with us If you need any specific requirements</p>
          </div>
        </div>
      </div>
     </section>
    <section
      class="imageblock switchable feature-large bg--secondary space--xs bg-maison__white"
      v-for="(item, index) in document.results"
      :key="index"
      :class="{'switchable--switch': index % 2 !== 0 }"
    >
      <div class="imageblock__content col-lg-6 col-md-4 pos-right">
        <div class="background-image-holder">
          <b-img :src="item.data.main_photo.url" fluid :alt="item.data.title[0].text"></b-img>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-7">
            <h2>{{item.data.title[0].text}}</h2>        
            <p>
              <nuxt-link class="btn btn--lg type--uppercase btn--primary" :to="`/menus/${item.uid}`">
                <span class="btn__text">View menu</span>
              </nuxt-link>
            </p>
            <p v-if="item.data.pdf_menu.url">
                <i class="icon-doc icons"></i>
              <a
                :href="item.data.pdf_menu.url"
                target="_blank"
                alt="Download menu"
              ><span class="btn__text"> Download PDF menu </span></a>

            
            </p>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  components: {},
  data: function() {
    return {
      document: null
    };
  },

  head () {
    return {
      title: 'Our menus - La Maison Catering',
      meta: [
        { hid: 'description', name: 'description', content: 'Menus tailored for your specific needs, ask us for more.' }
      ]
    }
  },
  created() {
    if (process.browser) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      document.body.appendChild(sc1);
    }
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.query(
        Prismic.Predicates.at("document.type", "menus")
      );
      document = result;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
.bg-maison__white {
  background: url("/img/bg2.png") white;
}
</style>
