import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DataTableAdmin from "../DataTableAdmin/DataTableAdmin";
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

export default function ChildModalAdmin({
  open,
  handleClose,
  title,
  idModule,
}) {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleReload = () => {
    setReload(true);
  };

  React.useEffect(() => {
    if (reload) setReload(false);
  }, [reload]);

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
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
          <h2 id="child-modal-title">Estes são os conteúdos de: {title}</h2>
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
          <DataTableAdmin idModule={idModule} />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
