import React from 'react';
import store from './store';
import { get } from './fetch';

export default _apiData => Component => {
  return class extends React.Component {
    _data = {};

    constructor() {
      super();
      Object.keys(_apiData).map(k => this._data[k] = {});
    }

    fetchData() {
      Object.entries(_apiData).map(([k, url]) => {
        if (typeof store[url] === 'undefined') {
          return get(url).then(result => {
            this._data[k] = store[url] = result;
            this.forceUpdate();
          });
        }

        this._data[k] = store[url];
        this.forceUpdate();
      })
    }

    componentDidMount() {
      this.fetchData();
    }

    render() {
      return <Component {...this._data} />
    }
  }
}
