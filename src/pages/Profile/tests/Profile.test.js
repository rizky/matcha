import React from 'react';
import { Profile } from 'app/pages/Profile';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Profile', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Profile />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
