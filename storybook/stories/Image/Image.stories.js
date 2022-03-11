import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {Image} from '.';
import CenterView from '../CenterView';

storiesOf('Image', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with image', () => (
    <Image source="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"/>
  ))

