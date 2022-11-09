import s from "/src/components/TrailsScreen/TrailsScreen.module.css";

import TrailsCard from '/src/components/TrailsCard/TrailsCard'

import { useState } from "react";

export default function TrailsScreen() {
  const [userData, setUserData] = useState({
    name: "Walter dos Santos",
    email: "walter@123.com",
  });

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.h2}>Que bom te ver de novo, {userData.name}!</h2>
        <h4 className={s.h4}>Continue de onde parou:</h4>
        <TrailsCard />
        <hr className={s.hr}/>
        <h2 className={s.h2}>Conheça nossas demais trilhas:</h2>
        <TrailsCard />
      </div>
    </div>
  );
}
