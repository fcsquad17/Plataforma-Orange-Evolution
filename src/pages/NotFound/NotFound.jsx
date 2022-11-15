import React from "react";
import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";

export default function Login() {
  return (
    <div>
      <Header
        pages={["Inicio", "Eventos"]}
        settings={["Entrar", "Criar Conta"]}
        urlPage={["/", "/eventstab"]}
        urlSettings={["/login", "/signup"]}
      />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          color: "#00C19C",
          padding: "15px",
          margin: "250px auto",
          maxWidth: "1000px",
        }}
      >
        Sentimos muito, não foi possível completar a sua requisição =(
      </h1>
      <Footer />
    </div>
  );
}
