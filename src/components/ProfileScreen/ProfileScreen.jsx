import { useState } from "react";
import { motion } from "framer-motion";
import { Button, TextField, Typography } from "@mui/material";
import { putUser } from "../../services/UsersApi";
import { Container, Box } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

export default function ProfileScreen({ user, handleReload }) {
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [userBody, setUserBody] = useState({
    nome: user.NOME_COMPLETO,
    email: user.EMAIL,
    senha: "",
    admin: 0,
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setUserBody({ ...userBody, [key]: value });
  };

  const handleChangePass = (target) => {
    const value = target.value;
    setPassword(value);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (userBody.senha !== password) {
      setError(true);
      return false;
    }

    await putUser(user.ID, userBody);

    setClicked(false);

    handleReload();
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div animate={{ x: clicked ? -1 : 1 }} initial={{ x: 100 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "0 15px",
            width: "100%",
            minHeight: "80vh",
            margin: "auto",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "90%",
              height: { xs: "100%", md: "462px" },
              margin: "25px 0",
              borderRadius: "5px",
              p: "15px",
              backgroundColor: "#202c3b",
            }}
          >
            <Typography
              sx={{ textAlign: "center", margin: "15px 0" }}
              variant="h5"
            >
              Meus dados
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography>Nome:</Typography>
                <Typography>{user.NOME_COMPLETO}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography>E-mail:</Typography>
                <Typography>{user.EMAIL}</Typography>
              </Box>
            </Box>
            <Button
              sx={{
                width: "150px",
                fontSize: "0.9rem",
                margin: "15px auto",
                borderRadius: "5px",
                border: "none",
                padding: "5px",
                color: "#fff",
                backgroundColor: "#00c19c",
              }}
              onClick={handleClick}
            >
              Alterar dados
            </Button>
          </Box>
          <motion.div
            animate={{ x: clicked ? 1 : -100 }}
            initial={{ x: -100 }}
            style={{
              display: clicked ? "flex" : "none",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
              margin: "25px 0",
              borderRadius: "5px",
              padding: "15px",
              backgroundColor: "#202c3b",
            }}
          >
            <Typography variant="h5" sx={{ margin: "15px 0" }}>
              Altere seus dados
            </Typography>
            <form
              onSubmit={handleOnSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5px",
                width: "100%",
              }}
            >
              <TextField
                id="filled-basic"
                label="Nome Completo"
                variant="filled"
                required
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "none",
                  p: "8px",
                }}
                type={"text"}
                defaultValue={user.NOME_COMPLETO}
                onChange={({ target }) => handleChange(target, "nome")}
              />
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                required
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "none",
                  p: "8px",
                }}
                type={"email"}
                defaultValue={user.EMAIL}
                onChange={({ target }) => handleChange(target, "email")}
              />
              <TextField
                id="filled-basic"
                label="Nova Senha"
                variant="filled"
                required
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "none",
                  p: "8px",
                }}
                type={"password"}
                onChange={({ target }) => handleChange(target, "senha")}
                error={error}
              />
              <TextField
                id="filled-basic"
                label="Confirmar senha"
                variant="filled"
                required
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "#fff",
                  p: "8px",
                }}
                type={"password"}
                onChange={({ target }) => handleChangePass(target)}
                error={error}
              />
              <input
                type="submit"
                value="Alterar"
                style={{
                  width: "150px",
                  fontSize: "1.2rem",
                  margin: "15px auto",
                  borderRadius: "5px",
                  border: "none",
                  padding: "5px",
                  color: "#fff",
                  backgroundColor: "#00c19c",
                }}
              />
            </form>
          </motion.div>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
}
