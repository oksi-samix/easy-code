import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'babel-polyfill';
import AppComponent from './appComponent';
import {Pages} from './pages/Pages';
import {Provider} from 'react-redux';
import { store } from './store';

const Root = (
  <Provider store={store}>
    <Router>
      <AppComponent />
    </Router>
  </Provider>);

ReactDom.render(Root, document.getElementById('app'));

