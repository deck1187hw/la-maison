<template>
  <div class="main-container">
    <section class="unpad">
      <article>
        <div class="imagebg text-center height-30" data-overlay="8">
          <div class="background-image-holder">
            <b-img :src="document.main_image.url" :alt="document.title[0].text"></b-img>
          </div>
          <div class="container pos-vertical-center">
            <div class="row">
              <div class="col-md-12">
                <div class="article__title">
                  <h1>{{document.title[0].text}}</h1>
                  <span>{{ document.date | moment('LL') }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="pos-absolute pos-bottom col-12 text-center" v-if="document.author">
            <div class="article__author">
              <h6 class="type--uppercase">{{document.author}}</h6>
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-8">
                <Contentprismic v-bind:items="document.subtitle" />
                <div class="article__body">
                  <Contentprismic v-bind:items="document.main_text" />
                </div>
                <div class="article__share text-center">
                  <a class="btn bg--facebook btn--icon" href="#">
                    <span class="btn__text">
                      <i class="socicon socicon-facebook"></i>
                      Share on Facebook
                    </span>
                  </a>
                  <a class="btn bg--twitter btn--icon" href="#">
                    <span class="btn__text">
                      <i class="socicon socicon-twitter"></i>
                      Share on Twitter
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Contentprismic from "~/components/Contentprismic.vue";
export default {
  components: {
    Contentprismic
  },
  head() {
    let description = "";
    if (this.document.subtitle.length > 0) {
      description = this.document.subtitle[0].text;
    }
    return {
      title: this.document.title[0].text,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: description }
      ]
    };
  },
  data: function() {
    return {
      document: null
    };
  },
  created() {
    if (process.browser) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      document.body.appendChild(sc1);
    }
  },
  async asyncData({ query, params, error, req }) {
    try {
      console.log(params);
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getByUID("blog", params.id);

      document = result.data;

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

<style>
</style>
