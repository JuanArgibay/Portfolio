import { useContext } from "react"
import { DarkContext } from "../../context/darkMode"
import { DarkMode } from "../DarkMode/DarkMode"
import { ProgressBar } from "../ProgressBar/ProgressBar"

export const Header = () => {

  const { darkMode } = useContext(DarkContext)
  
    const logoText = '< J.A />'
  return (
    <header className={darkMode}>
        <p className='logoText'>{logoText}</p>
      <menu>
        <nav className='menuNav'>
          <li>
            <a className={darkMode} href='#about'>Sobre mi</a>
          </li>
          <li>
            <a className={darkMode} href='#skills'>Habilidades</a>
          </li>
          <li>
            <a className={darkMode} href='#projects'>Proyectos</a>
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
