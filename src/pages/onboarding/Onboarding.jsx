import Header from '/src/components/Header/Header'
import TrailsCard from '/src/components/TrailsCard/TrailsCard'
import Footer from '/src/components/Footer/Footer'

// Import style (s = style)
import s from "./Onboarding.module.css";

function Onboarding() {
    return (
      <>
        <div>
          <Header /> 
        </div>
        <div className={s.divLogo}>
            <img src='/src/assets/oeLogo.png' alt='Orange Evolution' className={s.oeLogo}></img>
        </div>
        <div className={s.divEvolua}>
          <h1 className={s.h1}>Evolua a sua carreira na tecnologia</h1>
          <span className={s.span}>Explore conhecimentos que estão transformando 
              indústrias, negócios e vidas através de</span><strong className={s.strong}> trilhas
              gratuitas em Desenvolvimento, UX/UI Design e QA!
          </strong>
        </div>
       <div>
          <TrailsCard />
        </div> 
        <div>
          <Footer />
        </div>  
      </>
    )
  }
  
  export default Onboarding