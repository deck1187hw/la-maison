<template>
  <div class="main-container" v-if="document">
    <div class="edit1 hidden-xs">
      <prismic-edit-button :documentId="documentId" />
    </div>
    <section>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-7">
            <div class="boxed boxed--border bg--secondary boxed--lg box-shadow bg-maison__white">
              <h1 class="title" v-html="Dom.RichText.asText(document.title)"></h1>
              <div class="lead" v-html="Dom.RichText.asHtml(document.top_description)"></div>
              <div v-html="Dom.RichText.asHtml(document.menu_content)"></div>
              <hr />
              <div v-html="Dom.RichText.asHtml(document.bottom_description)"></div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="boxed boxed--border bg--secondary boxed--lg box-shadow">
              <b-img :src="document.main_photo.url" fluid class="border--round" alt="Team"></b-img>
              <p v-if="document.pdf_menu.url">
                <i class="icon-doc icons"></i>
                <a :href="document.pdf_menu.url" target="_blank" alt="Download menu">
                  <span class="btn__text">Download PDF menu</span>
                </a>
              </p>
              <hr />

              <div
                class="slider"
                data-arrows="true"
                data-timing="5000"
                data-paging="true"
                v-if="document.photos_side.length>0"
              >
                <ul class="slides">
                  <li v-for="(item, index) in document.photos_side" :key="index">
                    <b-img :src="item.photo_menu.url" :alt="Dom.RichText.asText(document.title)"></b-img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";
export default {
  components: {
  },
  head() {
    let description = "";
    if (this.document.top_description.length > 0) {
      description = this.document.top_description[0].text;
    }
    return {
      title: this.document.title[0].text,
      meta: [{ hid: "description", name: "description", content: description }]
    };
  },
  data: function() {
    return {
      Dom: PrismicDOM,
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
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      let document = {};
      const result = await api.getByUID("menus", params.id);
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

<style>
</style>
