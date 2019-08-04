import React from 'react';
import configureMockStore from 'redux-mock-store';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { loadEpisode } from '../../actions/episode';
import EpisodePage from './index';
import { episodes } from '../../mocks';

describe('episode-page', () => {
  it('should render correctly episode-page if episodes are available', () => {
    const episodesMockStore = configureMockStore()({
      episodes: {
        data: episodes,
      },
    });

    const wrapper = mount(
      <Provider store={episodesMockStore}>
        <Router>
          <EpisodePage
            match={{ params: { id: '657308' } }}
          />
        </Router>
      </Provider>
    );
    expect(renderToJson(wrapper.render())).toMatchSnapshot();
  });

  it('should render error if there was an error with episode fetching', () => {
    const errorMockStore = configureMockStore()({
      episode: {
        error: 'API call failed',
        loading: false,
      }
    });

    const wrapper = mount(
      <Provider store={errorMockStore}>
        <Router>
          <EpisodePage
            match={{ params: { id: '657308' } }}
          />
        </Router>
      </Provider>
    );

    expect(renderToJson(wrapper.render())).toMatchSnapshot();
  });

  it('should dispatch EPISODE_LOAD action if no episodes are available', () => {
    const emptyMockStore = configureMockStore()({});
    const wrapper = mount(
      <Provider store={emptyMockStore}>
        <EpisodePage
          match={{ params: { id: '657308' } }}
        />
      </Provider>
    );

   expect(wrapper.props().store.getActions()).toContainEqual(loadEpisode('657308'));
  });
});
