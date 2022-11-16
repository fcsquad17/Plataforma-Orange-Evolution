import React, { useEffect } from "react";
import Header from "/src/components/Header/Header";
import LoginScreen from "/src/components/LoginScreen/LoginScreen";
import Footer from "/src/components/Footer/Footer";

export default function Login() {
  useEffect(() => {});
  return (
    <div>
      <Header
        pages={["Inicio", "Eventos"]}
        settings={["Entrar", "Criar Conta"]}
        urlPage={["/", "/eventstab"]}
        urlSettings={["/login", "/signup"]}
      />
      <LoginScreen />
      <Footer />
    </div>
  );
}
