import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TrailsModuleAdmin from "../TrailsModuleAdmin/TrailsModuleAdmin";
import { getModuleByIdTrail } from "../../services/Api";
import { useEffect, useState } from "react";

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
  const [modules, setModules] = React.useState([]);
  const [selectedModule, setSelectedModule] = useState(0);

  const handleReq = async(trailId) => {
    const response = await getModuleByIdTrail(trailId)
    setModules(response.modulos)
  }

  useEffect(() => {
    handleReq(trailId)
  }, [])

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
          width: '100vw',
          height: "100vh",
          color: "#fff",
          backgroundColor: "#202C3B",
          overflow: "scroll",
        }}
      >
        <h2 id="parent-modal-title">Estes são os módulos da trilha: {title}</h2>
        {modules.map((module) => {
          return (
            <TrailsModuleAdmin
              key={module.ID}
              title={module.TITULO}
              desc={module.DESCRICAO}
              module={module}
              selectedModule={selectedModule}
              setSelectedModule={setSelectedModule}
            />
          );
        })}
        <Button onClick={handleClose}>Close modal</Button>
      </Box>
    </Modal>
  );
}
