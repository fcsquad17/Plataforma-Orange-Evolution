import React from "react";
import Header from "/src/components/Header/Header";
import LoginScreen from "/src/components/LoginScreen/LoginScreen";
import Footer from "/src/components/Footer/Footer";

export default function Login() {
  return (
    <div>
      <Header pages={["Inicio", "Trilhas"]} settings={["Entrar"]} />
      <LoginScreen />
      <Footer />
    </div>
  );
}
