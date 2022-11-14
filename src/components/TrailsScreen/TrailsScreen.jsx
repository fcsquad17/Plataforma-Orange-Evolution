import TrailsCard from "/src/components/TrailsCard/TrailsCard";
import TrailsCardUser from "../TrailsCardUser/TrailsCardUser";
import { useEffect, useState } from "react";
import { getUserTrailsParams } from "../../services/Api";
import { progressBarTrail } from "../../utils/progressLogic";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, Typography } from "@mui/material";

export default function TrailsScreen({ user }) {
  const [userTrails, setUserTrails] = useState([]);
  const [reload, setReload] = useState(false);
  const [hasReloaded, setHasReloaded] = useState(false);
  const handleOnReq = async (idUser) => {
    const response = await getUserTrailsParams(idUser);

    const resWithProgress = await Promise.all(
      response.trilhas.map((trilha) => {
        return progressBarTrail(idUser, trilha.ID);
      })
    );
    setUserTrails(resWithProgress);
  };

  const handleOnReload = () => {
    setReload(true);
  };

  useEffect(() => {
    handleOnReq(user.ID);
    setHasReloaded(true);
  }, []);

  useEffect(() => {
    if (reload) {
      setReload(false);
      handleOnReq(user.ID);
    }
  }, [reload]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px auto",
        color: "#fff",
      }}
    >
      <Box>
        <Typography color="#00c19c" variant="h5" sx={{ fontWeight: "bold" }}>
          Que bom te ver de novo,{" "}
          {user.NOME_COMPLETO ? user.NOME_COMPLETO.split(" ")[0] : null}!
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Continue de onde parou:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          {userTrails.map((card) => {
            return (
              <Link to={`/trailscontent/${user.ID}/${card.ID}`} key={card.ID}>
                <TrailsCardUser trail={card} progressNumber={card} />
              </Link>
            );
          })}
        </Box>
        <hr style={{ width: "90%" }} />
        <Typography color="#00c19c" variant="h5" sx={{ fontWeight: "bold" }}>
          Conheça nossas demais trilhas:
        </Typography>
        <TrailsCard userId={user.ID} handleOnReload={handleOnReload} />
      </Box>
    </Container>
  );
}
