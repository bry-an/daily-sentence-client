import api from './axios';

class BaseApi {
    constructor({ path }) {
        this.basePath = path;
        this.api = api;
    }

    getPath(params) {
        let { basePath } = this;
        basePath += params.path;
        if (params.id) {
            basePath += `/${params.id}`;
        }
        return basePath;
    }

    get({ id = '', params = '', path = '' }) {
        const pathParams = { path, id };
        const url = this.getPath(pathParams);
        return this.api.get(url, {
            params,
        });
    }

    post({
        id = '', path = '', payload = '',
    }) {
        const pathParams = { path, id };
        const url = this.getPath(pathParams);
        const axiosPayload = { ...payload, axios: true };
        return this.api.post(url, {
            data: axiosPayload,
        });
    }

    put({
        id = '', params = '', path = '', payload = '',
    }) {
        const pathParams = { path, id };
        const url = this.getPath(pathParams);
        const axiosPayload = { ...payload, axios: true };
        return this.api.put({
            params,
            url,
            data: axiosPayload,
        });
    }

    delete({ id = '', params = '', path = '' }) {
        const pathParams = { path, id };
        const url = this.getPath(pathParams);
        return this.api.delete({
            params,
            url,
        });
    }
}

export default BaseApi;
