import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Basic styling
document.body.style.backgroundColor = "#152025";

// SITE MAIN DIV
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main' id='main'>
    <App />
  </div>
);
