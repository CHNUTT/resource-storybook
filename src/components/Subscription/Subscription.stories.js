import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

export default {
  title: 'Theme/Form/Subscription',
};

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
);
