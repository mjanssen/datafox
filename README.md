# Datafox

<a href="https://www.npmjs.org/package/datafox">
  <img src="https://img.shields.io/npm/v/datafox.svg?style=flat" alt="npm">
</a>

Datafox is a small decorator for fetching your API data, asynchronously binding the data to your (P)React component or Javascript class.

## Install

```
$ npm install --save datafox
```

## Features

- Fetching data asynchronously
- Binding api data to the `this.props`
  - Triggering `componentDidUpdate()`
- Binding data to class prototype (`this`)
  - Triggering `didRecieveData()`
- Using `unfetch` as polyfill, for browser support

# Usage

## (P)React
```
import data from 'datafox';

const user = '/api/users/1';

@data({user})
class User extends Component {
...
```

The above code makes the result from the `user` URL available in the `User` component. `this.props.user` will result in an object fetched from the API.

Datafox makes sure the prop is initially set, so no `undefined` errors are returned if you add `this.props.user.name` in your render function.

## Vanilla classes

Using datafox for vanilla classes is also possible.

```
import data from 'datafox/vanilla';

const user = '/api/users/1';

@data({user})
class SomeClass {
  didRecieveData(data) {}
}

const someVar = new SomeClass();
```

`someVar.user` now contains the data coming from the api.

## Demo

An updated code demo can be found [here](https://stackblitz.com/edit/datafox-poc)

## License

[MIT](https://oss.ninja/mit/mjanssen/)
