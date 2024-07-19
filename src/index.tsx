import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';

import { mocksData } from './mocks/offers';

const offersNumber = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersNumber={offersNumber} data={mocksData} />
  </React.StrictMode>
);
