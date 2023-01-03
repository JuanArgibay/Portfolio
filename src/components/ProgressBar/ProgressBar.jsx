import { useContext, useEffect, useRef } from "react";
import './progressBar.css'
import { onScrollPercentage } from "../../helpers";
import { DarkContext } from "../../context/darkMode";

export const ProgressBar = () => {

    const bar = useRef();
    const {darkMode} = useContext(DarkContext);

    const onScroll = () => {
        bar.current.style.width = `${onScrollPercentage()}%`;
    }
    useEffect(()=> {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
  return (
    <div className="progress_wrapper">
        <div ref={bar} className={darkMode} id="progress_bar"></div>
    </div>
  )
}
