import TrailsModules from "../TrailsModules/TrailsModules";
import s from "/src/components/AllModules/AllModules.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModuleByIdTrail, getTrailParams } from "../../services/Api";

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
    <div className={s.container}>
      <h2 className={s.h2}>
        Seja bem vindo (a) à trilha sobre {trail.TITULO}!
      </h2>
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
    </div>
  );
}
