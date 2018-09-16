import React from 'react';
import Photos from 'src/components/Photos';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Photos', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Photos photos={[]} />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
