import { HttpError } from './errors';

const defaultOptions = {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
};

const request = (url, options = defaultOptions) =>
  fetch(url)
    .catch(error => {
      throw new Error('Service is not available');
    })
    .then(response => {
      if (!response.ok) {
        throw new HttpError(response.statusText, response.status);
      }
      return response.json();
    });

export default {
  get(url) {
    return request(url);
  },
  post(url, data) {
    throw new Error('Not implemented yet');
  }
}