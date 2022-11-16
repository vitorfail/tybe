import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home/Home';
import Rout from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);
