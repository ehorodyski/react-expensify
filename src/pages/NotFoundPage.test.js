import React from 'react';
import shallow from '../__mocks__/shallow';
import { NotFoundPage } from './NotFoundPage';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});