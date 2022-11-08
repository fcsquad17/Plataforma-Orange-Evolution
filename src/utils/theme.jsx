import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#001024',
        soft: '#202C3B'
      },
      secondary: { 
        main: '#00C19C'
      },
      custom: {
        main: 'black',
        contrastText: '#00C19C'
    },
  }
});