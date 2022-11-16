import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import eventbg from "/src/assets/eventbg.png";
import { useNavigate } from "react-router-dom";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import { getUsersParams } from "../../services/UsersApi";

const styles = {
  paperContainer: {
    backgroundImage: `url(${eventbg})`,
  },
};

export const EventsTab = () => {
  const [user, setUser] = useState({});

  const idUser = localStorage.getItem("userId");
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  const handleReq = async () => {
    if (idUser && !token) {
      navigate("/401");
      localStorage.clear();
    } else if (!idUser && token) {
      navigate("/401");
      localStorage.clear();
    }

    if (idUser && token) {
      const response = await getUsersParams(idUser).catch((err) => {
        if (err.response.data.error) {
          navigate("/401");
          localStorage.clear();
        }
      });
      setUser(response.usuario);
    }
  };

  useEffect(() => {
    handleReq();
  }, []);

  return (
    <>
      <ScrollUpButton showBelow={50} />
      {idUser && user.ADMIN == 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Meu dados", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[`/`, `/trails/`, `/eventstab/`]}
          urlSettings={[`/profile/`, "/"]}
        />
      )}
      {!idUser && (
        <Header
          pages={["Inicio", "Eventos"]}
          settings={["Entrar", "Criar Conta"]}
          urlPage={["/", "/eventstab"]}
          urlSettings={["/login", "/signup"]}
        />
      )}
      {idUser && user.ADMIN > 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Painel de Controle", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[`/`, `/trails/`, `/eventstab/`]}
          urlSettings={[`/admin/`, "/"]}
        />
      )}
      <Box style={styles.paperContainer} sx={{ backgroundColor: "black" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" sx={{ color: "#FF5A23", fontSize: "70px" }}>
            Event
          </Typography>
          <Typography variant="h1" sx={{ color: "#ffffff", fontSize: "70px" }}>
            Hunter
          </Typography>
        </Grid>
        <EventCard />
        <Footer />
      </Box>
    </>
  );
};
