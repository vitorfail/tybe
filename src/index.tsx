import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalAviso from './component/ModalAviso/ModalAviso';
import { ComponentContexto } from './context';

import Home from './pages/Home/Home';
import Rout from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComponentContexto>
      <ModalAviso></ModalAviso>
      <Rout />
    </ComponentContexto>
  </React.StrictMode>
);
