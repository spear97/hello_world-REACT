import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root element for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React StrictMode for additional checks and warnings in development mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
