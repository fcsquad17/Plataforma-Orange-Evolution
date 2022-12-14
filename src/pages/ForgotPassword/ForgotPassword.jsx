import React from "react";
import Header from "/src/components/Header/Header";
import ForgotPasswordScreen from "/src/components/ForgotPasswordScreen/ForgotPasswordScreen";
import Footer from "/src/components/Footer/Footer";
import { useEffect } from "react";

export default function ForgotPassword() {
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
      <ForgotPasswordScreen />
      <Footer />
    </div>
  );
}
