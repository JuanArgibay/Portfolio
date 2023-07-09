import './languajePicker.css'
import { useContext, useEffect, useRef } from "react"
import { DarkContext } from "../../context/darkMode"

export const LanguajePicker = () => {

    const { setLang, darkMode } = useContext(DarkContext);
    const es = useRef();
    const eng = useRef();
    const langContainer = useRef();

    const handlerClickToggle = (e) => {
        const selected = e.target;
        if (selected === es.current) {
            es.current.className = 'selected';
            eng.current.className = 'unSelected';
        } else {
            eng.current.className = 'selected';
            es.current.className = 'unSelected';
        }
        setLang(selected.id)
    }

    useEffect(() => {
        darkMode === 'light' ?
            langContainer.current.style.borderColor = '#66f2d5'
            :
            langContainer.current.style.borderColor = '#ff770f'
    }, [darkMode])

    return (
        <div ref={langContainer} id='languaje-container'>
            <div onClick={handlerClickToggle} className="languaje">
                <div className={darkMode}>
                    <div ref={es} id="Es" >ES</div>
                </div>
                <div className={darkMode}>
                    <div className='selected' ref={eng} id="Eng">EN</div>
                </div>
            </div>
        </div>

    )
}
