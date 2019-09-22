<template>
  <div class="main-container">
    <section class="switchable">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12">
            <h2>Privacy Policy</h2>
            <contentprismic v-bind:items="document.privacy_policy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import contentprismic from "~/components/contentprismic.vue";

export default {
  components: {
    contentprismic
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
