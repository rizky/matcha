import React from 'react';
import Feed from 'src/pages/Feed';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Feed', () => {
  describe('render test', () => {
    it('should render', () => {
      const onLoadPhotos = jest.fn();
      const wrapper = shallow(<Feed onLoadPhotos={onLoadPhotos} />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(onLoadPhotos).toHaveBeenCalledTimes(1);
    });
  });
});
