import React from 'react';
import ReactDom from 'react-dom';
import AppComponent from './appComponent';


const Wrapper = (
  <div className="root">
    <AppComponent />
  </div>
);

ReactDom.render(Wrapper, document.getElementById('app'));
