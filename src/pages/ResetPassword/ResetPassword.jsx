import React from 'react'
import Header from '/src/components/Header/Header.jsx'
import ResetPasswordScreen from '/src/components/ResetPasswordScreen/ResetPasswordScreen.jsx'
import Footer from '/src/components/Footer/Footer.jsx'

export const ResetPassword = () => {
  return (
    <div>
        <Header
            pages={["Inicio"]}
            settings={["Entrar", "Criar Conta"]}
            url={['/', '/', '/login', '/signup']}
      />
        <ResetPasswordScreen />
        <Footer />
    </div>
  )
}
