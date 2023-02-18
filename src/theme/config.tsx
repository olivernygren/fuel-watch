import { ReactNode } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

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
  }
})

theme = responsiveFontSizes(theme);

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