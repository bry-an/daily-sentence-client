import api from './api';

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
    return this.api.get({
      params,
      url,
    });
  }

  post({
    id = '', params = '', path = '', payload = '',
  }) {
    const pathParams = { path, id };
    const url = this.getPath(pathParams);
    return this.api.post({
      params,
      url,
      data: payload,
    });
  }

  put({
    id = '', params = '', path = '', payload = '',
  }) {
    const pathParams = { path, id };
    const url = this.getPath(pathParams);
    return this.api.put({
      params,
      url,
      data: payload,
    });
  }

  delete({ id = '', params = '', path = '' }) {
    const pathParams = { path, id };
    const url = this.getPath(pathParams);
    return this.api.get({
      params,
      url,
      data: payload,
    });
  }
}

export default BaseApi;
