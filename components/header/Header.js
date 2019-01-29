import {Link, NavLink} from 'react-router-dom'
import './header.scss';
import {logout} from "../../services";

export const Header = ({user = {}, info = {}, onLogout, history}) => {
  const onLogOutHandler = (event) => {
    event.preventDefault();
    onLogout();
  };
  return (<header className="header">
    {user ? <p>{user.firstName}</p> : <div>
      <NavLink to="/" exact activeClassName="active">Login</NavLink>
      / <NavLink to="/user" activeClassName="active">Create user</NavLink></div>}
    {user && info &&
    <div className="logout">
      <p>({info && info.categories}/{info && info.products})</p>
      <a href="#" onClick={onLogOutHandler}>LogOut</a></div>}
  </header>)
};
