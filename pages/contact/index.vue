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

                <form name="contactus5" method="POST" data-netlify="true">
                <div class="row">
                  <div class="col col-md-12">
                    <label>
                      Your Name *:
                      <input type="text" name="name"  placeholder="Your full name" />
                    </label>
                  </div>
                  <div class="col col-md-12">
                    <label>
                      Your Phone *:
                      <input type="text" name="phone"  placeholder="Your phone" />
                    </label>
                  </div>
                  <div class="col col-md-12">
                    <label>
                      Your Email *:
                      <input type="email" name="email"  placeholder="Your email" />
                    </label>
                  </div>
                  <div class="col col-md-12">
                    <label>I am interested in *:</label>

                    <select
                      class="browser-default custom-select"
                      name="Interested_In"
                    >
                      <option selected :value="0">-- Please select --</option>
                      <option
                        :value="item.data.title[0].text"
                        v-for="(item, index) in menus"
                        :key="index"
                      >{{item.data.title[0].text}}</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="col col-md-12">
                    <label>Message:</label>
                    <textarea name="message" placeholder="Tell us a bit more about your query..."></textarea>
                  </div>
                      <div class="col-md-12" v-show="!validForm">
                    <div class="alert bg--error">
                      <div class="alert__body">
                        <span>Please write your name, email, phone and select what you are interested in.</span>
                      </div>
                    </div>
                  </div>
                  <div class="col col-md-12">
                    <button                      
                      type="submit"
                      class="btn block btn--primary type--uppercase"
                    >Send Enquiry</button>
                  </div>
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
        name: "",
        email: "",
        phone: ""
      },
      documentId: null,
      menus: null
    };
  },
  methods: {},
  computed: {
    validForm() {
      if (
        this.form.interested === 0 ||
        this.form.email === "" ||
        this.form.name === "" ||
        this.form.phone === ""
      ) {
        return false;
      } else {
        return true;
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
