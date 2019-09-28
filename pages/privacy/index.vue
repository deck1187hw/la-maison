<template>
  <div class="main-container">
             <section class="bg--primary bg-maison space--sm">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
     </section>
    <section class="switchable">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12">
            <h2>Privacy Policy</h2>
            <Contentprismic v-bind:items="document.privacy_policy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Contentprismic from "~/components/Contentprismic.vue";

export default {
  components: {
    Contentprismic
  },
  head () {
    return {
      title: 'Privacy policy - La Maison Catering',
      meta: [
        { hid: 'description', name: 'description', content: 'Because our client´s data and privacy is important for us.' }
      ]
    }
  },
  data: function() {
    return {
      document: null,
      documentId: null
    };
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
      const result = await api.getSingle("homepage");
      document = result.data;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        documentId: result.id
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
</style>
