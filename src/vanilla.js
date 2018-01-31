import store from './store';
import { get } from './fetch';

export default _apiData => _target => {

  Object.keys(_apiData).map(k => _target.prototype[k] = {});

  Object.entries(_apiData).map(([k, url]) => {
    if (typeof store[url] === 'undefined') {
      return get(url).then(result => {
        _target.prototype[k] = store[url] = result;
        if (typeof _target.prototype.didRecieveData === 'function') {
          _target.prototype.didRecieveData(store);
        }
      });
    }

    _target.prototype[k] = store[url];
    if (typeof _target.prototype.didRecieveData === 'function') {
      _target.prototype.didRecieveData(store);
    }
  })
}
