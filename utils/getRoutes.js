//https://nebulab.it/blog/create-fast-nuxtjs-website-prismic/

const PrismicConfig = require("../prismic.config");
import Prismic from "prismic-javascript";

module.exports = async function getAppRoutes() {

    const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
    const blogPosts = api
      .query(Prismic.Predicates.at("document.type", "blog"))
      .then(response => {
        return response.results.map(payload => {
          return {
            route: `/blog/${payload.uid}`,
            payload
          };
        });
      });

    const menus = api
      .query(Prismic.Predicates.at("document.type", "menus"))
      .then(response => {
        return response.results.map(payload => {
          return {
            route: `/menus/${payload.uid}`,
            payload
          };
        });
      });
    return Promise.all([blogPosts, menus]).then(values => {
      return [...values[0], ...values[1]];
    });

};
