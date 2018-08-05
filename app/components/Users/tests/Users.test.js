import React from 'react';
import { Users } from 'app/components/Users';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Users', () => {
  describe('render test', () => {
    it('should render', () => {
      const wrapper = shallow(<Users users={[]} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
