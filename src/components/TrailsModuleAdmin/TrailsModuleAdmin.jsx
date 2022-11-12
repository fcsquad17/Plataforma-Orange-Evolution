import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ChildModalAdmin from '../ChildModalAdmin/ChildModalAdmin.';
import { Container } from "@mui/material";
import { useState } from "react";

export default function TrailsModuleAdmin({ title, desc, setSelectedModule, selectedModule, module }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (module) => {
    setSelectedModule(selectedModule => selectedModule.ID === module.ID ? null : module)
  };

  const handleClose = () => {
    setSelectedModule(0)
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      <ChildModalAdmin
        setOpen={setOpen}
        open={selectedModule.ID === module.ID}
        handleClose={handleClose}
        title={module.TITULO}
        idModule={module.ID}
      />
      <Card sx={{ maxWidth: 375, backgroundColor: "#202C3B"}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Título: {title}
          </Typography>
          <Typography>Descrição: {desc}</Typography>
          <Button variant="contained" sx={{ margin: "5px" }}>
            Editar
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => handleOpen(module)}
          >
            Conteúdos
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            sx={{
              color: "#ca3433",
              border: "1px solid #ca3433",
              "&:hover": {
                border: "1px solid #ca3433",
                backgroundColor: "#420d09",
              },
              margin: "5px",
            }}
          >
            Deletar
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
