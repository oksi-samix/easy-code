import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppComponent from './appComponent';
import { Pages } from './pages/Pages';

const Root = ( <Router>
  <AppComponent />
</Router>   );

ReactDom.render(Root, document.getElementById('app'));

