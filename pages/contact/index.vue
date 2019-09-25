<template>
  <div class="main-container">
    <div class="edit1 hidden-xs">
      <prismic-edit-button :documentId="documentId" />
    </div>
    <section class="switchable">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <b-img :src="document.image.url" fluid :alt="document.text_contact.text"></b-img>
          </div>
          <div class="col-md-6">
            <div class="boxed boxed--lg boxed--border bg--secondary">
              <Contentprismic v-bind:items="document.text_contact" />
              <div class="row mx-0 switchable__text flex-column">
                <p class="lead">
                  E:
                  <a :href="`mailto:${document.email}`">{{document.email}}</a>
                  <br />
                  P: {{document.phone}}
                </p>

                <hr class="short" />
                

                <form name="contactus1" method="POST" data-netlify="true" action="/pages/success">
<div class="col-md-6">
    <label>Your Name: <input type="text" name="name" /></label>   
</div>
  <div class="col-md-6">
    <label>Your Email: <input type="email" name="email" /></label>
  </div>

  <div class="col-md-6">
    <label>Message: <textarea name="message"></textarea></label>
  </div>
 <div class="col-md-5 col-lg-4">
                    <button type="submit" class="btn btn--primary type--uppercase">Send Enquiry</button>
                  </div>
</form>
                <hr class="short" />
                <Contentprismic v-bind:items="document.text_contact_below" />
              </div>
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
      form: {
        interested: 0,
        name: '',
        email: '',
        phone: ''
      },
      documentId: null,
      menus: null
    };
  },
  methods: {
      
  },
  computed: {
      validForm() {
        if(this.form.interested === 0 || this.form.email === '' || this.form.name === '' || this.form.phone === ''){
          return false
        }else{
          return true
        }
      }
  },
  created() {},
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("contact");
      document = result.data;

      let menus = {};
      const resultmenus = await api.query(
        Prismic.Predicates.at("document.type", "menus")
      );
      menus = resultmenus;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        documentId: result.id,
        menus: resultmenus.results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style>
</style>
