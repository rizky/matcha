import React from 'react';
import { Threads } from 'src/components/Threads';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Threads', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Threads threads={[]} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
