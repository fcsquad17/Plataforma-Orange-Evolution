import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import { OnboardingScreen } from "../../components/OnboardingScreen/OnboardingScreen";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

function Onboarding() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    if (idUser) {
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
      {id && idUser && user.ADMIN === 0 && (
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
      )}
      {id && idUser && user.ADMIN > 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Painel de Controle", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[
            `/${localStorage.getItem("idUser")}`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/eventstab/${localStorage.getItem("idUser")}`,
          ]}
          urlSettings={[`/admin/${localStorage.getItem("idUser")}`, "/"]}
        />
      )}
      {!id && (
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
