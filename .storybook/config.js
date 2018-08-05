import { configure, addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

// Load the locale data for all your defined locales
import { addLocaleData } from 'react-intl';
import enLocaleData from '../app/translation/message.en';

// now you can write stories inside components directory then follow the <file_name>.story.js
const req = require.context('../app/components', true, /\.story\.js$/)

addLocaleData(enLocaleData);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const getMessages = (locale) => messages[locale];

// Provide your messages
const messages = {
    'en': enLocaleData,
    'fr': enLocaleData,
};

// Set intl configuration
setIntlConfig({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    getMessages,
});

// Register decorator
addDecorator(withIntl);

configure(loadStories, module);
