import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HikingIcon from "@mui/icons-material/Hiking";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TocIcon from "@mui/icons-material/Toc";
import GroupIcon from "@mui/icons-material/Group";
import { IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import TrailsCard from "../TrailsCard/TrailsCard";
import Typography from "@mui/material/Typography";
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

export default function AdminControlScreen() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ backgroundColor: "#303A46" }}>
        <ListItem disablePadding sx={{ color: "#000" }}>
          <ListItemButton>
            <ListItemIcon>
              <HikingIcon />
            </ListItemIcon>
            <ListItemText primary={"Trilhas"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ color: "#000" }}>
          <ListItemButton>
            <ListItemIcon>
              <ViewModuleIcon />
            </ListItemIcon>
            <ListItemText primary={"Módulos"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ color: "#000" }}>
          <ListItemButton>
            <ListItemIcon>
              <TocIcon />
            </ListItemIcon>
            <ListItemText primary={"Conteúdos"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding sx={{ color: "#000" }}>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Usuários"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "80vh",
            maxWidth: "1440px",
            width: "90%",
            margin: " 30px auto",
            borderRadius: "15px",
            backgroundColor: "#202C3B",
          }}
        >
          <IconButton
            onClick={toggleDrawer("left", true)}
            sx={{
              margin: "30px auto",
              borderRadius: "5px",
              color: "#fff",
              backgroundColor: "#00C19C",
              "&:hover": { backgroundColor: "#00C19C" },
            }}
          >
            <AdminPanelSettingsIcon sx={{ mr: 1, fontSize: 50 }}>
              {"left"}
            </AdminPanelSettingsIcon>
            Menu de controle
          </IconButton>
          <Drawer
            left={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              maxWidth: "900px",
              width: "90%",
              minHeight: "50vh",
              margin: "30px 0",
              color: "#00C19C",
            }}
          >
            <Box
              sx={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                width: "90%",
                minHeight: "50vh",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginBottom: "30px" }}
              >
                Adição de trilhas
              </Typography>
              <TextField
                id="outlined-basic"
                label="Título"
                variant="outlined"
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <TextField
                id="outlined-multline-flexbile"
                label="Descrição"
                variant="outlined"
                multiline
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ margin: "30px 0", color: "#fff" }}
              >
                Criar trilha
              </Button>
            </Box>
            <Box
              sx={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                width: "90%",
                minHeight: "50vh",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginBottom: "30px" }}
              >
                Adição de módulos
              </Typography>
              <TextField
                id="outlined-basic"
                label="Título do módulo"
                variant="outlined"
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <TextField
                id="outlined-multline-flexbile"
                label="Descrição do módulo"
                variant="outlined"
                multiline
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ margin: "30px 0", color: "#fff" }}
              >
                Criar módulo
              </Button>
            </Box>
            <Box
              sx={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                width: "90%",
                minHeight: "50vh",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginBottom: "30px" }}
              >
                Adição de conteúdos
              </Typography>
              <TextField
                id="outlined-basic"
                label="Título"
                variant="outlined"
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Tipo"
                variant="outlined"
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Duração"
                variant="outlined"
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Fonte"
                variant="outlined"
                multiline
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <TextField
                id="outlined-multline-flexbile"
                label="Descrição"
                variant="outlined"
                multiline
                fullWidth
                sx={{
                  fieldSet: {
                    borderColor: "#fff",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ margin: "30px 0", color: "#fff" }}
              >
                Criar conteúdo
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#00C19C",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: "30px" }}
            >
              Trilhas existentes
            </Typography>
            <TrailsCard />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
