import './header.css';
import { useContext, useEffect, useState } from "react"
import { DarkContext } from "../../context/darkMode"
import { DarkMode } from "../DarkMode/DarkMode"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { MenuNavIcon } from "../Icons/MenuNavIcon"
import { MenuNavIconDark } from "../Icons/MenuNavIconDark"
import { LanguajePicker } from '../LanguajePicker/LanguajePicker';


export const Header = () => {

  const { darkMode, lang } = useContext(DarkContext);

  const [width, setWidth] = useState(window.screen.width);

  const updateWindowWidht = () => {
    const newWidht = window.innerWidth;
    setWidth(newWidht);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidht);
  }, [])

  const logoText = '< J.A />'
  return (
    <header className={darkMode}>
      <p className='logoText'>{logoText}</p>
      {width >= 750 ?
        (<menu>
          <nav className='menuNav'>
            <li>
              <a className={darkMode} href='#about'>{lang === 'Es' ? 'Sobre mi' : 'About me'}</a>
            </li>
            <li>
              <a className={darkMode} href='#skills'>{lang === 'Es' ? 'Habilidades' : 'Skills'}</a>
            </li>
            <li>
              <a className={darkMode} href='#projects'>{lang === 'Es' ? 'Proyectos' : 'Projects'}</a>
            </li>
          </nav>
        </menu>
        ) : (
          <div className="dropdown">
            <button id="dropbtn" className={darkMode}>
              {darkMode === 'light' ? <MenuNavIcon /> : <MenuNavIconDark />}
            </button>
            <div className="dropdown-content">
              <a className={darkMode} href='#about'>{lang === 'Es' ? 'Sobre mi' : 'About me'}</a>
              <a className={darkMode} href='#skills'>{lang === 'Es' ? 'Habilidades' : 'Skills'}</a>
              <a className={darkMode} href='#projects'>{lang === 'Es' ? 'Proyectos' : 'Projects'}</a>
            </div>
          </div>
        )
      }
      <div className='switches'>
        <LanguajePicker />
        <DarkMode />
      </div>
      <ProgressBar />
    </header>
  )
}
