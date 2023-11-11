"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const theme = createTheme({
    palette: {
     mode:"dark",
        type: 'dark',
        primary: {
          main: '#121212',
          light: '#121212',
        },
        secondary: {
          main: '#121212',
        },
        text: {
          secondary: '#ffffff',
          primary: '#121212',
          disabled: 'rgba(51,51,51,0.5)',
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: '#121212',
              boxShadow:"none" // Set your desired background color for AppBar
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              backgroundColor: '#121212', // Set your desired background color for Container
            },
          },
        },
      },
});