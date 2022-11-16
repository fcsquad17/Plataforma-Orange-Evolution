import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ChildModalAdmin from "../ChildModalAdmin/ChildModalAdmin.";
import { Box } from "@mui/material";
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
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "#202C3B",
        margin: "15px",
        border: "1px solid",
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
        module={true}
      />
      <ModalForm
        put={true}
        module={module}
        handleClose={handleCloseEdit}
        open={selectedModuleEdit.ID === module.ID}
        handleReload={handleReload}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "5px",
          height: "100%",
        }}
      >
        <Typography variant="h5" component="div" color="white">
          Título: {title}
        </Typography>
        <Typography>Descrição: {desc}</Typography>
        <Box sx={{ display: "flex", flexFlow: "row wrap", gap: "5px" }}>
          <Button
            variant="contained"
            onClick={() => {
              handleOpenEdit(module);
            }}
            sx={{ color: "#fff" }}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            onClick={() => handleOpen(module)}
            sx={{ color: "#fff" }}
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
            }}
            onClick={() => {
              handleOpenDelete(module);
            }}
          >
            Deletar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
