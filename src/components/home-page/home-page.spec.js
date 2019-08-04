import React from 'react';
import configureMockStore from 'redux-mock-store';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { episodes, show } from '../../mocks';
import { loadEpisodes } from '../../actions/episodes';
import { loadShow } from '../../actions/show';
import HomePage from './index';

describe('episode-page', () => {
  it('should render correctly home-page if episodes and show info are available', () => {
    const episodesMockStore = configureMockStore()({
      episodes: {
        data: episodes,
        loading: false,
      },
      show: {
        data: show,
        loading: false
      }
    });

    const wrapper = mount(
      <Provider store={episodesMockStore}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    expect(renderToJson(wrapper.render())).toMatchSnapshot();
  });

  it('should render errors if there was an error while fetching data', () => {
    const errorMockStore = configureMockStore()({
      episodes: {
        error: 'API call failed',
        loading: false,
      },
      show: {
        error: 'API call failed',
        loading: false,
      }
    });

    const wrapper = mount(
      <Provider store={errorMockStore}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );

    expect(renderToJson(wrapper.render())).toMatchSnapshot();
  });

  it('should dispatch EPISODES_LOAD and SHOW_LOAD actions', () => {
    const emptyMockStore = configureMockStore()({});
    const wrapper = mount(
      <Provider store={emptyMockStore}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );

   expect(wrapper.props().store.getActions()).toContainEqual(loadEpisodes());
   expect(wrapper.props().store.getActions()).toContainEqual(loadShow());
  });
});
