import "./Base.css"
import NaveBase from "../nav-base/NaveBase"

const Base = ({cartItems}) => {
  return (
    <div className='base'>
        <div className="base-header-container">
        <a href="/">
        <div className="logo-main">
        <img src="https://www.orangesquarecairo.com/wp-content/uploads/2021/03/logoff.png" alt="logo" className="main-logo" />
        </div>
        </a>
        <div className="nav-base">
        <NaveBase cartItems={cartItems}/>
        </div>
        </div>
        <div className="base-text"  >
            <h1  className="text-animation-base" style={{"margin":"0px","fontSize":"6em"}}>
                <strong>
                    Suits
                </strong>
                </h1>
                <p style={{"margin":"0px"}}>
                Fashion Fade, Style is Eternal
                </p>
                    </div>

        
    </div>

  )
}

export default Base