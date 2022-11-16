import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import { OnboardingScreen } from "../../components/OnboardingScreen/OnboardingScreen";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const [user, setUser] = useState({});

  const idUser = localStorage.getItem("userId");
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  const handleReq = async () => {
    if (idUser && !token) {
      localStorage.clear();
      return navigate("/401");
    } else if (!idUser && token) {
      localStorage.clear();
      return navigate("/401");
    }

    if (idUser && token) {
      const response = await getUsersParams(idUser).catch((err) => {
        if (err.response.data.error) {
          localStorage.clear();
          return navigate("/401");
        }
      });
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
          urlPage={[`/`, `/trails/`, `/eventstab/`]}
          urlSettings={[`/profile/`, "/login"]}
        />
      )}
      {idUser && user.ADMIN > 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Painel de Controle", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[`/`, `/trails/`, `/eventstab/`]}
          urlSettings={[`/admin/`, "/login"]}
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
