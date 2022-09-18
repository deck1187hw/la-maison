<template>
  <div class="main-container">
    <section class="text-center bg--dark space--xxs">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <p class="lead">
              Our priority is the health and well-being of our staff and
              customers. During our services, we have put in place a number of
              measures to keep everyone safe.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="cover imagebg text-center height-80 section--ken-burns"
      data-overlay="5"
    >
      <div class="background-image-holder">
        <b-img :src="document.heading_image.url"></b-img>
      </div>
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-9 col-lg-8">
            <b-img
              src="https://prismic-io.s3.amazonaws.com/maisonbbq%2Fe25bef4c-8ed7-4969-89d9-622836a2f63f_logo-light.png"
              fluid
              alt="LA MAISON"
            ></b-img>
            <p class="lead">Sussex, UK</p>
            <div class="visible-xs">
              <b-img
                alt="Seaheaven Business Awards 2022"
                width="120"
                style="padding-top:18px"
                src="https://images.prismic.io/maisonbbq/6bbbe44f-ce56-4492-a160-b38aae7ab9e6_winners_logo2022.jpg?auto=compress,format"
              ></b-img>
              <b-img
                width="190"
                
                alt="Food Hygiene Rating 5 - La Maison BBQ"
                src="https://maisonbbq.cdn.prismic.io/maisonbbq/9f1fd00f2d122d7047be9022d2763f69204282f9_food-300x198.jpg"
                fluid
              ></b-img>
            </div>
          </div>
        </div>
      </div>
      <div class="info-top-ab hidden-xs">
        <b-img
          alt="Seaheaven Business Awards 2022"
          src="https://images.prismic.io/maisonbbq/6bbbe44f-ce56-4492-a160-b38aae7ab9e6_winners_logo2022.jpg?auto=compress,format"
          fluid
        ></b-img>
        <b-img
          alt="Food Hygiene Rating 5 - La Maison BBQ"
          src="https://maisonbbq.cdn.prismic.io/maisonbbq/9f1fd00f2d122d7047be9022d2763f69204282f9_food-300x198.jpg"
          fluid
        ></b-img>
      </div>
    </section>

    <section class="bg--primary bg-maison space--sm">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="heading-block">
              <h1>Catering Service in Sussex</h1>
            </div>
            <div class="text-block">
              <p class="lead">
                <b>LA MAISON – Catering Service</b> company is located in
                Sussex. We are the Mobile BBQ catering specialists in the Sussex
                area. We love to cater and serve fantastic canapés, dinners,
                barbecues, buffets as well to design and organise beautiful
                weddings, corporate events and private parties.
              </p>
              <p>
                We use
                <b>authentic charcoal</b> and woods for an unforgettable BBQ
                experience. Barbecuing techniques include smoking, roasting or
                baking, braising and grilling. We not only offer a
                <b>personalised menu</b>, you also have the choice of bespoke
                menus and different styles, like traditional, smokey or Thai.
                Our professional team can cater for all eventualities.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="boxed boxed--lg boxed--border bg--secondary">
              <b-img
                :src="document.main_image.url"
                class="border--round"
              ></b-img>
              <p>
                We provide the best home barbecue cooking in the South of
                England. LA MAISON will serve you quality hand prepared barbecue
                cuisine with flawless service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="imagebg space--md section--ken-burns space--sm"
      data-overlay="5"
    >
      <div class="background-image-holder">
        <b-img
          :src="document.image_section_2.url"
          class="border--round"
        ></b-img>
      </div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="heading-block">
              <h2>Tailored to your event</h2>
            </div>
            <div class="text-block">
              <p class="lead">
                Whether you are sourcing event catering services in the Sussex
                area for particular themed parties, barbecues, birthday parties
                or even just intimate private parties we have some inspirational
                ideas for any catering event.
              </p>
              <p>
                We pride ourselves on our outstanding service and food,
                delivered in a fun but highly professional manner. Our goal is
                to ensure the complete satisfaction of every customer while
                offering professional and friendly catering services at
                affordable rates. We will exceed your expectations by creating
                custom menus and décor to fit your unique taste.
              </p>
              <p>
                We cater all of your favourites dishes with a hip new spin on
                traditional cuisine. We only use fresh local ingredients.
                Whether you need us to cater for a breakfast, lunch, dinner or
                anything in between, we’ve got you covered. For your next event,
                choose LA MAISON – Mobile BBQ Service
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="boxed boxed--lg boxed--border bg--secondary">
              <b-img
                v-if="document.tailored_event_small_image.url"
                :src="document.tailored_event_small_image.url"
                class="border--round"
              ></b-img>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="feature-large switchable switchable--switch bg-maison__white space--sm"
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6 col-md-6">
            <b-img
              :src="document.options_for_everyone_image.url"
              alt="Options for everyone"
            ></b-img>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="boxed boxed--lg boxed--border bg--secondary">
              <div class="heading-block">
                <h2>Options for everyone</h2>
              </div>
              <div class="text-block">
                <p>
                  Exquisite food and impeccable service can make your party even
                  more memorable and unique. LA MAISON Mobile BBQ Catering
                  recommends your barbecue meal to be cooked in front of the
                  quests and served buffet style. The main reason for this is
                  that we strongly believe it is a good fit for a bbq style menu
                  – It allows your guests to customise what they want on their
                  plates in terms of both quantity and selection from the
                  barbecue wedding buffet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg--dark space--sm">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-6"
            v-for="(item, index) in menus.results"
            :key="index"
          >
            <nuxt-link class="block" :to="`/menus/${item.uid}`">
              <div
                class="feature feature-7 boxed text-center imagebg"
                data-overlay="3"
              >
                <div class="background-image-holder">
                  <b-img
                    :src="item.data.main_photo.url"
                    fluid
                    :alt="item.data.title[0].text"
                  ></b-img>
                </div>
                <h4 class="pos-vertical-center">
                  {{ item.data.title[0].text }}
                </h4>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="bg--secondary space--sm">
      <div class="container">
        <div class="row text-block">
          <div class="col-md-12">
            <h3>Our recent stories</h3>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-4"
            v-for="(item, index) in blogs.results"
            :key="index"
          >
            <article class="feature feature-1">
              <nuxt-link :to="`/blog/${item.uid}`" class="block wrpimg">
                <b-img
                  :src="item.data.main_image.url"
                  fluid
                  :alt="item.data.title[0].text"
                  class="img-bl"
                ></b-img>
              </nuxt-link>
              <div class="feature__body boxed boxed--border">
                <h5>{{ item.data.title[0].text }}</h5>
                <nuxt-link :to="`/blog/${item.uid}`">Read more</nuxt-link>
              </div>
            </article>
          </div>
        </div>
        <div class="row text-center">
          <div class="col">
            <p>
              <nuxt-link
                :to="`/blog/`"
                class="btn btn--lg btn--secondary type--uppercase"
              >
                <span class="btn__text">View our blog</span>
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center bg--primary space--sm bg-maison">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10">
            <div class="slider" data-paging="true" data-arrows="true">
              <ul class="slides">
                <li v-for="(item, index) in document.quote" :key="index">
                  <div class="testimonial">
                    <blockquote v-if="item.title[0]">
                      “{{ item.title[0].text }}”
                    </blockquote>
                    <div v-if="item.comment[0]">{{ item.comment[0].text }}</div>
                    <h5 v-if="item.name">{{ item.name }}</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg--dark space--sm">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="slider"
              data-arrows="true"
              data-paging="true"
              data-timing="7000"
            >
              <ul class="slides">
                <li
                  class="col-md-6 col-12"
                  v-for="(item, index) in document.slideshow_images"
                  :key="index"
                >
                  <div
                    class="project-thumb hover-element border--round hover--active"
                    v-if="item.image.url"
                  >
                    <a href="#">
                      <div class="hover-element__initial">
                        <div class="background-image-holder">
                          <b-img
                            :src="item.image.url"
                            fluid
                            :alt="item.title"
                          ></b-img>
                        </div>
                      </div>
                      <div class="hover-element__reveal" data-scrim-top="5">
                        <div class="project-thumb__title">
                          <h4 v-if="item.title">{{ item.title }}</h4>
                          <span v-if="item.subtitle">{{ item.subtitle }}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="edit1 hidden-xs">
      <prismic-edit-button :documentId="documentId" />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import _id from "./menus/_id.vue";

export default {
  components: {
    Logo,
    _id,
  },
  data: function () {
    return {
      document: null,
      documentId: null,
      menus: null,
      blogs: null,
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

      let menus = {};
      const resultmenus = await api.query(
        Prismic.Predicates.at("document.type", "menus")
      );
      menus = resultmenus;

      let blogs = {};
      const resultblogs = await api.query(
        Prismic.Predicates.at("document.type", "blog"),
        { pageSize: 3 }
      );
      blogs = resultblogs;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        blogs,
        menus: menus,
        documentId: result.id,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style scoped>
.info-top-ab {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 140px;
}
.wrpimg {
  height: 150px;
  overflow: hidden;
  background: black;
}
.img-bl {
  width: 100%;
}
</style>
