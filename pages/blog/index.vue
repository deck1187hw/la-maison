<template>
  <div class="main-container">
    <section class="space--sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="masonr2y">
              <div class="row">
                <div
                  class="col-lg-4 col-md-6"
                  v-for="(item, index) in document.results"
                  :key="index"
                >
                  <article class="feature feature-1">
                    <nuxt-link :to="`/blog/${item.uid}`" class="block wrpimg">
                      <b-img :src="item.data.main_image.url" fluid :alt="item.data.title[0].text" class="img-bl"></b-img>
                    </nuxt-link>
                    <div class="feature__body boxed boxed--border">
                      <h5>{{item.data.title[0].text}}</h5>
                      <nuxt-link :to="`/blog/${item.uid}`">Read more</nuxt-link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <!--end masonry-->
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
  created() {},
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.query(Prismic.Predicates.at("document.type", "blog"),{ orderings : '[document.first_publication_date desc]' })
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
.wrpimg{
  height: 150px;
  overflow: hidden;
  background: black;
}
.img-bl{
  width: 100%
}
</style>
