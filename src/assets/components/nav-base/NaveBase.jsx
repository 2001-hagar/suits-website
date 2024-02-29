import { FiSearch } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./NaveBase.css"

const NaveBase = () => {
    const handlescrollon = event =>{
        document.getElementById(event.currentTarget.id).classList.add("active");

    }
    const handlescrollout = event =>{
        document.getElementById(event.currentTarget.id).classList.remove("active");

    }


  return (
    <div className="nav-base">
        <ul className="nav-base-links">
                <li  id ="firsr-li-nav-base"  onMouseEnter={handlescrollon} onMouseLeave={handlescrollout}>
                <a href="#" className='links-base'>MADE-TO-MEASURE</a>
                </li>
                <li  id ="second-li-nav-base"  onMouseEnter={handlescrollon} onMouseLeave={handlescrollout}>
                <a href="#" className='links-base' >READY-TO-WEAR</a>
                <RiArrowDropDownLine style={{"color":"#454545","transform":"scale(3)","cursor":"pointer","marginLeft":"0.5rem"}}/>
                </li>
                <li  id ="third-li-nav-base"  onMouseEnter={handlescrollon} onMouseLeave={handlescrollout}>
                <a href="#" className='links-base'>SHOES</a>
                </li>
                <li  id ="fourth-li-nav-base"  onMouseEnter={handlescrollon} onMouseLeave={handlescrollout}>
                <a href="#" className='links-base'>ACCESSORIES</a>
                </li>

        </ul>

       < RxDividerVertical style={{'color': '#454545',"transform":"scale(2)"}}/>
       < FiSearch style={{'color': '#ffffff' ,"cursor":"pointer"}}/>
       < BsHeart style={{'color': '#ffffff',"cursor":"pointer"}}/>
       < GiShoppingBag style={{'color': '#ffffff',"cursor":"pointer"}}/>
    </div>
  )
};

export default NaveBase