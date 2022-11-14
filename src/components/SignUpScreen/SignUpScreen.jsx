import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { postUser } from "../../services/UsersApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

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
      main: "#00C19C",
    },
  },
});

export default function SignUpScreen() {
  const [userLogin, setUserLogin] = useState({
    nome: "",
    email: "",
    senha: "",
    admin: 0,
  });
  const [userPassword, setUserPassword] = useState("");
  const [ifError, setIfError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleChange = (target, key) => {
    const value = target.value;
    setUserLogin({ ...userLogin, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resposta = await postUser(userLogin)
      .then((res) => res.response)
      .catch((err) => err.response);
    if (userLogin.nome === "") {
      setIfError(true);
      setOpen(true);
      setErrorMessage('O campo "Nome" está vazio!');
    } else if (userLogin.email === "") {
      setIfError(true);
      setOpen(true);
      setErrorMessage('O campo "Email" está vazio!');
    } else if (userLogin.senha === "") {
      setIfError(true);
      setOpen(true);
      setErrorMessage('O campo "Senha" está vazio!');
    } else if (userPassword === "") {
      setIfError(true);
      setOpen(true);
      setErrorMessage('O campo "Repita a senha" está vazio!');
    } else if (userPassword !== userLogin.senha) {
      setIfError(true);
      setOpen(true);
      setErrorMessage("As senhas são diferentes");
    } else if (resposta) {
      if (resposta.data.error) {
        setIfError(true);
        setOpen(true);
        setErrorMessage(resposta.data.msg);
      }
    } else {
      navigate("/login");
    }
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
          margin: '30px auto'
        }}
      >
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "text.primary" }}>
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome completo"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={({ target }) => handleChange(target, "nome")}
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
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
            onChange={({ target }) => handleChange(target, "email")}
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
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
            onChange={({ target }) => handleChange(target, "senha")}
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
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
            onChange={(e) => setUserPassword(e.target.value)}
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
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
            Registrar
          </Button>
          <Link to={"/login"} style={{ color: "#00C19C" }}>
            Já tem uma conta?
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
