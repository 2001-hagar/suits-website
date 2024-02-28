import { SocialIcon } from 'react-social-icons'
import './Header.css'

const Header = () => {
    return (
        <div className="nav-container">
        <div className="nav-icons">
           <SocialIcon network='facebook' className='social-icon '  url='https://www.facebook.com/ORANGESQUARECAIRO/'/>
           <SocialIcon network='instagram' className='social-icon ' url='https://www.instagram.com/orangesquarecairo/'/>
           </div>
           <ul className="nav-links">
                <li>
                <a href="#">PROFILE</a>
                </li>
                <li>
                <a href="#">ABOUT US</a>
                </li>
                <li>
                <a href="#">CONTACT US</a>
                </li>
            </ul>
           </div>
    );
};

export default Header;