import './content.scss';
import {Greetting} from '../greetting';
import {Numbers} from '../numbers';
import {ListName} from '../listName';
import Form from "../Form";

const users = [
  {firstName: 'Olya', lastName: 'Voronaya', age: 23},
  {firstName: 'Angelina', lastName: 'Vovk', age: 48},
  {firstName: 'Ivan', lastName: 'Dorn', age: 33},
];

const onSave = (data) => {
  console.log(data);
}
export const Content = () => (

  <section className="content">
    {/*<Greetting name="Oksana" />*/}
    {/*<Numbers from={2} to={7} />*/}
    {/* <ListName users={users} />*/}
    <Form
      data={{
        email: 'bla@bla.com',
        name: 'bla',
        surname: 'blabla'
      }}
      onSave={onSave}
    />
  </section>);

