import * as React from "react";
import Box from "@mui/material/Box";
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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          margin: " 30px auto",
          borderRadius: "15px",
          backgroundColor: "#202C3B",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            width: "90%",
            minHeight: "50vh",
            margin: "30px 0",
            color: "#00C19C",
          }}
        >
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={handleOpen}
          >
            Criar trilha
          </Button>
          <ModalForm
            open={open}
            put={false}
            handleClose={handleClose}
            handleReload={handleReload}
            trail={true}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#00C19C",
          }}
        >
          <Typography variant="h4" component="h2" sx={{ marginBottom: "30px" }}>
            Trilhas existentes
          </Typography>
          <TrailsCardAdmin reloadAgain={reload} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
