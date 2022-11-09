import s from "./TrailsCard.module.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const cards = [
    {
      id: 1,
      photo: "/src/assets/fullstack.jpg",
      trailTitle: "Desenvolvimento Full-Stack",
      trailDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: 2,
      photo: "/src/assets/fullstack.jpg",
      trailTitle: "Desenvolvimento Full-Stack",
      trailDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: 3,
      photo: "/src/assets/fullstack.jpg",
      trailTitle: "Desenvolvimento Full-Stack",
      trailDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  return (
    <div className={s.cardStyle}>
      {cards.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 345, backgroundColor: "#202C3B" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.photo}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
              >
                {card.trailTitle}
              </Typography>
              <Typography variant="body2" color="white">
                {card.trailDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
