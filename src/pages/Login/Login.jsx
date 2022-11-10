import React from "react";
import Header from "/src/components/Header/Header";
import LoginScreen from "/src/components/LoginScreen/LoginScreen";
import Footer from "/src/components/Footer/Footer";

export default function Login() {
  return (
    <div>
      <Header
        pages={["Inicio"]}
        settings={["Entrar", "Criar Conta"]}
        url={['/', '/', '/login', '/signup']}
      />
      <LoginScreen />
      <Footer />
    </div>
  );
}
