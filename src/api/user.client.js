import BaseApi from './base.client';

const userClient = new BaseApi({
    path: '/user',
});

export default {
    get: (id) => userClient.get({ id }),
    create: (payload) => userClient.post({ payload }),
    fetchSentences: (id) => userClient.get({ path: `/${id}/sentences` }),
};
