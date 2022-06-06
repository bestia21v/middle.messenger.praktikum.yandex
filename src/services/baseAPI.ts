const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: any) {
  return `?${Object.keys(data).map((key) => `${key}=${data[key]}`).join('&')}`;
}

type OptionsType = {
  data?: any;
  timeout?: number;
};

export class BaseAPI {
  get = (url: string, options: OptionsType = {}) => {
    const dataStr = options.data ? queryStringify(options.data) : undefined;

    return dataStr
      ? this.request(url + dataStr, { ...options, method: METHODS.GET }, options.timeout)
      : this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  // eslint-disable-next-line max-len
  put = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  // eslint-disable-next-line max-len
  post = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  // eslint-disable-next-line max-len
  delete = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  // eslint-disable-next-line max-len
  request = (url: string, options: OptionsType & { method: any }, timeout = 5000) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(options.method, url);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.onload = () => {
      resolve(xhr);
    };

    xhr.onabort = reject;
    xhr.onerror = reject;
    xhr.ontimeout = reject;

    xhr.withCredentials = true;

    if (options.method === METHODS.GET || !options.data) {
      xhr.send();
    } else {
      xhr.send(options.data);
    }
  });
}
