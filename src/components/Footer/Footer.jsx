// Imports style (s = style)
import s from './Footer.module.css'

//  Imports MUI
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.containerLogos}>
        <img src="/src/assets/ojLogo.png" alt="Orange Juice" className={s.ojLogo}/>
        <img src="/src/assets/oeLogo.svg" alt="Orange Evolution" className={s.oeLogo}/>
      </div>
      <div className={s.containerSocialMedia}>
        <a href="https://www.instagram.com/orangejuicetech/?theme=dark" target='_blank'><InstagramIcon /></a>
        <a href="https://www.facebook.com/orangejuicefc" target='_blank'><FacebookIcon /></a>
        <a href="https://twitter.com/orangejuicefc" target='_blank'><TwitterIcon /></a>
        <a href="https://www.linkedin.com/company/orangejuicetech/" target='_blank'><LinkedInIcon /></a>
      </div>
      <p>© 2022 Orange Evolution: All Rights Reserved</p>
    </div>
  )
}

export default Footer