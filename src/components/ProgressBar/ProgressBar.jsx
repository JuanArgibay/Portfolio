import { useEffect, useRef } from "react";
import './progressBar.css'
import { onScrollPercentage } from "../../helpers";

export const ProgressBar = () => {

    const bar = useRef();

    const onScroll = () => {
        bar.current.style.width = `${onScrollPercentage()}%`;
    }
    useEffect(()=> {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
  return (
    <div className="progress_wrapper">
        <div ref={bar} className="progress_bar"></div>
    </div>
  )
}
