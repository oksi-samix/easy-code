import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Login from './login';
import CreateUser from './createUser';

export const Pages = () => <Switch>
  <Route
    path="/"
    exact
    component={Login}
  />
  <Route
    path="/user"
    exact
    component={CreateUser}
  />
  <Route
    path="/home"
    component={Home}
  />
  <Route
    render={(props) => <div>Not found <em>{props.location.pathname}</em></div>}
  />
</Switch>;
