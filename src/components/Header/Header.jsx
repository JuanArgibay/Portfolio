import { DarkMode } from "../DarkMode/DarkMode"
import { ProgressBar } from "../ProgressBar/ProgressBar"

export const Header = () => {
  
    const logoText = '< J.A />'
  return (
    <header >
        <p className='logoText'>{logoText}</p>
      <menu>
        <nav className='menuNav'>
          <li>
            <a href='#about'>Sobre mi</a>
          </li>
          <li>
            <a href='#skills'>Habilidades</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
        </nav>
      </menu>
      <div>
        <DarkMode/>
      </div>
      <ProgressBar/>
      </header>
  )
}
