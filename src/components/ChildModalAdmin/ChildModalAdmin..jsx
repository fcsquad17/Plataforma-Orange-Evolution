import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DataTableAdmin from "../DataTableAdmin/DataTableAdmin";
import ModalForm from "../ModalForm/ModalForm";
import { Typography } from "@mui/material";

export default function ChildModalAdmin({
  open,
  handleClose,
  title,
  idModule,
}) {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [reloadAd, setReloadAd] = React.useState(false);

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleReload = () => {
    setReloadAd(true);
  };

  React.useEffect(() => {
    if (reloadAd) setReloadAd(false);
  }, [reloadAd]);

  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          p: "15px",
          color: "#fff",
          backgroundColor: "#202C3B",
          overflow: "scroll",
        }}
      >
        <Typography id="child-modal-title" p="6px 8px" variant="h5">
          Estes são os conteúdos de: {title}
        </Typography>
        <ModalForm
          open={openCreate}
          content={true}
          handleClose={handleCloseCreate}
          handleReload={handleReload}
          put={false}
          id={idModule}
        />
        <Button onClick={handleClose}>Voltar</Button>
        <Button onClick={handleOpenCreate}>Criar conteudo</Button>
        <DataTableAdmin idModule={idModule} reloadAd={reloadAd} />
      </Box>
    </Modal>
  );
}
