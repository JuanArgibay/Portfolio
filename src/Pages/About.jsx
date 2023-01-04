import { ImageAbout } from '../components/ImageAbout/ImageAbout';
import { ImageAboutDark } from '../components/ImageAbout/ImageAboutDark';
import  CV  from '../assets/CV/JuanArgibay.pdf'
import { GitHubLogo } from '../components/Logos/GitHubLogo/GitHubLogo';
import { LinkedinLogo } from '../components/Logos/LinkedinLogo/LinkedinLogo';
import { useContext } from 'react';
import { DarkContext } from '../context/darkMode';
import { GitHubLogoDark } from '../components/Logos/GitHubLogo/GitHubLogoDark';
import { LinkedinLogoDark } from '../components/Logos/LinkedinLogo/LinkedinLogoDark';

export const About = () => {

  const { darkMode } = useContext(DarkContext);

  return (
    <div className="about-container">
    <section id="about">
          <div className='nameContact'>
            <h1>¡Hola! Soy, <br/> <span id='iam' className={darkMode}>Juan Argibay</span> <br/> Web Developer.</h1>
            <ul>
              <li>
                <a title='Perfil de Linkedin' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/juan-m-argibay-gonzalez/'>{darkMode === 'light'? <LinkedinLogo/> : <LinkedinLogoDark/>}</a>
              </li>
              <li>
                <a title='Repositorio de GitHub' target="_blank" rel='noreferrer' href='https://github.com/JuanArgibay'>{darkMode === 'light'? <GitHubLogo/> : <GitHubLogoDark/>}</a>
              </li>
            </ul>
          </div>
          <div className='description'>
          <p>Soy una persona curiosa, activa y con ganas de aprender. Apasionado de las nuevas tecnologías, herramientas y formas para hacer mejor las cosas. Disfruto trabajando en equipo intercambiando ideas y resolviendo problemas. </p>
            <div className='descriptionLinks-container'>
              <div className='descriptionLinks'>
                <a href={CV} title='Descargar CV' className={darkMode} download>Descargar CV</a>
                -
                <a type='email' title='Contáctame' href='mailto:jmargibayg@gmail.com' className={darkMode}>Contáctame</a>
              </div>
            </div>
          </div>
          {darkMode === 'light'? <ImageAbout/> : <ImageAboutDark/>}
        </section>
        </div>
  )
}
