import "./Base.css"
import  NaveBase from "../nav-base/NaveBase.jsx"

const Base = () => {
  return (
    <div className='base'>
        <div className="base-header-container">
        <a href="/">
        <div className="logo-main">
        <img src="https://www.orangesquarecairo.com/wp-content/uploads/2021/03/logoff.png" alt="logo" className="main-logo" />
        </div>
        </a>
        <div className="nav-base">
        <NaveBase />
        </div>
        </div>
        <div className="base-text"  ><h1 style={{"margin":"0px","fontSize":"6em"}}><strong>Suits</strong></h1><p style={{"fontSize":"1.1rem"}}>Fashion Fade, Style is Eternal</p></div>

        
    </div>

  )
}

export default Base