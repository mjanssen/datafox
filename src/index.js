import React from 'react';
import store from './store';
import { get } from './fetch';

export default data => Component => {
  return class extends React.Component {
    _data = {};

    constructor() {
      super();
      data.map(url => this._data[url] = {});
    }

    _fetchData() {
      data.map(url => {
        if (typeof store[url] === 'undefined') {
          return get(url).then(result => {
            this._data[url] = store[url] = result;
            this.forceUpdate();
          });
        }

        this._data[url] = store[url];
        this.forceUpdate();
      })
    }

    componentDidMount() {
      this._fetchData();
    }

    render() {
      return <Component {...this._data} />
    }
  }
}
