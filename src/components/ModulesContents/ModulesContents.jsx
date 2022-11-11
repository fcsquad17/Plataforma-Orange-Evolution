import * as React from "react";
import { Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { postContentOfUserDone, deleteContentOfUser } from "../../services/Api";

const theme = createTheme({
  palette: {
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
    background: {
      default: "#001024",
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400, color: "#fff" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {contents.map((content, index) => (
            <Step key={content.ID}>
              <StepLabel>{content.TITULO}</StepLabel>
              <StepContent>
                <Typography>{content.DESCRICAO}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleNext(content.ID);
                      }}
                      sx={{
                        mt: 1,
                        mr: 1,
                        color: "#fff",
                        backgroundColor: "#6B3CC7",
                        "&:hover": { backgroundColor: "#5558BE" },
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
                        backgroundColor: "#6B3CC7",
                        "&:hover": { backgroundColor: "#5558BE" },
                      }}
                    >
                      <a
                        href={content.FONTE}
                        target={"_blank"}
                        style={{ color: "#fff" }}
                      >
                        Acessar link
                      </a>
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
                  </div>
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
