// import
import Button from '@material-ui/core/Button';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createTheme from '@material-ui/core/styles/createTheme';

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
    variant: { control: 'text' },
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
  children: 'Text Button',
};

export const Contained = SingleTemplate.bind({});
Contained.args = {
  variant: 'contained',
  children: 'Contained Button',
};

export const Outline = SingleTemplate.bind({});
Outline.args = {
  variant: 'outlined',
  children: 'Outline Button',
};
