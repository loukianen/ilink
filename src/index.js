import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import PopUpWindowProvider from './hocs/pop-up-window-provider/PopUpWindowProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PopUpWindowProvider>
      <App />
    </PopUpWindowProvider>
  </React.StrictMode>
);
