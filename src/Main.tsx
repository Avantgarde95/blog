import './Polyfill';

import * as React from 'react';
import { render } from 'react-dom';
import { App } from './view/App';

const temporaryElements = document.getElementsByClassName('Temporary');

while (temporaryElements.length > 0) {
    temporaryElements[0]?.parentNode?.removeChild(temporaryElements[0]);
}

render(<App />, document.body);
