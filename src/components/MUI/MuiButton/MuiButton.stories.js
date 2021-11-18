// import
import Button from '@material-ui/core/Button';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createTheme from '@material-ui/core/styles/createTheme';
import { text, boolean } from '@storybook/addon-knobs';

const theme = createTheme({
  typography: {
    button: {
      fontWeight: 800,
    },
  },
});

export default {
  title: 'MUI/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'radio' },
    },
    color: {
      options: ['default', 'inherit', 'primary', 'secondary'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    onClick: { action: 'click' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const SingleTemplate = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

export const Text = SingleTemplate.bind({});
Text.args = {
  variant: 'text',
  color: 'default',
  children: 'Text Button',
};

export const Contained = SingleTemplate.bind({});
Contained.args = {
  variant: 'contained',
  color: 'default',
  children: 'Contained Button',
};

export const Outline = SingleTemplate.bind({});
Outline.args = {
  variant: 'outlined',
  color: 'default',
  children: 'Outline Button',
};

export const Log = SingleTemplate.bind({});
Log.args = {
  children: 'Log',
  onClick: () => console.log('Button clicked', process.env.STORYBOOK_THEME),
};

export const Knobs = () => (
  <Button variant="contained" disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
);
