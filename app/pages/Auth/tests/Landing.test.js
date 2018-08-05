import React from 'react';
import { Landing } from 'app/pages/Auth/Landing';
import toJson from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';

describe('Landing', () => {
  describe('render test', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();
    const fakeIntl = {
      ...intl,
      formatMessage: ({ id, defaultMessage }) =>
        intl.formatMessage({
          defaultMessage: defaultMessage || id,
          id,
        }),
    };
    it('should render', () => {
      const wrapper = shallow(<Landing
        intl={fakeIntl}
      />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
