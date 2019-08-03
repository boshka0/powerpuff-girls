import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/home-page';
import EpisodePage from './components/episode-page';
import NotFound from './components/not-found-page';
import configureStore from './store';
import './main.scss';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path={`/episodes/:id`} component={EpisodePage}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
