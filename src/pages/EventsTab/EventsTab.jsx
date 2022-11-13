import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import eventbg from "/src/assets/eventbg.png";
import { useParams } from "react-router-dom";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import { getUsersParams } from "../../services/Api";

const styles = {
  paperContainer: {
    backgroundImage: `url(${eventbg})`,
  },
};

export const EventsTab = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();
  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    if (idUser) {
      const response = await getUsersParams(idUser);
      setUser(response.usuario);
    }
  };

  useEffect(() => {
    handleReq();
  }, []);

  return (
    <>
      <ScrollUpButton showBelow={50} />
      {id && idUser && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Meu dados", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[
            `/${localStorage.getItem("idUser")}`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/eventstab/${localStorage.getItem("idUser")}`,
          ]}
          urlSettings={[`/profile/${localStorage.getItem("idUser")}`, "/"]}
        />
      )}
      {!id && (
        <Header
          pages={["Inicio", "Eventos"]}
          settings={["Entrar", "Criar Conta"]}
          urlPage={["/", "/eventstab"]}
          urlSettings={["/login", "/signup"]}
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
