## Datafox

Datafox is a small (P)React decorator for fetching your API data, using a HOC.

### Usage

```
import data from 'datafox';

const user = '/api/users/1';

@data([user])
class User extends Component {
...
```

The above code makes the result from the `user` URL available in the `User` component. `this.props[user]` will result in an object fetched from the API.

Datafox makes sure the prop is initially set, so no `undefined` errors are returned if you add `this.props[user].name` in your render function.
