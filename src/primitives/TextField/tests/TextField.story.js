
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import TextField from 'src/primitives/TextField';

const stories = storiesOf('TextField primitive', module);

stories
  .add('TextField', () => (
    <View style={{ padding: 50, width: 400 }}>
      <TextField placeholder="Email" />
    </View>
  ));
