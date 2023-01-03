import { ImageAbout } from '../components/ImageAbout/ImageAbout';
import  CV  from '../assets/CV/JuanArgibay.pdf'
import { GitHubLogo } from '../components/Logos/GitHubLogo/GitHubLogo';
import { LinkedinLogo } from '../components/Logos/LinkedinLogo/LinkedinLogo';

export const About = () => {


  return (
    <div className="about-container">
    <section id="about">
          <div className='nameContact'>
            <h1>¡Hola! Soy, <br/> <span className='iam'>Juan Argibay</span> <br/> Web Developer.</h1>
            <ul>
              <li>
                <a title='Perfil de Linkedin' href='https://www.linkedin.com/in/juan-m-argibay-gonzalez/'><LinkedinLogo/></a>
              </li>
              <li>
                <a title='Repositorio de GitHub' href='https://github.com/JuanArgibay'><GitHubLogo/></a>
              </li>
            </ul>
          </div>
          <div className='description'>
          <p>Soy una persona curiosa, activa y con ganas de aprender. Apasionado de las nuevas tecnologías, herramientas y formas para hacer mejor las cosas. Disfruto trabajando en equipo intercambiando ideas y resolviendo problemas. </p>
            <div className='descriptionLinks'>
              <a href={CV} title='descargar CV' className='cv fill' download>Descargar CV</a>
              -
              <a type='email' title='Contáctame' href='mailto:jmargibayg@gmail.com' className='mail fill'>Contáctame</a>
            </div>
          </div>
          <ImageAbout/>
        </section>
        </div>
  )
}
