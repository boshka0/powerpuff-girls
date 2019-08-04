import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import BackLink from './index';

it("render correctly back-home-link component", () => {
  const wrapper = mount(<Router><BackLink /></Router>);
  expect(renderToJson(wrapper.render())).toMatchSnapshot();
});
