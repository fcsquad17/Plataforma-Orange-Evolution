import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import {postUserLogin} from '../../services/Api'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

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
  const [ifError, setIfError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()

  const handleChange = (target, key) => {
    const value = target.value;
    setUserLogin({...userLogin, [key]: value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await postUserLogin(userLogin).then((res) => res).catch((error) => error.response.data)
    if(userLogin.email == '' || userLogin.senha == '') {
      setIfError(true)
      setOpen(true);
      setErrorMessage('Algum campo está vazio!')
    } else if(res.error) {
      setIfError(true)
      setOpen(true);
      setErrorMessage(res.msg)
      // console.log(errorMessage)
    } else {
      localStorage.setItem('idUser', res.usuario.ID)
      navigate(`/trails/${res.usuario.ID}`)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{margin: '50px auto', minHeight: '80vh'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOpenOutlinedIcon />
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
            {ifError && (
              <Box sx={{ width: "100%" }}>
                <Collapse in={open}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    severity="error"
                    sx={{ mb: 2 }}
                  >
                    {errorMessage}
                  </Alert>
                </Collapse>
              </Box>
            )}
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
                <Link to={'/forgotpassword'} style={{ color: "#00C19C" }}>
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link to={'/signup'} style={{ color: "#00C19C" }}>
                  Não tem uma conta?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
