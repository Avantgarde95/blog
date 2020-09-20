/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';

require('highlight.js/styles/monokai-sublime');

const Welcome = require('./article/Welcome');
const Test = require('./article/Test');

const Article = ({html = ''}) => (
    <div dangerouslySetInnerHTML={{__html: html}}/>
);

const App = () => (
    <div>
        <Article html={Welcome}/>
        <Article html={Test}/>
    </div>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
