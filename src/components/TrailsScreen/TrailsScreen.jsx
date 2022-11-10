import s from "/src/components/TrailsScreen/TrailsScreen.module.css";
import TrailsCard from "/src/components/TrailsCard/TrailsCard";
import TrailsCardUser from "../TrailsCardUser/TrailsCardUser";
import { useEffect, useState } from "react";
import {
  getContentOfUserByTrailId,
  getUserTrailsParams,
} from "../../services/Api";

export default function TrailsScreen({ user }) {
  const [userTrails, setUserTrails] = useState([]);

  const handleOnReq = async (idUser) => {
    const response = await getUserTrailsParams(idUser);
    setUserTrails(response.trilhas);
  };

  const handleOnReq2 = async (idUser, idTrail) => {
    const response = await getContentOfUserByTrailId(idUser, idTrail);
    const filterContentId = response.conteudos.filter((conteudo) => {
      return conteudo.ID;
    });
    console.log(await filterContentId);
  };

  useEffect(() => {
    handleOnReq(user.ID);
  }, []);

  useEffect(() => {
    const filterTrailId = userTrails.map((object) => object.ID);
    filterTrailId.map((trail) => handleOnReq2(user.ID, trail));
  }, [userTrails]);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.h2}>
          Que bom te ver de novo,{" "}
          {user.NOME_COMPLETO ? user.NOME_COMPLETO.split(" ")[0] : null}!
        </h2>
        <h4 className={s.h4}>Continue de onde parou:</h4>
        <div className={s.cardStyle}>
          {userTrails.map((card) => {
            return (
              <TrailsCardUser key={card.ID} trail={card} progressNumber={30} />
            );
          })}
        </div>
        <hr className={s.hr} />
        <h2 className={s.h2}>Conheça nossas demais trilhas:</h2>
        <TrailsCard />
      </div>
    </div>
  );
}
