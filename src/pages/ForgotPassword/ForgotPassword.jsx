import React from "react";
import Header from "/src/components/Header/Header";
import ForgotPasswordScreen from "/src/components/ForgotPasswordScreen/ForgotPasswordScreen";
import Footer from "/src/components/Footer/Footer";

export default function ForgotPassword() {
  return (
    <div>
      <Header
        pages={["Inicio"]}
        settings={["Entrar", "Criar Conta"]}
        url={['/', '/', '/login', '/signup']}
      />
      <ForgotPasswordScreen />
      <Footer />
    </div>
  );
}
