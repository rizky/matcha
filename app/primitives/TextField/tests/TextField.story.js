
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import TextField from 'app/primitives/TextField';

const stories = storiesOf('TextField primitive', module);

stories
  .add('TextField', () => (
    <View style={{ width: 400, padding: 50 }}>
      <TextField placeholder="Email" />
    </View>
  ));
