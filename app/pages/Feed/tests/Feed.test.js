import React from 'react';
import { Feed } from 'app/pages/Feed';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Feed', () => {
  describe('render test', () => {
    it('should render', () => {
      const onLoadPhotos = jest.fn();
      const wrapper = shallow(<Feed onLoadPhotos={onLoadPhotos} />);
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(onLoadPhotos).toHaveBeenCalledTimes(1);
    });
  });
});
