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
              <form
                class="form-email row"
                data-success="Thanks for your enquiry, we'll be in touch shortly."
                data-error="Please fill in all fields correctly."
              >
                <div class="col-md-6">
                  <label>Your Name:</label>
                  <input type="text" name="name" class="validate-required" />
                </div>
                <div class="col-md-6">
                  <label>Email Address:</label>
                  <input type="email" name="email" class="validate-required validate-email" />
                </div>
                <div class="col-md-12">
                  <label>Message:</label>
                  <textarea rows="4" name="Message" class="validate-required"></textarea>
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
      documentId: null
    };
  },
  created() {},
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("contact");
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
