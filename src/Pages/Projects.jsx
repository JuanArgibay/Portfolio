import parejas from '../assets/imagesPng/parejas.png'
import poke from '../assets/imagesPng/poke.png'
import instagram from '../assets/imagesPng/instgram.png'
import { useContext } from 'react'
import { DarkContext } from '../context/darkMode'
export const Projects = () => {

  const {darkMode} = useContext(DarkContext);
  
  return (
    <section id="projects" className={darkMode}>
        <div className='projectsPageContainer'>
          <h2 className='titlePage'>Proyectos</h2>
          <div className='projects-container'>
             <article className='projectCard' >
                <div className='card-content'> 
                <img src={parejas} alt='Parejas'></img>
                  <ul className='projectSkills'>
                    <li className='html'>
                      HTML
                    </li>
                    <li className='css'>
                      CSS
                    </li>
                    <li className='js'>
                      JavaScript
                    </li>
                  </ul>
                  <h3>Descubre la pareja</h3>
                    <div className='projectLinksContainer'>
                      <a className={darkMode} href='https://github.com/JuanArgibay/Encuentra-la-pareja'>Github</a>
                      <a className={darkMode} href='https://encuentralapareja.vercel.app/'>Website</a>
                    </div>
                  <details>
                    <summary></summary>
                    <p className='projectDescription'>Juego de memoria para los más pequeños de la casa. Agiliza tu mente con esta app y encuentra las ocho parejas.</p>
                  </details>
                </div>
            </article>
            <article className='projectCard'>
              <div className='card-content'>
                <img  src={instagram} alt='instagram'></img>
                  <ul className='projectSkills'>
                    <li className='react'>
                      React.js
                    </li>
                    <li className='express'>
                      Express
                    </li>
                    <li className='node'>
                      Node.js
                    </li>
                  </ul>
                  <h3>Instagram Pro</h3>
                  <div >
                    <div className='projectLinksContainer'>
                      <a className={darkMode} href='https://github.com/JuanArgibay/Instagram-Pro-FrontEnd'>Github</a>
                      <a className={darkMode} href='https://www.youtube.com/watch?v=cF04GUGUXTo&t=1s'>Website</a>
                    </div>
                    <details>
                      <summary></summary>
                      <p className='projectDescription'>Aplicación inspirada en Instagram. Comparte tus momentos, sube, comenta y dale like a cuantas fotos quieras.</p>
                  </details>
                </div>
              </div>
            </article>
            <article className='projectCard'>
              <div className='card-content'>
                <img src={poke} alt='pokeApi'></img>
                  <ul className='projectSkills'>
                    <li className='html'>
                      HTML
                    </li>
                    <li className='css'>
                      CSS
                    </li>
                    <li className='react'>
                      React.js
                    </li>
                  </ul>
                  <h3>Poke App</h3>
                  <div>
                    <div className='projectLinksContainer'>
                      <a className={darkMode} href='https://github.com/JuanArgibay/PokeApp'>Github</a>
                      <a className={darkMode} href='https://poke-app-cyny.vercel.app/'>Website</a>
                    </div>
                    <details>
                    <summary></summary>
                    <p className='projectDescription'>App para todos los amantes de Pokémon, podrás encontrarlos a todos junto con sus características y habilidades de una forma muy visual.</p>
                  </details>
                </div>
              </div>
              
            </article>
          </div>
        </div>
    </section>
  )
}
