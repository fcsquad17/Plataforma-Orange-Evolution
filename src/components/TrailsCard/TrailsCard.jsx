import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import {
  getAllTrails,
  getFirstContentByIdTrail,
  postContentOfUserDone,
} from "../../services/Api";
import { Container } from "@mui/system";

export default function TrailsCard({ userId, handleOnReload }) {
  const [trails, setTrails] = useState([]);

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

  const handleOnAdd = async (trailId) => {
    if (userId) {
      const response = await getFirstContentByIdTrail(trailId);
      await postContentOfUserDone({
        idUser: userId,
        idContent: response.conteudo.ID,
        done: 0,
      });
      handleOnReload();
    }
  };

  useEffect(() => {
    handleOnReq();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: {xs: "center", lg: 'space-between'},
        alignItems: "center",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      {trails.map((trail) => (
        <Card key={trail.ID} sx={{ maxWidth: 345, backgroundColor: "#202C3B" }}>
          <CardActionArea
            onClick={() => {
              handleOnAdd(trail.ID);
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={selectImage(trail.TITULO)}
              alt={trail.TITULO}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
              >
                {trail.TITULO}
              </Typography>
              <Typography variant="body2" color="white">
                {trail.DESCRICAO}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
}
