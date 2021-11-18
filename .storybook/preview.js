import React from 'react';
import Center from '../src/components/Center/Center';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';

// export const decorators = [(Story) => <Center>{<Story />}</Center>];
addDecorator((Story) => <Center>{<Story />}</Center>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },
  // options: {
  //   storySort: {
  //     method: '',
  //     order: [],
  //     locales: '',
  //   },
  // },
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
};
