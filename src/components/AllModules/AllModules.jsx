import TrailsModules from "../TrailsModules/TrailsModules";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModuleByIdTrail } from "../../services/ModulesApi";
import { getTrailParams } from "../../services/TrailsApi";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function AllModules() {
  const [trail, setTrail] = useState({});
  const [modules, setModules] = useState([]);

  const { idTrail } = useParams();

  const handleReq = async (idTrail) => {
    const response = await getTrailParams(idTrail);
    setTrail(response.trilha);
    const response2 = await getModuleByIdTrail(idTrail);
    setModules(response2.modulos);
  };

  useEffect(() => {
    handleReq(idTrail);
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "600px",
        margin: "30px auto",
        padding: "15px",
        minHeight: "80vh",
        color: "#fff",
      }}
    >
      <Typography variant="h5">Seja bem vindo(a) à trilha sobre</Typography>
      <Typography color="#00c19c" variant="h4">
        {trail.TITULO}
      </Typography>
      {modules.map((module) => {
        return (
          <TrailsModules
            TITULO={module.TITULO}
            DESCRICAO={module.DESCRICAO}
            idModulo={module.ID}
            key={module.ID}
          />
        );
      })}
    </Container>
  );
}
