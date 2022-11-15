import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EventCard() {
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const events = [
    {
      id: 1,
      title: "Orange Meet Up | Elastic + FCamara",
      date: "10 nov - 2022 • 19:00 > 21:45",
      image: "/evento1.jpg",
      local: "Evento presencial em FCamara Santos, Santos - SP",
      description:
        "Primeiro meet up da Orange Juice, junto com a Elastic e o Grupo FCamara, trazendo o tema sobre observabilidade dentro no mundo tech. O evento é totalmente gratuito e recomendamos ficar até o final, pois vai rolar um coffee break com muito networking! Transmissão online vai rolar na Twitch da Orange Juice! https://www.twitch.tv/orangejuice_tech ",
    },
    {
      id: 2,
      title: "Orange Meet Up | Elastic + FCamara",
      date: "10 nov - 2022 • 19:00 > 21:45",
      image: "/evento1.jpg",
      local: "Evento presencial em FCamara Santos, Santos - SP",
      description:
        "Primeiro meet up da Orange Juice, junto com a Elastic e o Grupo FCamara, trazendo o tema sobre observabilidade dentro no mundo tech. O evento é totalmente gratuito e recomendamos ficar até o final, pois vai rolar um coffee break com muito networking! Transmissão online vai rolar na Twitch da Orange Juice! https://www.twitch.tv/orangejuice_tech ",
    },
    {
      id: 3,
      title: "Orange Meet Up | Elastic + FCamara",
      date: "10 nov - 2022 • 19:00 > 21:45",
      image: "/evento1.jpg",
      local: "Evento presencial em FCamara Santos, Santos - SP",
      description:
        "Primeiro meet up da Orange Juice, junto com a Elastic e o Grupo FCamara, trazendo o tema sobre observabilidade dentro no mundo tech. O evento é totalmente gratuito e recomendamos ficar até o final, pois vai rolar um coffee break com muito networking! Transmissão online vai rolar na Twitch da Orange Juice! https://www.twitch.tv/orangejuice_tech ",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "wrap",
        maxWidth: "1440px",
        gap: "20px",
        justifyContent: "center",
        height: "100%",
        minHeight: "100vh",
        mb: "20px",
      }}
    >
      {events.map((event, i) => (
        <Card
          sx={{
            maxWidth: 345,
            color: "#ffffff",
            border: "#FF5A23",
            backgroundColor: "#000000dc",
            height: "100%",
            mt: "40px",
            mb: "40px",
          }}
          style={{ border: "1px solid #FF5A23" }}
          key={event.id}
        >
          <CardHeader sx={{ color: "#FF5A23" }} title={event.title} />
          <CardMedia
            component="img"
            height="194"
            image={event.image}
            alt="promocional"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              mb: 0,
            }}
          >
            <LocationOnIcon sx={{ mt: 1, color: "#FF5A23" }} />
            <Typography sx={{ ml: 1, color: "white" }} variant="body2">
              {event.local}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              m: 0,
            }}
          >
            <CalendarMonthIcon sx={{ mt: 0, color: "#FF5A23" }} />
            <Typography
              sx={{ mt: 0.4, ml: 1, color: "#ffffff" }}
              variant="body2"
            >
              {event.date}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: "#FF5A23" }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon sx={{ color: "#FF5A23" }} />
            </IconButton>
            <ExpandMore
              onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ color: "#FF5A23" }} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph color="branquinha">
                {event.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Container>
  );
}
