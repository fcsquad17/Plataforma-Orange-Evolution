import ProfileScreen from "../../components/ProfileScreen/ProfileScreen";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/Api";

export default function Profile() {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [reload, setReload] = useState(false);

  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    const response = await getUsersParams(idUser);
    setUser(response.usuario);
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
      {hasLoaded && <ProfileScreen user={user} handleReload={handleReload} />}

      <Footer />
    </div>
  );
}
