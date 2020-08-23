import Vue from 'vue';
import Vuex from 'vuex';
import sentenceClient from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dailySavedSentence: '',
  },
  mutations: {
    SET_DAILY_SAVED_SENTENCE(state, sentence) {
      state.dailySavedSentence = sentence;
    },
  },
  actions: {
    async createSentence({ commit }, { sentence }) {
      const userId = '5f34ab8c85c0bcf75f0013d4';
      const res = await sentenceClient.create({
        user: userId,
        sentence,
      });
      console.log('sentence create response', res);
      commit('SET_DAILY_SAVED_SENTENCE', res.data.text);
    },
  },
  modules: {
  },
});
