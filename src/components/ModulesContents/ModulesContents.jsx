import * as React from "react";
import { Box, Chip, Link, Stack } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import {
  postContentOfUserDone,
  deleteContentOfUser,
} from "../../services/UserContentApi";

const theme = createTheme({
  text: {
    primary: "#fff",
    secondary: "#fff",
  },
  palette: {
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
    success: {
      main: "#8A1AD1",
    },
    error: {
      main: "#ff5a23",
    },
    warning: {
      main: "#23C8FF",
    },
    info: {
      main: "#FFC823",
    },
  },
});

export default function ModulesContents({
  contents,
  ultimoVisto,
  handleOnReload,
}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const idUser = localStorage.getItem("idUser");

  const handleNext = (idContent) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    postContentOfUserDone({ idUser: idUser, idContent: idContent, done: 1 });
    handleOnReload();
  };

  const handleBack = (idContent) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    deleteContentOfUser(idUser, idContent);
    handleOnReload();
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    setActiveStep(ultimoVisto);
  }, [ultimoVisto]);

  const setColor = (contentTIPO) => {
    if (contentTIPO === "Live" || contentTIPO === "Vídeo") return "success";
    if (contentTIPO === "Artigo" || contentTIPO === "Glossário") return "error";
    if (contentTIPO === "Livro" || contentTIPO === "Apostila") return "info";
    if (contentTIPO === "Curso") return "secondary";
  };

  const setTime = (contentDURACAO) => {
    if (contentDURACAO > 3600) return `${contentDURACAO / 3600} horas`;
    if (contentDURACAO > 60) return `${contentDURACAO / 60} minutos`;
    if (contentDURACAO === 0) return "---";
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400, color: "#fff" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {contents.map((content, index) => (
            <Step key={content.ID}>
              <StepLabel>
                <Typography
                  sx={{
                    textShadow: "#131313 2px 3px 2px",
                    fontWeight: "500px",
                  }}
                >
                  {content.TITULO}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography fontSize={13}>{content.DESCRICAO}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={1} sx={{ m: 1 }}>
                    <Chip
                      label={setTime(content.DURACAO)}
                      color="warning"
                      size="small"
                    />
                    <Chip
                      label={content.TIPO}
                      color={setColor(content.TIPO)}
                      size="small"
                    />
                  </Stack>

                  <Button
                    variant="contained"
                    onClick={() => {
                      handleNext(content.ID);
                    }}
                    sx={{
                      mt: 1,
                      mr: 1,
                      color: "#fff",
                      backgroundColor: "#2c2c2c",
                      "&:hover": { backgroundColor: "#6B3CC7" },
                    }}
                  >
                    {index === contents.length - 1 ? "Terminar" : "Continuar"}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleNext(content.ID);
                    }}
                    sx={{
                      mt: 1,
                      mr: 1,
                      color: "#fff",
                      backgroundColor: "#2c2c2c",
                      "&:hover": { backgroundColor: "#6B3CC7" },
                    }}
                  >
                    <Link
                      href={content.FONTE}
                      target={"_blank"}
                      style={{ color: "#fff" }}
                    >
                      Acessar link
                    </Link>
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => {
                      handleBack(content.ID);
                    }}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Voltar
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === contents.length && (
          <Paper square elevation={0} sx={{ p: 3, backgroundColor: "#202C3B" }}>
            <Typography>
              Parabéns! Você terminou esse módulo, se quiser pode clicar no
              botão abaixo e refazer a trilha.
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Refazer
            </Button>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
}
