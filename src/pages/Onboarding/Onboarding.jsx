import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import { OnboardingScreen } from "../../components/OnboardingScreen/OnboardingScreen";

function Onboarding() {
  return (
    <div>
      <Header
        pages={["Inicio"]}
        settings={["Entrar", "Cadastrar"]}
        userName={""}
        url={['/', '/', '/login', '/signup']}
      />
      <OnboardingScreen />
      <Footer />
    </div>
  );
}

export default Onboarding;
