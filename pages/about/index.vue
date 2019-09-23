<template>
<div class="main-container">
       <div class="edit1 hidden-xs "><prismic-edit-button :documentId="documentId" /></div>

            <section>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-6">
                            <h1>About us</h1>
                             <Contentprismic v-bind:items="document.about_text" />

                        </div>
                        <div class="col-md-6">
                            <div class="boxed boxed--border  bg--secondary boxed--lg box-shadow"> 
                                <b-img :src="document.image_about.url" fluid  class="border--round" alt="Team"></b-img>

  <Contentprismic v-bind:items="document.text_below_image" />
                                  </div>
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
  data: function() {
    return {
      document: null,
      documentId: null
    };
  },
  methods: {
      testGenerate: async function () {
           const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
 
            const menus = api.query(Prismic.Predicates.at('document.type', 'menus'))
                .then(response => {
                    return response.results.map(payload => {
                    return {
                        route: `/menus/${payload.uid}`,
                        payload
                    }
                    })          
                })
                return Promise.all([menus]).then(values => {
                    return [...values[0]]
                })
      }
  },
  created() {
      this.testGenerate()
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
      const result = await api.getSingle("about_us");
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
}
</script>

<style>
</style>
