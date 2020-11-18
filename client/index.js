import React from 'react'; 
import { render } from 'react-dom';
import App from './components/App.jsx';
import "regenerator-runtime/runtime";

// import styles from './scss/application.scss';

render(
  <App />,
  document.getElementById('app')
);