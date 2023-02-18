import { ReactNode } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FONT_PRIMARY = ['Inter', 'sans-serif'].join(',');

let theme = createTheme({
  typography: {
    fontFamily: FONT_PRIMARY,
    h1: {
      fontSize: 24,
      fontWeight: 700,
      color: '#212121'
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      color: '#212121'
    },
    body1: {
      fontSize: 15,
      fontWeight: 500,
      color: '#212121'
    },
    body2: {
      fontSize: 15,
      fontWeight: 500,
      color: '#ACACAC'
    },
    button: {
      fontSize: 15,
      fontWeight: 500,
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      light: '#B2C7EF',
      main: '#568AF0',
      dark: '#0058FF'
    },
    secondary: {
      light: '#D9E3F5',
      main: '#F3F3F3',
      dark: '#E2E2E2'
    }
  }
})

interface ThemeConfigProps {
  children: ReactNode;
}

export const ThemeConfig = ({ children }: ThemeConfigProps) => {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}