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

export default function TrailsCardAdmin() {
  const [selectedTrail, setSelectedTrail] = useState(0)
  const [reload, setReload] = useState(false);
  const [trails, setTrails] = useState([]);
  const [open, setOpen] = useState({open: false, numberOfTrail: null});

  const handleOpen = (trail) => {
    setSelectedTrail(selectedTrail => selectedTrail.ID === trail.ID ? null : trail)
  };
  const handleClose = () => {
    setSelectedTrail(0)
  };

  const handleOnReq = async () => {
    const response = await getAllTrails();
    setTrails(response.trilhas);
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

  const handleReload = () => {
    setReload(true);
  };

  useEffect(() => {
    handleOnReq();
  }, []);

  useEffect(() => {
    if(reload) setReload(false)
  }, [reload])

  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      {trails.map((trail) => (
        <Card key={trail.ID} sx={{ maxWidth: 375, backgroundColor: "#202C3B" }}>
          <ModalAdmin
            title={trail.TITULO}
            setOpen={setOpen}
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
            <Button variant="contained" sx={{ margin: "5px" }}>
              Editar
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "5px" }}
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
            >
              Deletar
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
