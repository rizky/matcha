import React from 'react';
import Messages from 'src/pages/Messages/index.web.js';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Messages', () => {
  describe('render test', () => {
    it('should render', () => {
      const onLoadThreads = jest.fn();
      const wrapper = shallow(<Messages onLoadThreads={onLoadThreads} />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(onLoadThreads).toHaveBeenCalledTimes(1);
    });
  });
});
