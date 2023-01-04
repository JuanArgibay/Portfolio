import { useContext, useEffect, useState } from "react"
import { DarkContext } from "../../context/darkMode"
import { DarkMode } from "../DarkMode/DarkMode"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { MenuNavIcon } from "../Icons/MenuNavIcon"
import { MenuNavIconDark } from "../Icons/MenuNavIconDark"

export const Header = () => {

  const { darkMode } = useContext(DarkContext);

  const [width, setWidth] = useState(window.screen.width);

  const updateWindowWidht = () => {
    const newWidht = window.innerWidth;
    setWidth(newWidht);
  }

  useEffect(()=> {
    window.addEventListener("resize", updateWindowWidht);
    },[])

    const logoText = '< J.A />'
  return (
      <header className={darkMode}>
          <p className='logoText'>{logoText}</p>
          {width >= 750? 
            (<menu>
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
          ) : (
            <div className="dropdown">
              <button id="dropbtn" className={darkMode}>
                {darkMode === 'light'? <MenuNavIcon/> : <MenuNavIconDark/>}
              </button>
              <div className="dropdown-content">
                <a className={darkMode} href='#about'>Sobre mi</a>
                <a className={darkMode} href='#skills'>Habilidades</a>
                <a className={darkMode} href='#projects'>Proyectos</a>
            </div>
          </div>
          ) 
        }
        
        <div>
          <DarkMode/>
        </div>
        <ProgressBar/>
        </header>
  )
}
