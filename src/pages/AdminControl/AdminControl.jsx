import AdminControlScreen from "../../components/AdminControlScreen/AdminControlScreen";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/UsersApi";
import { useNavigate } from "react-router-dom";

export default function AdminControl() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const idUser = localStorage.getItem("userId");

  const handleReq = async () => {
    if (!idUser) {
      return navigate("/login");
    }

    if (idUser) {
      const response = await getUsersParams(idUser).catch((err) => {
        if (err.response.data.error) {
          localStorage.clear();
          return navigate("/login");
        }
      });
      setUser(response ? response.usuario : navigate("/login"));
    } else if (response.usuario.ADMIN < 1) {
      localStorage.clear();
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
        urlPage={["/", `/trails/`, `/eventstab/`]}
        urlSettings={[`/admin/`, "/"]}
      />
      <AdminControlScreen />
      <Footer />
    </>
  );
}
