import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TrailsModuleAdmin from "../TrailsModuleAdmin/TrailsModuleAdmin";
import { getModuleByIdTrail } from "../../services/Api";
import { useEffect, useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import { Typography } from "@mui/material";

export default function ModalAdmin({ handleClose, open, title, trailId }) {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(0);
  const [reload, setReload] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const handleReq = async (trailId) => {
    const response = await getModuleByIdTrail(trailId);
    setModules(response.modulos);
  };

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleReload = () => {
    setReload(true);
  };

  useEffect(() => {
    if (reload) setReload(false);
    handleReq(trailId);
  }, [reload]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '100vw',
          height: "100vh",
          color: "#fff",
          backgroundColor: "#202C3B",
          overflow: "scroll",
        }}
      >
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Typography id="parent-modal-title" variant="h5" p="6px 8px">
            Estes são os módulos da trilha: {title}
          </Typography>
          <Box>
            <Button onClick={handleClose}>Voltar</Button>
            <Button onClick={handleOpenCreate}>Criar Módulo</Button>
          </Box>
        </Box>
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center"
          }}
        >
          <ModalForm
            module={true}
            put={false}
            handleReload={handleReload}
            id={trailId}
            handleClose={handleCloseCreate}
            open={openCreate}
          />
          {modules.map((module) => {
            return (
              <TrailsModuleAdmin
                key={module.ID}
                title={module.TITULO}
                desc={module.DESCRICAO}
                module={module}
                selectedModule={selectedModule}
                setSelectedModule={setSelectedModule}
                handleReload={handleReload}
              />
            );
          })}
        </Box>
      </Box>
    </Modal>
  );
}
