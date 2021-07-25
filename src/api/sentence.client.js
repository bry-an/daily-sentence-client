import BaseApi from './base.client';

const sentenceClient = new BaseApi({
    path: '/sentence',
});

export default {
    get: (id) => sentenceClient.get({ id }),
    create: (payload) => sentenceClient.post({ payload }),
};
