import AdminControlScreen from "../../components/AdminControlScreen/AdminControlScreen";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function AdminControl() {
  return (
    <>
      <Header
        pages={["Inicio", "Eventos"]}
        settings={["Entrar", "Criar Conta"]}
        urlPage={["/", "/eventstab"]}
        urlSettings={["/login", "/signup"]}
      />
      <AdminControlScreen />
      <Footer />
    </>
  );
}
