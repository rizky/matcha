import React from 'react';
import { Messages } from 'src/components/Messages';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Messages', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Messages messages={[]} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
