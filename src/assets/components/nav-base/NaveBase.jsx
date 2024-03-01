import { FiSearch } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import {  useState } from 'react'
import "./NaveBase.css";
import { GiClothes } from "react-icons/gi";

const NaveBase = ({cartItems}) => {
    const [isShowWear,setShowWear]=useState(false);
    const [isShow,setShow]=useState(false);
     console.log({cartItems})
    const handleHoverOn = event =>{
        document.getElementById(event.currentTarget.id).classList.add("active");
        if (event.currentTarget.id === "second-li-nav-base" )
            {setShowWear(true)}
        else if(event.currentTarget.id==="my-cart")
            {setShow(true)}
        
        }
        


    const handleHoverOut = event =>{
        document.getElementById(event.currentTarget.id).classList.remove("active");
        setShow(false);
        setShowWear(false)


    }


  return (
    <div className="nav-base">
        <ul className="nav-base-links">
                <li  id ="firsr-li-nav-base"  onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut}>
                <a href="#" className='links-base'>MADE-TO-MEASURE</a>
                </li>
                <li  id ="second-li-nav-base"  onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut} >
                <a href="#" className='links-base' >READY-TO-WEAR</a>
                <RiArrowDropDownLine style={{"color":"#454545","transform":"scale(3)","cursor":"pointer","marginLeft":"0.5rem"}}/>
                <div className={isShowWear?"wear-options ":"wear-options hidden"} >
                    <ul>
                    <li>
                <a href="#" >Tuxedo</a>
                </li>
                <li  >
                <a href="#">Shirts</a>
                </li><li   >
                <a href="#" >Pants</a>
                </li>
                    </ul>
                </div>
                </li>

                <li  id ="third-li-nav-base"  onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut}>
                <a href="#" className='links-base'>SHOES</a>
                </li>
                <li  id ="fourth-li-nav-base"  onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut}>
                <a href="#" className='links-base'>ACCESSORIES</a>
                </li>
                </ul>

                <div className="mobile-nave">
                <IoMenu  style={{"color":"white","transform":"scale(2)","cursor":"pointer"}}/>
                </div>


       < RxDividerVertical style={{'color': '#454545',"transform":"scale(2)"}}/>
       < FiSearch style={{'color': '#ffffff' ,"cursor":"pointer"}}/>
       < BsHeart style={{'color': '#ffffff',"cursor":"pointer"}}/>
       <div id="my-cart" style={{"position":"relative"}} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut}>
       < GiShoppingBag style={{'color': '#ffffff',"cursor":"pointer"}}></GiShoppingBag>
       <div className="num-cart">        
       {cartItems}
       </div>
       <div className={isShow?"cart-options ":"cart-options hidden"} >
        <span  
            className={cartItems?"hidden":""}
            style={{"position":"absolute","top":"20%","right":"35%","color":"white"}}>NO ITEMS</span>
       <GiClothes 
       className={cartItems?"":"hidden"}

    style={{
      "color": "#ffffff","transform":"scale(3)","position":"absolute","top":"40px","left":"50px"
    }}
  />

       <h6  className={cartItems?"":"hidden"}
        style={{"color":"white","position":"absolute","top":"15px","right":"20px"}}>
        {cartItems}
       </h6>
       </div>
       </div>

    </div>
  )
};

export default NaveBase