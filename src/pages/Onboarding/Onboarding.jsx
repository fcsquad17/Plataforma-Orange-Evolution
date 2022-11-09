import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import { IntroOnboarding } from "../../components/IntroOnboarding/IntroOnboarding";

function Onboarding() {
  return (
    <div>
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Meu dados", "Sair"]}
        userName={""}
      />
      <IntroOnboarding />
      <Footer />
    </div>
  );
}

export default Onboarding;
