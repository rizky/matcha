import React from 'react';
import { Messages } from 'app/pages/Messages';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Messages', () => {
  describe('render test', () => {
    it('should render', () => {
      const onLoadThreads = jest.fn();
      const wrapper = shallow(<Messages onLoadThreads={onLoadThreads} />);
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(onLoadThreads).toHaveBeenCalledTimes(1);
    });
  });
});
