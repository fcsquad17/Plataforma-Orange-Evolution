import { useState } from "react";
import s from "/src/components/ProfileScreen/ProfileScreen.module.css";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import { putUser } from "../../services/Api";

export default function ProfileScreen({ user, handleReload }) {
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [userBody, setUserBody] = useState({
    nome: user.NOME_COMPLETO,
    email: user.EMAIL,
    senha: "",
    admin: 0,
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setUserBody({ ...userBody, [key]: value });
  };

  const handleChangePass = (target) => {
    const value = target.value;
    setPassword(value);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (userBody.senha !== password) {
      setError(true);
      return false;
    }

    await putUser(user.ID, userBody);

    setClicked(false);

    handleReload();
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
            <p className={s.userDataItems}>{user.NOME_COMPLETO}</p>
          </div>
          <div className={s.userData}>
            <p className={s.userDataItems}>E-mail:</p>
            <p className={s.userDataItems}>{user.EMAIL}</p>
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
        <form className={s.changeDataForm} onSubmit={handleOnSubmit}>
          <TextField
            id="filled-basic"
            label="Nome Completo"
            variant="filled"
            className={s.inputData}
            required
            sx={{ backgroundColor: "white" }}
            type={"text"}
            defaultValue={user.NOME_COMPLETO}
            onChange={({ target }) => handleChange(target, "nome")}
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className={s.inputData}
            required
            sx={{ backgroundColor: "white" }}
            type={"email"}
            defaultValue={user.EMAIL}
            onChange={({ target }) => handleChange(target, "email")}
          />
          <TextField
            id="filled-basic"
            label="Nova Senha"
            variant="filled"
            className={s.inputData}
            required
            sx={{ backgroundColor: "white" }}
            type={"password"}
            onChange={({ target }) => handleChange(target, "senha")}
            error={error}
          />
          <TextField
            id="filled-basic"
            label="Confirmar senha"
            variant="filled"
            className={s.inputData}
            required
            sx={{ backgroundColor: "white" }}
            type={"password"}
            onChange={({ target }) => handleChangePass(target)}
            error={error}
          />
          <input type="submit" value="Alterar" className={s.changeDataInput} />
        </form>
      </motion.div>
    </motion.div>
  );
}
