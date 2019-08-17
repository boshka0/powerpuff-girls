import React from 'react';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import { episodes } from '../../../../mocks';
import EpisodePreview from './index';

it("render correctly error component", () => {
  const wrapper = mount(<EpisodePreview episodeInfo={episodes[0]} />);
  expect(renderToJson(wrapper.render())).toMatchSnapshot();
});
