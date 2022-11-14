import Header from "../../components/Header/Header";
import AllModules from "../../components/AllModules/AllModules";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

export default function TrailsContent() {
  const [user, setUser] = useState({});

  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    const response = await getUsersParams(idUser);
    setUser(response.usuario);
  };

  useEffect(() => {
    handleReq();
  }, []);
  return (
    <div>
      <ScrollUpButton showBelow={50} />
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
      <AllModules />

      <Footer />
    </div>
  );
}
