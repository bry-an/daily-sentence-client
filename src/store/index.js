import Vue from 'vue';
import Vuex from 'vuex';
import { sentenceClient, userClient } from '../api';

Vue.use(Vuex);

const getDefaultState = () => ({
  dailySavedSentence: {},
  sentences: [],
});

const state = getDefaultState;

const getters = {
  dailySavedSentence: (state) => state.dailySavedSentence,
  sentences: (state) => state.sentences,
};

const mutations = {
  SET_DAILY_SAVED_SENTENCE(state, sentence) {
    state.dailySavedSentence = sentence;
  },
  SET_SENTENCES(state, sentences) {
    state.sentences = sentences;
  },
};
const actions = {
  async createSentence({ commit }, { text }) {
    const userId = '5f34ab8c85c0bcf75f0013d4';
    const res = await sentenceClient.create({
      userId,
      text,
      date: new Date(),
    });
    commit('SET_DAILY_SAVED_SENTENCE', res.data.sentence);
  },
  async fetchSentences({ commit }) {
    const userId = '5f34ab8c85c0bcf75f0013d4';
    console.log('fetching sentences');
    const res = await userClient.fetchSentences(userId);
    commit('SET_SENTENCES', res.data.sentences);
  },
};

export default new Vuex.Store({
  state, getters, actions, mutations,
});
