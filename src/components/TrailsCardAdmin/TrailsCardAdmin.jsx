import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalAdmin from "../ModalAdmin/ModalAdmin";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllTrails } from "../../services/Api";
import AlertDialog from "../AlertDialog/AlertDialog";
import ModalForm from "../ModalForm/ModalForm";

export default function TrailsCardAdmin({ reloadAgain }) {
  const [selectedTrailDelete, setSelectedTrailDelete] = useState(0);
  const [selectedTrailEdit, setSelectedTrailEdit] = useState(0);
  const [selectedTrail, setSelectedTrail] = useState(0);
  const [reload, setReload] = useState(false);
  const [trails, setTrails] = useState([]);

  const handleOpen = (trail) => {
    setSelectedTrail((selectedTrail) =>
      selectedTrail.ID === trail.ID ? 0 : trail
    );
  };
  const handleClose = () => {
    setSelectedTrail(0);
  };

  const handleOpenDelete = (trail) => {
    setSelectedTrailDelete((selectedTrail) =>
      selectedTrail.ID === trail.ID ? null : trail
    );
  };

  const handleOpenEdit = (trail) => {
    setSelectedTrailEdit((selectedTrail) =>
      selectedTrail.ID === trail.ID ? null : trail
    );
  };

  const handleCloseDelete = () => {
    setSelectedTrailDelete(0);
  };

  const handleCloseEdit = () => {
    setSelectedTrailEdit(0);
  };

  const handleOnReq = async () => {
    const response = await getAllTrails();
    setTrails(response.trilhas);
  };

  const handleReload = () => {
    setReload(true);
  };

  const selectImage = (title) => {
    if (title === "UX/UI Design") {
      return "/src/assets/UI-UX-Design-1024x576.jpg";
    } else if (title === "Quality Assurance") {
      return "/src/assets/novidades.jpg";
    } else {
      return "/src/assets/fullstack.jpg";
    }
  };

  useEffect(() => {
    if (reload || reloadAgain) {
      setReload(false);
    }
    handleOnReq();
  }, [reload, reloadAgain]);

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {trails.map((trail) => (
        <Card key={trail.ID} sx={{ maxWidth: 375, backgroundColor: "#202C3B" }}>
          <AlertDialog
            open={selectedTrailDelete.ID === trail.ID}
            handleClose={handleCloseDelete}
            title={trail.TITULO}
            sx={{ backgroundColor: "#202C3B" }}
            handleReload={handleReload}
            id={trail.ID}
            trail={true}
          />
          <ModalForm
            put={true}
            trail={trail}
            handleClose={handleCloseEdit}
            open={selectedTrailEdit.ID === trail.ID}
            handleReload={handleReload}
          />
          <ModalAdmin
            title={trail.TITULO}
            open={selectedTrail.ID === trail.ID}
            handleClose={handleClose}
            trailId={trail.ID}
          />
          <CardMedia
            component="img"
            height="140"
            image={selectImage(trail.TITULO)}
            alt={trail.TITULO}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              {trail.TITULO}
            </Typography>
            <Button
              variant="contained"
              sx={{ margin: "5px", color: '#fff' }}
              onClick={() => {
                handleOpenEdit(trail);
              }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "5px", color: '#fff' }}
              onClick={() => handleOpen(trail)}
            >
              Módulos
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
                handleOpenDelete(trail);
              }}
            >
              Deletar
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
