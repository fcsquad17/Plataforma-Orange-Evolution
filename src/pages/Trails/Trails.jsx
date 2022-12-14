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

  const token = localStorage.getItem("userToken");
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleReq = async () => {
    if (id && token) {
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
    <>
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
      {hasLoaded && <TrailsScreen user={user} />}
      <Footer />
    </>
  );
}
