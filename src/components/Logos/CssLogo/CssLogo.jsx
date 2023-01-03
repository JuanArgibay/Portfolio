import { useContext } from "react"
import { DarkContext } from "../../../context/darkMode"

export const CssLogo = () => {

  const {darkMode} = useContext(DarkContext);
  let style = ''

  darkMode === 'light'? style = '#000000' : style = '#FFF';

  return (
    <svg width="22.7" height="32" viewBox="0 0 256 361"><path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z"/><path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z"/><path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z"/>
    <path fill={style} d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0Zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0Zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0Z"/><path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z"/></svg>
  )
}
