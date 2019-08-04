import React from 'react';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import Loader from './index';

it("render correctly error component", () => {
  const wrapper = mount(<Loader />);
  expect(renderToJson(wrapper.render())).toMatchSnapshot();
});
