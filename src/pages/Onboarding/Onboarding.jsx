import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import { OnboardingScreen } from "../../components/OnboardingScreen/OnboardingScreen";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

function Onboarding() {
  const [user, setUser] = useState({});

  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    if (idUser && typeof idUser === "number") {
      const response = await getUsersParams(idUser);
      setUser(response.usuario);
    }
  };

  useEffect(() => {
    handleReq();
  }, []);

  return (
    <div>
      <ScrollUpButton showBelow={50} />
      {idUser && user.ADMIN === 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Meu dados", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[
            `/`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/eventstab/${localStorage.getItem("idUser")}`,
          ]}
          urlSettings={[`/profile/${localStorage.getItem("idUser")}`, "/login"]}
        />
      )}
      {idUser && user.ADMIN > 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Painel de Controle", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[
            `/`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/eventstab/`,
          ]}
          urlSettings={[`/admin/${localStorage.getItem("idUser")}`, "/login"]}
        />
      )}
      {!idUser && (
        <Header
          pages={["Inicio", "Eventos"]}
          settings={["Entrar", "Criar Conta"]}
          urlPage={["/", "/eventstab"]}
          urlSettings={["/login", "/signup"]}
        />
      )}

      <OnboardingScreen />
      <Footer />
    </div>
  );
}

export default Onboarding;
