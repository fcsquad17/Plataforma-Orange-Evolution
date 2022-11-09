import ProfileScreen from "../../components/ProfileScreen/ProfileScreen";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Profile() {
  return (
    <div>
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Meu dados", "Sair"]}
        userName={""}
      />
      <ProfileScreen />
      <Footer />
    </div>
  );
}
