import AdminControlScreen from "../../components/AdminControlScreen/AdminControlScreen";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function AdminControl() {
  return (
    <>
      <Header
        pages={["Inicio"]}
        settings={["Entrar", "Criar Conta"]}
        url={["/", "/", "/login", "/signup"]}
      />
      <AdminControlScreen />
      <Footer />
    </>
  );
}
