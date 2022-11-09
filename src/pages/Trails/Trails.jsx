import Header from "../../components/Header/Header";
import TrailsScreen from "../../components/TrailsScreen/TrailsScreen";
import Footer from "../../components/Footer/Footer";

export default function Trails() {
  return (
    <div>
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Meu dados", "Sair"]}
        userName={""}
      />
      <TrailsScreen />
      <Footer />
    </div>
  );
}
