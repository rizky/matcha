import React from 'react';
import { Photos } from 'app/components/Photos';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Photos', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Photos photos={[]} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
