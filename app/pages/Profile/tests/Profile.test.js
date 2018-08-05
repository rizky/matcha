import React from 'react';
import Profile from 'app/pages/Profile';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { currentUser } from 'app/pages/Auth/constants';

describe('Profile', () => {
  describe('render test', () => {
    it('should render', () => {
      const onLoadPhotosUser = jest.fn();
      const wrapper = shallow(<Profile
        currentUser={currentUser}
        onLoadPhotosUser={onLoadPhotosUser}
      />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(onLoadPhotosUser).toHaveBeenCalledTimes(1);
    });
  });
});
