import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/home-page';
import EpisodePage from './components/pages/episode-page';
import NotFoundPage from './components/pages/not-found-page';

import './main.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path={`/episodes/:id`} component={EpisodePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
