import { BsFacebook, BsInstagram  } from "react-icons/bs";


import './Header.css'

const Header = () => {
    return (
        <div className="nav-container">
        <div className="nav-icons">
            <a href=" ">
            <BsFacebook  className='social-icon' style={{'color': '#ffffff' }}/>
            </a>
            <a href=" ">
            <BsInstagram  className='social-icon' style={{'color': '#ffffff' }}/>
            </a>
           </div>
           <ul className="nav-links">
                <li className='links'>
                <a href="#" className='links'>PROFILE</a>
                </li>
                <li className='links'>
                <a href="#" className='links'>ABOUT US</a>
                </li>
                <li className='links' >
                <a href="#" className='links'>CONTACT US</a>
                </li>
            </ul>
           </div>
    );
};

export default Header;