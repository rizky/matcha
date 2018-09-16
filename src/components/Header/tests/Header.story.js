
import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from 'src/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from 'src/constants/design';

const stories = storiesOf('Header component', module);

stories
  .add('Header', () => (<Header />))
  .add('Header hasBack', () => (<Header hasBack />))
  .add('Header with action', () => (<Header
    headerActions={[<Icon name="ellipsis-h" key="ellipsis-h" size={20} color={COLORS.BLUE_DARKER} />,
    ]}
  />));
