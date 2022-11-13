import s from "/src/components/TrailsScreen/TrailsScreen.module.css";
import TrailsCard from "/src/components/TrailsCard/TrailsCard";
import TrailsCardUser from "../TrailsCardUser/TrailsCardUser";
import { useEffect, useState } from "react";
import { getUserTrailsParams } from "../../services/Api";
import { progressBarTrail } from "../../utils/progressLogic";
import { Link } from "react-router-dom";

export default function TrailsScreen({ user }) {
  const [userTrails, setUserTrails] = useState([]);
  const [reload, setReload] = useState(false);

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
    if (reload) {
      setReload(false);
    }
    handleOnReq(user.ID);
  }, [reload]);

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
              <Link to={`/trailscontent/${user.ID}/${card.ID}`} key={card.ID}>
                <TrailsCardUser trail={card} progressNumber={card} />
              </Link>
            );
          })}
        </div>
        <hr className={s.hr} />
        <h2 className={s.h2}>Conheça nossas demais trilhas:</h2>
        <TrailsCard userId={user.ID} handleOnReload={handleOnReload} />
      </div>
    </div>
  );
}
