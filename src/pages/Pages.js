import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';
import CreateUser from './createUser';
import Success from './success';
import Start from './start';
import Categories from './categories';
import Category from './category';
import Products from './products';
import Product from './product';
import UpdateUser from './updateUser';

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
    path="/success"
    component={Success}
  />
  <Route
    path="/start"
    component={Start}
  />
  <Route
    path="/category"
    component={Category}
  />
  <Route
    path="/categories"
    component={Categories}
  />
  <Route
    path="/products"
    component={Products}
  />
  <Route
    path="/product"
    component={Product}
  />
  <Route
    path="/update"
    component={UpdateUser}
  />
  <Route
    render={(props) => <div>Not found <em>{props.location.pathname}</em></div>}
  />
</Switch>;
