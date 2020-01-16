import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  /*
    Wrap our App component within the BrowserRouter component
    to get access to routing features in all child components
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
