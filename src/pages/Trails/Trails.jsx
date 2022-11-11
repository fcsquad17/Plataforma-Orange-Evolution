import Header from "../../components/Header/Header";
import TrailsScreen from "../../components/TrailsScreen/TrailsScreen";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getUsersParams } from "../../services/Api";
import { useParams } from "react-router-dom";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

export default function Trails() {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();

  const handleReq = async () => {
    const response = await getUsersParams(id);
    setUser(response.usuario);
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

      {hasLoaded && <TrailsScreen user={user} />}

      <Footer />
    </div>
  );
}
