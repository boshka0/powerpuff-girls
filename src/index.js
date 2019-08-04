import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import configureStore from './store';
import App from './App';

ReactDOM.render((
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
