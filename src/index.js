import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


// index.js is where we start

//component lifecycle:
// 1.construction (state)
// 2. render
// 3. mount 1st if state changes
// 4. re-render
