import Header from "../../components/Header/Header";
import TrailsScreen from "../../components/TrailsScreen/TrailsScreen";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getUsersParams } from "../../services/Api";

export default function Trails() {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleReq = async () => {
    const response = await getUsersParams(1);
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
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Meu dados", "Sair"]}
        userName={user.NOME_COMPLETO}
        url={['/', `/trails/${localStorage.getItem('idUser')}`, '/login', '/signup']}
      />
      {hasLoaded && <TrailsScreen user={user} />}

      <Footer />
    </div>
  );
}
