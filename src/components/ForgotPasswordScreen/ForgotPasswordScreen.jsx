import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    background: {
      default: "#001024",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
    primary: {
      main: "#00C19C",
    },
    secondary: {
      main: "#F72C89",
    },
    custom: {
      main: "#8A1AD1",
      contrastText: "white",
    },
  },
  typography: {
    fontSize: 12,

    button: {
      fontSize: 12,
      fontWeight: 550,
    },
  },
});

export default function ForgotPasswordScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("e-mail"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "custom.main" }}>
            <SearchIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "text.primary" }}
          >
            Encontre sua conta
          </Typography>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              color="custom"
              sx={{
                fieldSet: {
                  borderColor: "#fff",
                },
                mt: 1,
              }}
            />
            <Grid container>
              <Grid item xs>
                <Link to="/login">
                  <Button
                    type="submit"
                    variant="text"
                    sx={{ mt: 1, mb: 1, ml: 11 }}
                    color="custom"
                  >
                    Cancelar
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/resetpassword">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1, mb: 20 }}
                    color="custom"
                  >
                    Pesquisar
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
