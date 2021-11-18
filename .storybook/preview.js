import React from 'react';
import Center from '../src/components/Center/Center';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// export const decorators = [(Story) => <Center>{<Story />}</Center>];
addDecorator((Story) => <Center>{<Story />}</Center>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

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
