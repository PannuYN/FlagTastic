import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#e3f2fd',
      main: '#26c6da',
      dark: '#1a8a98',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffcf33',
      main: '#ffc400',
      dark: '#b28900',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',  // Set Roboto as default for MUI typography
  },
});

export default theme;