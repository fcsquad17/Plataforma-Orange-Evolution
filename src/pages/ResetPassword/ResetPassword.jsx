import React from "react";
import Header from "/src/components/Header/Header.jsx";
import ResetPasswordScreen from "/src/components/ResetPasswordScreen/ResetPasswordScreen.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import { useEffect } from "react";

export const ResetPassword = () => {
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
      <ResetPasswordScreen />
      <Footer />
    </div>
  );
};
