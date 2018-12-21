import {Navigation} from './navigation';
import './header.scss';

export const Header = ({user = {}, info = {}}) => (
  <header className="header">
    {user ? <p>{user.firstName}</p> : <div><a href="#">Sign in</a> / <a href="#">Sign out</a></div>}
    {info && <p>({info && info.categories}/{info && info.products})</p>}
  </header>);
