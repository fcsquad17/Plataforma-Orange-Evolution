import * as React from "react";
import { Container } from "@mui/system";
import TrailsCardAdmin from "../TrailsCardAdmin/TrailsCardAdmin";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import ModalForm from "../ModalForm/ModalForm";

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

export default function AdminControlScreen() {
  const [open, setOpen] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReload = () => {
    setReload(true);
  };

  React.useEffect(() => {
    if (reload) setReload(false);
  }, [reload]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: '30px',
          minHeight: '80vh',
          margin: " 30px auto"
        }}
      >
        <ModalForm
          open={open}
          put={false}
          handleClose={handleClose}
          handleReload={handleReload}
          trail={true}
        />
        <Typography variant="h4" component="h4" sx={{color: '#00C19C' }}>
          Trilhas existentes
        </Typography>
        <Button variant="contained" sx={{color: '#fff', fontWeight: 'bold'}} onClick={handleOpen}>
          Criar trilha
        </Button>
        <TrailsCardAdmin reloadAgain={reload} />
      </Container>
    </ThemeProvider>
  );
}
