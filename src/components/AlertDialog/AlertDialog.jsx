import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  deleteContentParams,
  deleteModuleParams,
  deleteTrailParams,
} from "../../services/Api";

export default function AlertDialog({
  open,
  handleClose,
  title,
  id,
  handleReload,
  content,
  module,
  trail,
}) {
  const handleReq = async (id) => {
    if (content) {
      await deleteContentParams(id);
    } else if (module) {
      await deleteModuleParams(id);
    } else if (trail) {
      await deleteTrailParams(id);
    }
    handleReload();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "black" }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "black" }}
          >
            Tem certeza que deseja excluir?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Não</Button>
          <Button
            onClick={() => {
              handleReq(id);
            }}
            autoFocus
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
