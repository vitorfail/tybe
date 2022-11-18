import React from 'react';
import ReactDOM from 'react-dom/client';
import AvisoPag from './component/AvisoPag/AvisoPag';
import ModalAviso from './component/ModalAviso/ModalAviso';
import ModalPag from './component/ModalPag/ModalPag';
import { ComponentContexto } from './context';

import Home from './pages/Home/Home';
import Rout from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComponentContexto>
      <AvisoPag></AvisoPag>
      <ModalPag></ModalPag>
      <ModalAviso></ModalAviso>
      <Rout />
    </ComponentContexto>
  </React.StrictMode>
);
