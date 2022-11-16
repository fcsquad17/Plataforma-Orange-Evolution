import Header from "/src/components/Header/Header";
import SignUpScreen from "/src/components/SignUpScreen/SignUpScreen";
import Footer from "/src/components/Footer/Footer";

export default function SignUp() {
  const id = localStorage.getItem("userId");

  useEffect(() => {
    if (id) {
      localStorage.clear();
    }
  });
  return (
    <div>
      <Header
        pages={["Inicio", "Eventos"]}
        settings={["Entrar", "Criar Conta"]}
        urlPage={["/", "/eventstab"]}
        urlSettings={["/login", "/signup"]}
      />
      <SignUpScreen />
      <Footer />
    </div>
  );
}
