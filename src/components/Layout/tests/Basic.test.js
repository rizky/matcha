import React from 'react';
import Basic from 'src/components/Layout/Basic';
import BasicWeb from 'src/components/Layout/Basic.web';
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
