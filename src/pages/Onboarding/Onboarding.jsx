import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import { OnboardingScreen } from "../../components/OnboardingScreen/OnboardingScreen";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/Api";
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
      {id && idUser && (
        <Header
          pages={["Inicio", "Trilhas"]}
          settings={["Meu dados", "Sair"]}
          userName={user.NOME_COMPLETO}
          url={[
            `/${localStorage.getItem("idUser")}`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/profile/${localStorage.getItem("idUser")}`,
            "/",
          ]}
        />
      )}
      {!id && (
        <Header
          pages={["Inicio"]}
          settings={["Entrar", "Cadastrar"]}
          userName={""}
          url={["/", "/", "/login", "/signup"]}
        />
      )}

      <OnboardingScreen />
      <Footer />
    </div>
  );
}

export default Onboarding;
