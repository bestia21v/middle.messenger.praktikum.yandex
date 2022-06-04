const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: any) {
  return `?${Object.keys(data).map((key) => `${key}=${data[key]}`).join('&')}`;
}

type optionsType = {
  data?: any;
  timeout?: number;
}

class HTTPTransport {
  get = (url: string, options: optionsType = {}) => {
    const dataStr = options.data ? queryStringify(options.data) : undefined;

    return dataStr
      ? this.request(url + dataStr, { ...options, method: METHODS.GET }, options.timeout)
      : this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  // eslint-disable-next-line max-len
  put = (url: string, options: optionsType = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  // eslint-disable-next-line max-len
  post = (url: string, options: optionsType = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  // eslint-disable-next-line max-len
  delete = (url: string, options: optionsType = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  // eslint-disable-next-line max-len
  request = (url: string, options: optionsType & {method: any}, timeout = 5000) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method, url);

    xhr.onload = () => {
      resolve(xhr);
    };

    xhr.onabort = reject;
    xhr.onerror = reject;
    xhr.ontimeout = reject;

    setTimeout(() => {
      reject();
    }, timeout);

    if (options.method === METHODS.GET || !options.data) {
      xhr.send();
    } else {
      xhr.send(options.data);
    }
  });
}
