import './imageSkills.css'
import imageSkills from '../../assets/ImagesSvg/imageSkills.svg'
import imageSkillsDark from '../../assets/ImagesSvg/imageSkillsDark.svg'
import { useContext, useEffect, useState } from 'react'
import { onScrollPercentage } from "../../helpers";
import { DarkContext } from '../../context/darkMode';

export const ImageSkills = () => {

const [scroll, setScroll] = useState(0);
const [controller, setController] = useState(false)
const {darkMode} = useContext(DarkContext);

  const onScroll = () => {
    setScroll(onScrollPercentage())
}

useEffect(()=> {
  window.addEventListener("scroll", onScroll);
  scroll > 66 && setController(true);
  return () => window.removeEventListener("scroll", onScroll);
  
}, )

  return (
    <>
      {scroll >= 66 || controller === true? 
        darkMode === 'light'? 
          <img className='imageSkills'alt='imageSkills' src={imageSkills}></img> 
          : 
          <img className='imageSkills'alt='imageSkills' src={imageSkillsDark}></img> 
        : null}
    </>
  )
}

