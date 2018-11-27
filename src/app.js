import React from 'react';
import ReactDom from 'react-dom';

import { Header } from './components/header'

const Wrapper = (
    <>
        <Header/>
    </>
)

ReactDom.render(Wrapper, document.getElementById('app'));