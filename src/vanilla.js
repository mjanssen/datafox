import store from './store';

export default _apiData => target => {

  Object.keys(_apiData).map(k => target.prototype[k] = {});

  Object.entries(_apiData).map(([k, url]) => {
    if (typeof store[url] === 'undefined') {
      return get(url).then(result => {
        target.prototype[k] = store[url] = result;
        target.prototype.didRecieveData(store);
      });
    }

    target.prototype[k] = store[url];
    target.prototype.didRecieveData(store);
  })

  if (typeof target.prototype.didRecieveData === 'function') {
    target.prototype.didRecieveData(store);
  }
}
