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
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Text = () => <Button variant="text">Primary</Button>;
export const Contained = () => <Button variant="contained">Primary</Button>;
export const Outline = () => <Button variant="outlined">Primary</Button>;
