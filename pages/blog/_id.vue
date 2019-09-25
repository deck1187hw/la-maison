<template>
  <div class="main-container">
    <div class="edit1 hidden-xs">
      <prismic-edit-button :documentId="documentId" />
    </div>
    <section class="unpad">
      <article>
        <div class="imagebg text-center height-50" data-overlay="5">
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
                  <div v-html="Dom.RichText.asHtml(document.main_text)"></div>
                </div>
              </div>
            </div>
          </div>
                    <hr />
          <div class="container text-center">
            <div class="row">
              <div class="col">
      <h3>Share on...</h3>
                 <client-only>
          <social-sharing
            :url="`${liveUrl}blog/${uid}`"
            :title="`${document.title[0].text}`"
            :description="`${getDescShort(Dom.RichText.asText(document.main_text), 500)}`"
            :quote="`${getDescShort(Dom.RichText.asText(document.main_text), 500)}`"
            hashtags="bbq,catering,sussex,mobile"
            twitter-user="@bbqmaison"
            inline-template
          >
            <div>
              <network network="facebook">
                <span class="btn">
                  <span class="btn__text">
                    <i class="socicon socicon-facebook icon icon--xs"></i> Facebook
                  </span>
                </span>
              </network>

              <network network="email">
                <span class="btn">
                  <span class="btn__text">
                    <i class="socicon socicon-email icon icon--xs"></i> Email
                  </span>
                </span>
              </network>

              <network network="twitter">
                <span class="btn">
                  <span class="btn__text">
                    <i class="socicon socicon-twitter icon icon--xs"></i> Twitter
                  </span>
                </span>
              </network>

              <network network="instagram">
                <span class="btn">
                  <span class="btn__text">
                    <i class="socicon socicon-twitter icon icon--xs"></i> Instagram
                  </span>
                </span>
              </network>

              <network network="pinterest">
                <span class="btn">
                  <span class="btn__text">
                    <i class="socicon socicon-pinterest icon icon--xs"></i> Pinterest
                  </span>
                </span>
              </network>

              <network network="whatsapp">
                <span class="btn">
                  <span class="btn__text">
                    <i class="socicon socicon-whatsapp icon icon--xs"></i> Whatsapp
                  </span>
                </span>
              </network>
            </div>
          </social-sharing>
        </client-only>
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
import PrismicDOM from "prismic-dom";
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
  methods: {
    getDescShort(yourString, maxLength = 10) {
      
      let trimmedString = yourString.substr(0, maxLength);
      //re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
      return trimmedString
    }
  },
  data: function() {
    return {
      document: null,
      documentId: null,
      liveUrl: process.env.liveUrl,
      Dom: PrismicDOM,
      uid: null
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
        document,
        uid: params.id,
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
