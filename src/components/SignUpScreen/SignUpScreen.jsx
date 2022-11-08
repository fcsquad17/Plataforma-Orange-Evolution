import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import s from "/src/components/SignUpScreen/SignUpScreen.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: '#001024'
    },
    text: {
      primary: '#fff',
      secondary: '#fff'
    },
    primary: {
      main: '#00C19C'
    },
    secondary: {
      main: '#00C19C'
    }
  }
});

export default function SignUpScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword")
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className={s.container}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "text.primary" }}
          >
            Sign up
          </Typography>
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
              id="name"
              label="Nome completo"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{
                fieldSet: {
                  borderColor: '#fff'
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                fieldSet: {
                  borderColor: '#fff'
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                fieldSet: {
                  borderColor: '#fff'
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Repita a senha"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              sx={{
                fieldSet: {
                  borderColor: '#fff'
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Já tem uma conta?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
