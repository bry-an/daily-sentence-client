import Vue from 'vue';
import Vuex from 'vuex';
import pathOr from 'ramda/src/pathOr';
import pipe from 'ramda/src/pipe';
import map from 'ramda/src/map';
import head from 'ramda/src/head';
import { sentenceMapper, sentenceCreatedSameDay, hasLength } from '../util';
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
    mostRecentSentenceCreatedToday: (state) => (hasLength
        ? sentenceCreatedSameDay(head(state.sentences))
        : false),
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
        const logger = (msg) => (x) => {
            console.log(msg, x);
            return x;
        };
        const sentences = pipe(pathOr([], ['data', 'sentences']), logger('in sentences'), map(sentenceMapper));
        commit('SET_SENTENCES', sentences(res));
    },
};

export default new Vuex.Store({
    state, getters, actions, mutations,
});
