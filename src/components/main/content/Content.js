import './content.scss';
import Paragraph from '../paragraph/Paragraph';
import Users from '../users/Users';
import Date from '../date/Date';
import ColorComponent from '../colorComponent/ColorComponent';
import Form from "../../form/Form";

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi sit amet augue libero. Vivamus nulla tortor, rhoncus
at nisl ut, auctor suscipit nisl. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac 
turpis egestas. Duis venenatis erat vitae eros rhoncus maximus.
Proin vel massa urna. Phasellus blandit massa et erat suscipit, quis imperdiet 
erat ornare. Fusce faucibus lacus sapien, feugiat porttitor odio finibus ut. 
Maecenas id faucibus tellus, at fermentum est.
`;

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
    {/*<Paragraph text={text} />*/}
    {/*<Users />*/}
    {/* <Date />
    <ColorComponent />*/}
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

