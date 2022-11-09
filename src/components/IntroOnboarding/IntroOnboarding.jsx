import React from 'react'

// MUI Imports

import TrailsCard from '/src/components/TrailsCard/TrailsCard'
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import style (s = style)
import s from "./IntroOnboarding.module.css";

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

          <div className={s.wp}>
            <div className={s.whatis}>
                <h1 className={s.h1s}>O QUE É O ORANGE EVOLUTION?</h1>
                <h2 className={s.h2s}>Se você:</h2>
            </div>
            <div className={s.whatisDetails}>
              <div>
                <img src="/src/assets/whatis.png" alt="O que é o Orange Evolution" className={s.whatisImg}/>
              </div>
              <div className={s.whatisText}>
                  <ul>
                    <li>Procura conteúdo tech de <strong>qualidade</strong> e <strong>gratuito</strong></li>
                    <li>Está <strong>migrando de carreira</strong> para a área tech</li>
                    <li>Sente que com o <strong>apoio de uma comunidade</strong> vitaminada irá se desenvolver mais</li>
                    <li>Quer se preparar de forma mais assertiva para <strong>processos seletivos</strong></li>
                    <li>É <strong>protagonista</strong> da sua história e formação</li>
                  </ul> 
              </div>
            </div>
          </div>


          <div className={s.cp}>
              <div className={s.cf}>
                      <TrailsCard />
              </div>
          </div>
        
    </div>
  )
}