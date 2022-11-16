import AdminControlScreen from "../../components/AdminControlScreen/AdminControlScreen";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import { useNavigate } from "react-router-dom";

export default function AdminControl() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    if (idUser && typeof idUser === "number") {
      const response = await getUsersParams(idUser);
      setUser(response.usuario);
    } else if (response.usuario.ADMIN < 1) {
      localStorage.clear();
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleReq();
  }, []);

  return (
    <>
      <Header
        pages={["Inicio", "Trilhas", "Eventos"]}
        settings={["Painel de Controle", "Sair"]}
        userName={user.NOME_COMPLETO}
        urlPage={[
          "/",
          `/trails/${localStorage.getItem("idUser")}`,
          `/eventstab/`,
        ]}
        urlSettings={[`/admin/${localStorage.getItem("idUser")}`, "/"]}
      />
      <AdminControlScreen />
      <Footer />
    </>
  );
}
