import Header from "../../components/Header/Header";
import AllModules from "../../components/AllModules/AllModules";
import Footer from "../../components/Footer/Footer";

export default function TrailsContent() {
  return (
    <div>
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Entrar", "Criar Conta"]}
      />
      <AllModules />
      <Footer />
    </div>
  );
}
