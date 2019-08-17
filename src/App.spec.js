import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import App from './App';
import HomePage from './components/pages/home-page';
import NotFoundPage from './components/pages/not-found-page';

const mockStore = configureStore([]);
const initialState = {};
const store = mockStore(initialState);

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router initialEntries={['/random']}>
        <App />
      </Router>
    </Provider>
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});

test('valid path / should redirect to home page', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router initialEntries={['/']}>
        <App />
      </Router>
    </Provider>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});
