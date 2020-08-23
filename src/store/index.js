import Vue from 'vue';
import Vuex from 'vuex';
import { sentenceClient } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dailySavedSentence: {},
  },
  getters: {
    dailySavedSentence: (state) => state.dailySavedSentence,
  },
  mutations: {
    SET_DAILY_SAVED_SENTENCE(state, sentence) {
      state.dailySavedSentence = sentence;
    },
  },
  actions: {
    async createSentence({ commit }, { text }) {
      const userId = '5f34ab8c85c0bcf75f0013d4';
      const res = await sentenceClient.create({
        userId,
        text,
        date: new Date(),
      });
      commit('SET_DAILY_SAVED_SENTENCE', res.data.sentence);
    },
  },
  modules: {
  },
});
