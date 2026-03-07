import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = document.getElementById('root');
if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   );
} else {
   console.error("Root element not found");
}