import './content.scss';
import Paragraph from '../paragraph/Paragraph';
import Users from '../users/Users';
import Date from '../date/Date';
import ColorComponent from '../colorComponent/ColorComponent';

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

export const Content = () => (
  <section className="content">
    <Paragraph text={text} />
    <Users />
    <Date />
    <ColorComponent />
  </section>);
