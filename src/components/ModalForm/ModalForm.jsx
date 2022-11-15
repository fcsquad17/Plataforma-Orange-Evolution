import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreateTrail from "../CreateTrail/CreateTrail";
import CreateModule from "../CreateModule/CreateModule";
import CreateContent from "../CreateContent/CreateContent";

export default function ModalForm({
  put,
  content,
  trail,
  module,
  handleClose,
  open,
  handleReload,
  id,
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
            width: "100vw",
            height: "100vh",
            color: "#fff",
            backgroundColor: "#202C3B",
            overflow: "scroll",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {content && (
            <CreateContent
            content={put ? content : null}
            handleReload={handleReload}
            handleClose={handleClose}
              id={id}
              />
              )}
          {module && (
            <CreateModule
              module={put ? module : null}
              handleReload={handleReload}
              handleClose={handleClose}
              id={id}
              />
              )}
          {trail && (
            <CreateTrail
              trail={put ? trail : null}
              handleReload={handleReload}
              handleClose={handleClose}
            />
            )}
        </Box>
      </Modal>
    </React.Fragment>
  );
}
