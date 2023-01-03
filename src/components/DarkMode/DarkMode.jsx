import './darkMode.css'
import { useContext, useState } from 'react'
import { ToggleIconDarkFalse } from '../Icons/ToggleIconDarkFalse';
import { ToggleiconDarkTrue } from '../Icons/ToggleiconDarkTrue';
import { DarkContext } from '../../context/darkMode';

export const DarkMode = () => {

  const {darkMode, setDarkMode} = useContext(DarkContext);

  const [mode, setMode] = useState(false);
  const handleClick = () => {
    darkMode === 'light'? setDarkMode('dark') : setDarkMode('light');
    setMode(!mode);
  }

  return (
    <button 
      className='darkMode'
      onClick={handleClick}
      title='Dark Mode'
      >
        {mode === false ? <ToggleIconDarkFalse/> : <ToggleiconDarkTrue/> }
    </button>
  )
}
