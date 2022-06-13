import { BASE } from '../consts';

enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

type MethodType = keyof typeof Methods;

function queryStringify(data: any) {
  return `?${Object.keys(data).map((key) => `${key}=${data[key]}`).join('&')}`;
}

export type OptionsType = {
  data?: any;
  timeout?: number;
  headers?: { [key in string]: string }
};

export class HTTPRequests {
  base: string;

  prefix: string;

  constructor(prefix: string, base?: string) {
    this.prefix = prefix;
    this.base = base || BASE;
  }

  get = (url: string, options: OptionsType = {}) => {
    const dataStr = options.data ? queryStringify(options.data) : undefined;

    return dataStr
      ? this.request(url + dataStr, { ...options, method: Methods.GET })
      : this.request(url, { ...options, method: Methods.GET });
  };

  put = (url: string, options: OptionsType = {}) => {
    const optionsExtended = { ...options, method: Methods.PUT };
    return this.request(url, optionsExtended);
  };

  post = (url: string, options: OptionsType = {}) => {
    const optionsExtended = { ...options, method: Methods.POST };
    return this.request(url, optionsExtended);
  };

  delete = (url: string, options: OptionsType = {}) => {
    const optionsExtended = { ...options, method: Methods.DELETE };
    return this.request(url, optionsExtended);
  };

  request = (
    url: string,
    options: OptionsType & { method: MethodType },
  ) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const {
      data, method, headers,
    } = options;
    const fullURL = `${this.base}${this.prefix}${url}`;

    xhr.withCredentials = true;
    xhr.responseType = 'json';

    xhr.open(method, fullURL, true);

    if (headers !== undefined) {
      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });
    }

    xhr.onload = () => {
      resolve(xhr);
    };

    xhr.onabort = reject;
    xhr.onerror = reject;
    xhr.ontimeout = reject;

    if (method === Methods.GET || !data) {
      xhr.send();
    } else {
      xhr.send(data);
    }
  });
}
