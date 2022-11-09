import Header from "/src/components/Header/Header";
import SignUpScreen from "/src/components/SignUpScreen/SignUpScreen";
import Footer from "/src/components/Footer/Footer";

export default function SignUp() {
  return (
    <div>
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Entrar", "Criar Conta"]}
      />
      <SignUpScreen />
      <Footer />
    </div>
  );
}
