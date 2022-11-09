import { useState } from "react";
import s from "/src/components/ProfileScreen/ProfileScreen.module.css";
import { motion } from "framer-motion";

export default function ProfileScreen() {
  const [clicked, setClicked] = useState(false);
  const [userData, setUserData] = useState({
    name: "Walter dos Santos",
    email: "walter@123.com",
  });

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <motion.div
      className={s.container}
      animate={{ x: clicked ? -1 : 1 }}
      initial={{ x: 100 }}
    >
      <div className={s.containerUserData}>
        <h2 className={s.h2}>Meus dados</h2>
        <div className="containerUserData">
          <div className={s.userData}>
            <p className={s.userDataItems}>Nome:</p>
            <p className={s.userDataItems}>{userData.name}</p>
          </div>
          <div className={s.userData}>
            <p className={s.userDataItems}>E-mail:</p>
            <p className={s.userDataItems}>{userData.email}</p>
          </div>
        </div>
        <button className={s.changeDataButton} onClick={handleClick}>
          Alterar dados
        </button>
      </div>
      <motion.div
        animate={{ x: clicked ? 1 : -100 }}
        initial={{ x: -100 }}
        className={s.containerChangeData}
        style={{ display: clicked ? "flex" : "none" }}
      >
        <h2 className={s.h2}>Altere seus dados</h2>
        <form className={s.changeDataForm}>
          <p className={s.userDataItems}>Nome:</p>
          <input type="text" className={s.inputData} required />
          <p className={s.userDataItems}>E-mail:</p>
          <input type="email" className={s.inputData} required />
          <p className={s.userDataItems}>Nova senha:</p>
          <input type="password" className={s.inputData} required />
          <p className={s.userDataItems}>Confirmar senha:</p>
          <input type="password" className={s.inputData} required />
        </form>
        <input type="submit" value="Alterar" className={s.changeDataInput} />
      </motion.div>
    </motion.div>
  );
}
