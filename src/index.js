import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.css';

render(<Root/>, document.getElementById('pitchday'));
registerServiceWorker();
