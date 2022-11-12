import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DataTableAdmin from "../DataTableAdmin/DataTableAdmin";

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
            height: '100vh',
            color: "#fff",
            backgroundColor: "#202C3B",
            overflow: "scroll",
          }}
        >
          <h2 id="child-modal-title">Estes são os conteúdos de: {title}</h2>
          <DataTableAdmin idModule={idModule} />
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
