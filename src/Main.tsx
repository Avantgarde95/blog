/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';

const App = () => (
    <div>Hello!</div>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
