import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ChildModalAdmin from "../ChildModalAdmin/ChildModalAdmin.";
import { Container } from "@mui/material";
import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import AlertDialog from "../AlertDialog/AlertDialog";

export default function TrailsModuleAdmin({
  title,
  desc,
  setSelectedModule,
  selectedModule,
  module,
  handleReload,
}) {
  const [selectedModuleDelete, setSelectedModuleDelete] = useState(0);
  const [selectedModuleEdit, setSelectedModuleEdit] = useState(0);
  const handleOpen = (module) => {
    setSelectedModule((selectedModule) =>
      selectedModule.ID === module.ID ? null : module
    );
  };

  const handleOpenDelete = (module) => {
    setSelectedModuleDelete((selectedModule) =>
      selectedModule.ID === module.ID ? null : module
    );
  };

  const handleOpenEdit = (module) => {
    setSelectedModuleEdit((selectedModule) =>
      selectedModule.ID === module.ID ? 0 : module
    );
  };

  const handleClose = () => {
    setSelectedModule(0);
  };

  const handleCloseDelete = () => {
    setSelectedModuleDelete(0);
  };

  const handleCloseEdit = () => {
    setSelectedModuleEdit(0);
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
        open={selectedModule.ID === module.ID}
        handleClose={handleClose}
        title={module.TITULO}
        idModule={module.ID}
      />
      <AlertDialog
        open={selectedModuleDelete.ID === module.ID}
        handleClose={handleCloseDelete}
        title={module.TITULO}
        sx={{ backgroundColor: "#202C3B" }}
        handleReload={handleReload}
        id={module.ID}
        trail={true}
      />
      <ModalForm
        put={true}
        module={module}
        handleClose={handleCloseEdit}
        open={selectedModuleEdit.ID === module.ID}
        handleReload={handleReload}
      />
      <Card sx={{ maxWidth: 375, backgroundColor: "#202C3B" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Título: {title}
          </Typography>
          <Typography>Descrição: {desc}</Typography>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => {
              handleOpenEdit(module);
            }}
          >
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
            onClick={() => {
              handleOpenDelete(module);
            }}
          >
            Deletar
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
