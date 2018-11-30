import './aside.scss';
import './aside.scss';
import { List } from '../../list';

const users = [
  {id: 123, name: "Patrik"},
  {id: 46, name: "Teresa"},
  {id: 13, name: "Jhon"}
];

export const Aside = () => ( <aside className="sidebar">
  This is aside
  <List items={users}/>
</aside>);
