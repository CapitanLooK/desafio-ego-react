import React from 'react';
import ReactDOM from 'react-dom';
import '../src/utils/styles/global.scss'
import { Route } from './router/Route'


ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
);
