import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TrailsModuleAdmin from "../TrailsModuleAdmin/TrailsModuleAdmin";
import { getModuleByIdTrail } from "../../services/ModulesApi";
import { useEffect, useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
      // sx={{backdropFilter: 'blur(5px)'}}
    >
      <Box
        sx={{
          ...style,
          width: "100vw",
          height: "100vh",
          color: "#fff",
          backgroundColor: "#202C3B",
          overflow: "scroll",
        }}
      >
        <h2 id="parent-modal-title">Estes são os módulos da trilha: {title}</h2>
        <Button onClick={handleClose}>Voltar</Button>
        <Button onClick={handleOpenCreate}>Criar Módulo</Button>
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
    </Modal>
  );
}
