import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  // Basic test to ensure component is rendering. Change as needed
  test('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});