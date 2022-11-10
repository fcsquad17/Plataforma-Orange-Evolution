import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {postUserLogin} from '../../services/Api'
import {useNavigate} from 'react-router-dom'

import s from "/src/components/LoginScreen/LoginScreen.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";

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

export default function LoginScreen() {
  const [userLogin, setUserLogin] = useState({email: '', senha: ''})

  const navigate = useNavigate()

  const handleChange = (target, key) => {
    const value = target.value;
    setUserLogin({...userLogin, [key]: value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await postUserLogin(userLogin)
    localStorage.setItem('idUser', res.usuario.ID)
    res.error ? null : navigate(`/trails/${res.usuario.ID}`)
  }

  useEffect(() => {
    console.log(userLogin)
  }, [userLogin])

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
            Login
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
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                fieldSet: {
                  borderColor: '#fff'
                }
              }}
              onChange={({target}) => handleChange(target, 'email')}
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
              onChange={({target}) => handleChange(target, 'senha')}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem uma conta?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
