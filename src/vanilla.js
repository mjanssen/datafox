import store from "./store";
import { get } from "./fetch";

export default _apiData => _target => {
  Object.keys(_apiData).map(key => {
    _target.prototype[key] = {};
    if (store.has(key)) {
      _target.prototype[key] = store.get(key);
      return;
    }
    get(_apiData[key]).then(result => {
      store.set(key, result);
      _target.prototype[key] = result;
      if (typeof _target.prototype.didRecieveData === "function") {
        _target.prototype.didRecieveData();
      }
    });
  });
  if (typeof _target.prototype.didRecieveData === "function") {
    _target.prototype.didRecieveData();
  }
};
