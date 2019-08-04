import React from 'react';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import ErrorComponent from './index';

it("render correctly error component", () => {
  const wrapper = mount(<ErrorComponent block="episodes list" />);
  expect(renderToJson(wrapper.render())).toMatchSnapshot();
});
