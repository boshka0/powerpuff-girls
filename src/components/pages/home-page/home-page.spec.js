import React from 'react';
import configureMockStore from 'redux-mock-store';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { loadShow } from '../../../store/actions/show';
import { loadEpisodes } from '../../../store/actions/episodes';
import { episodes, show } from '../../../mocks';

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

    expect(wrapper.find('.error')).toHaveLength(2);
    expect(renderToJson(wrapper.render())).toMatchSnapshot();
  });

  it('should redirect user to episode page on clicking episode preview', () => {
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
    wrapper.find('.about-episodes__link').first().simulate('click', { button: 0 });
    expect(global.location.hash).toEqual(`#/episodes/${episodes[0].id}`);
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
