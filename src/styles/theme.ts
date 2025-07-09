import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#C98B6B' },
    secondary: { main: '#C98B6B' },
    error: { main: '#B71C1C' },
    warning: { main: '#FF5722' },
    success: { main: '#8BC34A' },
    background: {
      default: 'linear-gradient(to bottom right, #F5F5F5, #FBF8F4)',
      paper: '#FBF8F4',
    },
    text: { primary: '#000', secondary: '#000' },
  },
  typography: {
    fontFamily: '"Noto Sans Lao", "Canela Trial", sans-serif',
    button: { textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          // Global font override
          fontFamily: `'Noto Sans Lao', 'Canela Trial', sans-serif`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          color: '#F5F5F5',
          fontWeight: 'bold',
          padding: '8px 14px',
          '&:hover': {
            background: 'linear-gradient(45deg, #ab6936 30%, #C98B6B 90%)',
          },
        },
      },
    },
  },
});

export default theme;
