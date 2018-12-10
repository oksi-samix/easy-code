import './content.scss';
import { Greetting } from '../greetting';
import { Numbers } from '../numbers';
import { ListName } from '../listName';

const users = [
  { firstName: 'Olya', lastName: 'Voronaya', age: 23 },
  { firstName: 'Angelina', lastName: 'Vovk', age: 48 },
  { firstName: 'Ivan', lastName: 'Dorn', age: 35 },
];

export const Content = () => (
  <section className="content">
    <Greetting name="Oksana" />
    <Numbers from={2} to={7} />
    <ListName users={users} />
  </section>);
