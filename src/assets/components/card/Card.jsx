import { useState } from "react";
import "./Card.css";
import { BsSuitHeart } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";


/**
 * @param {Object} props
 * @param {boolean} props.darkBgCard
 * @param {string} props.link
 */


const Card = ({darkBgCard,url,setShowModal }) => {

const [isActive,setActive]=useState(false)
const [isHovered,setHovered]=useState(false)

    const handleClick =() =>{
        setActive((current) => !current)
    }

    const handleHoverOn =() =>{
        setHovered(true);
    }
    const handleHoverOut = () =>{
        setHovered(false);

    }


  return (
    <div className={darkBgCard?"card-cover darkBgCard":"card-cover "} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut}>
  <BsSuitHeart id="heart-logo" className={isActive?"BsSuitHeart-active":isHovered?"BsSuitHeart":""} onClick={handleClick}
    style={{
      "color": "transparent",
      "transform":"scale(1.2)",
       }}
  />

  <div className="card-footer">
    <div className="quick-view" onClick={()=>{setShowModal(true)}}>QUICK VIEW</div>
    <div className="card-text">
<h2 style={{"margin":"0px"}}>
    BLAZER-CHECKED GREEN-NOTCH LAPEL
</h2>
< GiShoppingBag className="cardiShoppingBag"  style={{'color': '#ffffff',"height":"20px","width":"20px","position":"absolute","bottom":"5px","right":"5px"}}/>
</div>
  </div>


</div>
  )
}

export default Card