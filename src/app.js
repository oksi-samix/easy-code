import React from 'react';
import ReactDom from 'react-dom';

import {Header} from './components/header';
import {Main} from './components/main';
import {Footer} from './components/footer';
import './styles/general.scss';

const Wrapper = (
    <div className="root">
        <Header/>
        <Main/>
        <Footer/>
    </div>
)

ReactDom.render(Wrapper, document.getElementById('app'));