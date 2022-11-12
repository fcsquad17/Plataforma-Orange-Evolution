import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TrailsCardAdmin from "../TrailsCardAdmin/TrailsCardAdmin";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CreateTrail from "../CreateTrail/CreateTrail";
import CreateModule from "../CreateModule/CreateModule";
import CreateContent from "../CreateContent/CreateContent";

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
  const [chosenOption, setChosenOption] = React.useState("");

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
          {chosenOption === "CreateTrail" && <CreateTrail />}
          {chosenOption === "CreateModule" && <CreateModule />}
          {chosenOption === "CreateContent" && <CreateContent />}
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
          <TrailsCardAdmin />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
