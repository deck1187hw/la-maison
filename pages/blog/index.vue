<template>
  <div class="main-container">
    <section class="bg--primary bg-maison space--sm">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1>
              La Maison Catering
              <strong>Blog</strong>
            </h1>
            <p class="lead">Last updates, trends and receipes around BBQ and Catering.</p>
          </div>
        </div>
      </div>
    </section>
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
                    <a :href="`/blog/${item.uid}`" class="block wrpimg">
                      <b-img
                        :src="item.data.main_image.url"
                        fluid
                        :alt="item.data.title[0].text"
                        class="img-bl"
                      ></b-img>
                    </a>
                    <div class="feature__body boxed boxed--border">
                      <h5>{{item.data.title[0].text}}</h5>
                      <a href="`/blog/${item.uid}`">Read more</a>
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
  head() {
    return {
      title: "Our Blog - La Maison Catering",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Get the last trends on BBQ and catering andlearn how to get the best out of your BBQ."
        }
      ]
    };
  },
  created() {},
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.query(
        Prismic.Predicates.at("document.type", "blog"),
        { orderings: "[document.first_publication_date desc]" }
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
.wrpimg {
  height: 150px;
  overflow: hidden;
  background: black;
}
.img-bl {
  width: 100%;
}
</style>
