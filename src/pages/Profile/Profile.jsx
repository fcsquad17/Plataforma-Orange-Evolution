import ProfileScreen from "../../components/ProfileScreen/ProfileScreen";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
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

export default function Profile() {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  const idUser = localStorage.getItem("userId");

  const handleReq = async () => {
    if (idUser) {
      const response = await getUsersParams(idUser).catch((err) => {
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

  const handleReload = async () => {
    setReload(true);
  };

  useEffect(() => {
    handleReq();
    if (reload) setReload(false);
  }, [reload]);

  useEffect(() => {
    if (user.ID) setHasLoaded(true);
  }, [user]);
  return (
    <div>
      <Header
        pages={["Inicio", "Trilhas", "Eventos"]}
        settings={["Meu dados", "Sair"]}
        userName={user.NOME_COMPLETO}
        urlPage={[`/`, `/trails/`, `/eventstab/`]}
        urlSettings={[`/profile/`, "/"]}
      />

      {!hasLoaded && (
        <Lottie options={defaultOptions} height={600} width={600} />
      )}

      {hasLoaded && <ProfileScreen user={user} handleReload={handleReload} />}

      <Footer />
    </div>
  );
}
