import React from 'react';
import ReactDOM from 'react-dom/client';
import ColorSelector from './pages/colors/ColorSelector';
import Auth from './pages/auth/Auth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorSelector />
    <hr/>
    <Auth />
    <hr/>
  </React.StrictMode>
);