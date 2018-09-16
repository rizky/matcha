import React from 'react';
import Landing from 'src/pages/Auth/Landing';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Landing', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Landing />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
