import React from 'react'
import TrailsCard from '/src/components/TrailsCard/TrailsCard'
import { Button } from '@mui/material';

// Import style (s = style)
import s from "./IntroOnboarding.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00C19C'
    },
    secondary: {
      main: '#6F36C9'
    }
  }
});

export const IntroOnboarding = () => {
  return (
    <div className={s.container}>
        <div>
            <div className={s.intro}>
                <div className={s.divLogo}>
                    <img src='/src/assets/oeLogo.svg' alt='Orange Evolution' className={s.oeLogo}></img>
                </div>
                <div className={s.divEvolua}>
                    <h1 className={s.h1}>Evolua a sua carreira na tecnologia</h1>
                    <span className={s.span}>Explore conhecimentos que estão transformando 
                        indústrias, negócios e vidas através de</span><strong className={s.strong}> trilhas
                        gratuitas em Desenvolvimento, UX/UI Design e QA!</strong>
                    <div className={s.introButton}>
                        <ThemeProvider theme={theme}>
                            <Button variant='contained' color='secondary' size='large' >QUERO COMEÇAR!</Button>
                        </ThemeProvider >
                    </div>
                </div>
            </div>
            <div className={s.cp}>
                <div className={s.cf}>
                        <TrailsCard />
                </div>
            </div>
        </div> 
    </div>
  )
}