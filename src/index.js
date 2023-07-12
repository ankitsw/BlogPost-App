// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BlogContextProvider from './context/BlogContext';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
