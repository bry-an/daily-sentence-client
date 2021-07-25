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
        const userId = '60fb909e3e17d245f11f1c80';
        const res = await sentenceClient.create({
            userId,
            text,
            date: new Date(),
        });
        commit('SET_DAILY_SAVED_SENTENCE', res.data.sentence);
    },
    async fetchSentences({ commit }) {
        const userId = '60fb909e3e17d245f11f1c80';
        const res = await userClient.fetchSentences(userId);
        commit('SET_SENTENCES', res.data.sentences);
    },
};

export default new Vuex.Store({
    state, getters, actions, mutations,
});
