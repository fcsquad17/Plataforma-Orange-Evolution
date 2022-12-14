import React from "react";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";

export default function TrailsCardUser({ trail }) {
  const selectImage = (title) => {
    if (title === "UX/UI Design") {
      return "/UI-UX-Design-1024x576.jpg";
    } else if (title === "Quality Assurance") {
      return "/novidades.jpg";
    } else {
      return "/fullstack.jpg";
    }
  };

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
      <Card sx={{ maxWidth: 345, maxHeight: 400, backgroundColor: "#202C3B" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={selectImage(trail.TITULO)}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              {trail.TITULO}
            </Typography>
            <Typography variant="body2" color="white">
              {trail.DESCRICAO}
            </Typography>
          </CardContent>
        </CardActionArea>
        <LinearProgressBar progressNumber={trail.PROGRESSO} />
      </Card>
    </Container>
  );
}
