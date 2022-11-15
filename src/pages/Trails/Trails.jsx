import Header from "../../components/Header/Header";
import TrailsScreen from "../../components/TrailsScreen/TrailsScreen";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getUsersParams } from "../../services/UsersApi";
import { useNavigate } from "react-router-dom";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import Lottie from "react-lottie";
import * as loadingAnim from "../../assets/loading-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnim.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Trails() {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const id = localStorage.getItem("idUser");
  const navigate = useNavigate();

  const handleReq = async () => {
    if (id) {
      const response = await getUsersParams(id);
      setUser(response.usuario);
    } else {
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
    <>
      <ScrollUpButton showBelow={50} />
      {user.ADMIN > 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Painel de Controle", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[
            `/`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/eventstab/`,
          ]}
          urlSettings={[`/admin/${localStorage.getItem("idUser")}`, "/"]}
        />
      )}
      {user.ADMIN === 0 && (
        <Header
          pages={["Inicio", "Trilhas", "Eventos"]}
          settings={["Meu dados", "Sair"]}
          userName={user.NOME_COMPLETO}
          urlPage={[
            `/`,
            `/trails/${localStorage.getItem("idUser")}`,
            `/eventstab/`,
          ]}
          urlSettings={[`/profile/${localStorage.getItem("idUser")}`, "/"]}
        />
      )}

      {!hasLoaded && (
        <Lottie options={defaultOptions} height={600} width={600} />
      )}
      {hasLoaded && <TrailsScreen user={user} />}
      <Footer />
    </>
  );
}
