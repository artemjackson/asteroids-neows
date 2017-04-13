export default (filter = {}) =>
  Object
    .entries(filter)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');