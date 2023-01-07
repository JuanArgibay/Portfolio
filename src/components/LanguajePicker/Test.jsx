import './test.css'
import { useContext, useRef } from "react"
import { DarkContext } from "../../context/darkMode"

const { setLang } = useContext(DarkContext);
const es = useRef();
const eng = useRef();

const handlerClickToggle = (e) => {
    const selected = e.target;
    if (selected === es.current) {
        es.current.className = 'selected';
        eng.current.className = 'unSelected'
    } else {
        eng.current.className = 'selected';
        es.current.className = 'unSelected'
    }
    setLang(selected.id)
}

export const Test = () => {
    return (
        <div onClick={handlerClickToggle} className="switch">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
            <label htmlFor="language-toggle"></label>
            <span ref={es} id="Es" className="on">BN</span>
            <span ref={eng} id="Eng" className="off">EN</span>
        </div>
    )
}


