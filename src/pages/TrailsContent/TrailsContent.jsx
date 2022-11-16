import Header from "../../components/Header/Header";
import AllModules from "../../components/AllModules/AllModules";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import Lottie from "react-lottie";
import * as loadingAnim from "../../assets/loading-animation.json";
import { useNavigate } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnim.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function TrailsContent() {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const navigate = useNavigate();

  const id = localStorage.getItem("userId");

  const handleReq = async () => {
    if (id) {
      const response = await getUsersParams(id).catch((err) => {
        if (err.response.data.error) {
          navigate("/401");
          localStorage.clear();
        }
      });
      setUser(response.usuario);
    } else {
      localStorage.clear();
      navigate("/login");
    }
  };

  useEffect(() => {
    handleReq();
  }, []);

  useEffect(() => {
    if (user.ID) setHasLoaded(true);
  }, [user]);

  return (
    <div>
      <ScrollUpButton showBelow={50} />
      {user.ADMIN > 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Painel de Controle", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[`/`, `/trails/`, `/eventstab/`]}
          urlSettings={[`/admin/`, "/"]}
        />
      )}
      {user.ADMIN === 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Meu dados", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[`/`, `/trails/`, `/eventstab/`]}
          urlSettings={[`/profile/`, "/"]}
        />
      )}
      {!hasLoaded && (
        <Lottie options={defaultOptions} height={600} width={600} />
      )}
      {hasLoaded && <AllModules />}

      <Footer />
    </div>
  );
}
