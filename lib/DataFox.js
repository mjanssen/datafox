import React from 'react';
import store from './store';
import { get } from './fetch';

export default data => Component => {
  return class extends React.Component {
    data = {};

    constructor() {
      super();
      data.map(url => this.data[url] = {});
    }

    fetchData = () => {
      data.map(url => {
        if (typeof store[url] === 'undefined') {
          return get(url).then(result => {
            this.data[url] = store[url] = result;
            this.forceUpdate();
          });
        }

        this.data[url] = store[url];
        this.forceUpdate();
      })
    }

    componentDidMount() {
      this.fetchData();
    }

    render() {
      return <Component {...this.data} />
    }
  }
}
