import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export const state = () => ({
  navigation: {}
});

export const getters = {
    navigation: state => {
        return state.navigation
    }
};

export const mutations = {
    SET_NAVIGATION(state, data) {
    state.navigation = data;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    try {
        const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

        let navigation = {};
        const result = await api.getSingle("navigation");
        navigation = result.data;
        commit("SET_NAVIGATION", navigation);
  
      } catch (e) {
        error({ statusCode: 404, message: "Page not found" });
      }
   
  }
};