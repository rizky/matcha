import React from 'react';
import Conversation from 'src/pages/Messages/Conversation';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Conversation', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Conversation />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
