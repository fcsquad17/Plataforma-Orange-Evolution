import React from "react";
import TrailsCard from "/src/components/TrailsCard/TrailsCard";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container } from "@mui/system";

export const OnboardingScreen = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          margin: "30px 0",
        }}
      >
        <Box
          component="img"
          src="/src/assets/oeLogo.svg"
          alt="Orange Evolution"
          sx={{
            width: "32%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#00C19C", fontSize: "2.5rem" }}
          >
            Evolua a sua carreira na tecnologia
          </Typography>
          <Typography sx={{ fontSize: "1.2rem" }}>
            Explore conhecimentos que estão transformando indústrias, negócios e
            vidas através de trilhas gratuitas em Desenvolvimento, UX/UI Design
            e QA!
          </Typography>
          <Link></Link>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ color: "#fff" }}
          >
            QUERO COMEÇAR!
          </Button>
        </Box>
      </Box>
      <Typography
        variant="h4"
        component="h4"
        sx={{ color: "#F72C89", margin: "30px 0" }}
      >
        O QUE É O ORANGE EVOLUTION?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          borderRadius: "15px",
          p: "15px",
          backgroundColor: "#202C3B",
        }}
      >
        <Box
          component="img"
          src="/src/assets/whatis.png"
          alt="O que é o Orange Evolution"
          sx={{ width: "90%", maxWidth: "600px" }}
        />
        <Box>
          <List>
            <ListItem>
              <ListItemText>Se você:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00C19C" }} />
              </ListItemIcon>
              <ListItemText>
                Procura conteúdo tech de qualidade e gratuito
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00C19C" }} />
              </ListItemIcon>
              <ListItemText>
                Está migrando de carreira para a área tech
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00C19C" }} />
              </ListItemIcon>
              <ListItemText>
                Sente que com o apoio de uma comunidade vitaminada irá se
                desenvolver mais
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00C19C" }} />
              </ListItemIcon>
              <ListItemText>
                Quer se preparar de forma mais assertiva para processos
                seletivos
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00C19C" }} />
              </ListItemIcon>
              <ListItemText>
                É protagonista da sua história e formação
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Typography sx={{ fontSize: "1.9rem", color: "#F72C89", margin: "30px" }}>
        O Orange Evolution é para você!
      </Typography>
      <Typography variant="h4" sx={{ color: "#00C19C", margin: "90px 0 30px" }}>
        Quais trilhas poderei fazer?
      </Typography>
      <TrailsCard />
      <Typography variant="h4" sx={{ color: "#00C19C", margin: "30px" }}>
        Quem nos apoia?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "30px 0",
        }}
      >
        <Link
          href="https://www.fcamara.com.br/"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 200,
          }}
        >
          <Box
            component="img"
            src="/src/assets/fcamara.png"
            alt="fcamara"
            sx={{
              filter: "invert(0)",
              transition: ".4s",
              "&:hover": { filter: "invert(1)" },
              width: "100%",
            }}
          />
        </Link>
        <Link
          href="https://www.alura.com.br/"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 200,
          }}
        >
          <Box
            component="img"
            src="src/assets/alura.png"
            alt="alura"
            sx={{
              filter: "invert(0)",
              transition: ".4s",
              "&:hover": { filter: "invert(1)" },
              width: "80%",
            }}
          />
        </Link>
        <Link
          href="https://www.rocketseat.com.br/"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 200,
          }}
        >
          <Box
            component="img"
            src="src/assets/rocketseat.png"
            alt="rocketseat"
            sx={{
              filter: "invert(0)",
              transition: ".4s",
              "&:hover": { filter: "invert(1)" },
              width: "100%",
            }}
          />
        </Link>
        <Link
          href="https://cubos.academy/"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 200,
          }}
        >
          <Box
            component="img"
            src="src/assets/cubosacademy.png"
            alt="cubosacademy"
            sx={{
              filter: "invert(0)",
              transition: ".4s",
              "&:hover": { filter: "invert(1)" },
              width: "80%",
            }}
          />
        </Link>
      </Box>
    </Container>
  );
};
