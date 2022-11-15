import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";
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
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: "custom.main" }}>
          <LockOpenIcon sx={{ fontSize: 30 }} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "text.primary" }}>
          Redefinição de senha
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
        <Typography
          component="h4"
          variant="subtitle1"
          sx={{ color: "text.primary" }}
          align="left"
        >
          Informe seu código encaminhado por e-mail
        </Typography>
        <Box onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Código"
            name="password"
            autoComplete="password"
            autoFocus
            color="custom"
            sx={{
              fieldSet: {
                borderColor: "#fff",
              }
            }}
          />
          <Typography
            component="h4"
            variant="subtitle1"
            sx={{ color: "text.primary", mt: '30px' }}
            align="center"
          >
            Agora escolha uma nova senha
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Nova senha"
            name="password"
            autoComplete="password"
            autoFocus
            color="custom"
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
              mt: 1,
            }}
          />
          <Typography
            component="h4"
            variant="subtitle1"
            sx={{ color: "text.primary" }}
            align="center"
          >
            Repita a nova senha e confirme sua escolha
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Nova senha"
            name="email"
            autoComplete="password"
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
              <Link to="/forgotpassword">
                <Button type="submit" variant="text" color="custom">
                  Cancelar
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login">
                <Button type="submit" variant="contained" color="custom">
                  CONFIRMAR
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
