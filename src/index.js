import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'flowbite';

import emailjs from '@emailjs/browser';

// Initialiser EmailJS avec votre clé publique
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
