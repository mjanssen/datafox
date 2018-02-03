import React from 'react';
import { get } from './fetch';
import store from './store';

export default _apiData => Component => {
  return class extends React.Component {
    componentWillMount() {
      this._data = {};
      Object.keys(_apiData).map(key => {
        this._data[key] = {};
        if (store.has(key)) {
          this._data[key] = store.get(key);
          return;
        }
        get(_apiData[key]).then(result => {
          store.set(key, result);
          this._data[key] = result;
          this.forceUpdate();
        });
      });
    }
    render() {
      return <Component {...this._data} />;
    }
  };
};
