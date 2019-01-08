import {Link, NavLink} from 'react-router-dom'
import './header.scss';

export const Header = ({user = {}, info = {}}) => (
  <header className="header">
    {user ? <p>{user.firstName}</p> : <div>
      <NavLink to="/" exact activeClassName="active">Login</NavLink>
      / <NavLink to="/user" activeClassName="active">Create user</NavLink></div>}
    {info && <p>({info && info.categories}/{info && info.products})</p>}

  </header>);
