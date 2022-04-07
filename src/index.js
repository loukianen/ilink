import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import PopUpWindowProvider from './hocs/pop-up-window-provider/PopUpWindowProvider';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PopUpWindowProvider>
      <App />
    </PopUpWindowProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
