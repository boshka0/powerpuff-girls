import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import NotFoundPage from './index';

it("render correctly error component", () => {
  const wrapper = mount(
    <Router>
      <NotFoundPage />
    </Router>
  );
  expect(renderToJson(wrapper.render())).toMatchSnapshot();
});
