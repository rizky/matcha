import React from 'react';
import Basic from 'app/components/Layout/Basic';
import BasicWeb from 'app/components/Layout/Basic.web';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Layout', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Basic />);
      expect(toJson(wrapper)).toMatchSnapshot();
      const wrapperWeb = shallow(<BasicWeb />);
      expect(toJson(wrapperWeb)).toMatchSnapshot();
    });
  });
});
