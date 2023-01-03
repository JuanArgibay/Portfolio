import './imageSkills.css'
import imageSkills from '../../assets/ImagesSvg/imageSkills.svg'
import { useEffect, useState } from 'react'
import { onScrollPercentage } from "../../helpers";

export const ImageSkills = () => {

const [scroll, setScroll] = useState(0);
const [controller, setController] = useState(false)

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
      {scroll >= 66 || controller === true? <img className='imageSkills'alt='imageSkills' src={imageSkills}></img> : null}
    </>
  )
}

