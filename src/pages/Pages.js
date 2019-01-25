import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './home';
import Login from './login';
import CreateUser from './createUser';
import Success from './success';
import Start from './start';
import Categories from './categories';
import Category from './category';
import Products from './products';
import ProductPage from './productPage';
import UpdateUser from './updateUser';

export const Pages = ({user, onLogin, info}) => <Switch>
  {user ? [
    <Route
      path="/home"
      render={() => <Home info={info} user={user}/>}
      key="home"
    />,
    <Route
      path="/start"
      component={Start}
      key="start"
    />,
    <Route
      path="/products"
      key="product"
      component={Products}
    />,
    <Route
      path="/update"
      key="update"
      component={UpdateUser}
    />,
    <Redirect exact key="redirect" from="/" to="/home" />
  ] : [
    <Route
      path="/"
      exact
      key="loginEmpty"
      component={Login}
    />,
    <Route
      path="/success"
      key="success"
      component={Success}
    />
  ]}
  <Route
    path="/user"
    exact
    component={CreateUser}
    key="user"
  />,
  <Route
    path="/category"
    component={Category}
  />
  <Route
    path="/categories"
    component={Categories}
  />
  <Route
    path="/product/:id"
    component={ProductPage}
  />
  <Route
    render={(props) => <div>Not found <em>{props.location.pathname}</em></div>}
  />
</Switch>;
