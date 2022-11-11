import React from "react";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import s from "./TrailsCardUser.module.css";

export default function TrailsCardUser({ trail }) {
  const selectImage = (title) => {
    if (title === "UX/UI Design") {
      return "/src/assets/UI-UX-Design-1024x576.jpg";
    } else if (title === "Quality Assurance") {
      return "/src/assets/novidades.jpg";
    } else {
      return "/src/assets/fullstack.jpg";
    }
  };

  return (
    <div className={s.cardStyle}>
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
    </div>
  );
}
