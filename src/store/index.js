import Vue from 'vue';
import Vuex from 'vuex';
import pipe from 'ramda/src/pipe';
import map from 'ramda/src/map';
import head from 'ramda/src/head';
import {
    sentenceMapper, sentenceCreatedSameDay, hasLength, parseSentenceResponse,
} from '../util';
import { sentenceClient, userClient } from '../api';

const { create: createSentence, update: updateSentence } = sentenceClient;
const { fetchSentences } = userClient;

Vue.use(Vuex);

const getDefaultState = () => ({
    sentenceToday: {},
    sentences: [],
});

const state = getDefaultState();

const getters = {
    sentenceToday: (state) => state.sentenceToday,
    sentences: (state) => state.sentences,
    hasSentenceToday: (state) => (hasLength(state.sentences)
        ? sentenceCreatedSameDay(head(state.sentences))
        : false),
};

const mutations = {
    SET_SENTENCE_TODAY(state, sentence) {
        state.sentenceToday = sentence;
    },
    SET_SENTENCES(state, sentences) {
        state.sentences = sentences;
    },
};
const actions = {
    createSentence({ dispatch }, { text }) {
        const userId = '60fb909e3e17d245f11f1c80';
        return createSentence({
            userId,
            text,
            date: new Date(),
        }).then(dispatch('fetchSentences'));
    },
    updateSentence({ dispatch }, { id, text }) {
        return updateSentence({
            id,
            payload: { text },
        }).then(dispatch('fetchSentences'));
    },
    fetchSentences({ commit, getters }) {
        const userId = '60fb909e3e17d245f11f1c80';
        return fetchSentences(userId).then((res) => {
            const sentences = pipe(parseSentenceResponse, map(sentenceMapper));
            commit('SET_SENTENCES', sentences(res));
            if (getters.hasSentenceToday) {
                commit('SET_SENTENCE_TODAY', head(state.sentences));
            }
        });
    },
};

export default new Vuex.Store({
    state, getters, actions, mutations,
});
