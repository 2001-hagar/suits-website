import "./ProductDetails.css"
import suitimage from "../../DSC05329-1365x2048.jpg"
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";




const ProductDetails = ({setCartItems,children,setShowModal,isShow,handlElementShow,setShow,count,setCount}) => {

    const handleNegClickQty=()=>{
        if(count>1){
        setCount((count)=>count-1)}
    }

    const handlePosClickQty=()=>{
        setCount((count)=>count+1)
    }

    const handleChange=(event)=>{
        setCount(Number(event))
    }



  return (
    <div className="ProductDetails-container">
        <img className="suitimage" src={suitimage} />
        <div className="product-details">
        <IoIosCloseCircle
            style={{
            "color": "black",
            "transform":"scale(2)",
            "position":"absolute",
            "top":"10px",
            "right":"10px",
            "cursor":"pointer",
            }} onClick={()=>{setShowModal(false);setShow(false)}}/>


            <div className="childern-details" style={{"padding":"1rem","fontSize":"0.9rem"}}>
            {children}
            </div>
            <div className="chooseSize">
                <label htmlFor="size" className="size-label"><span>CHOOSE SIZE</span>
                <div className="drop-down-container">   
                 <button id="size" className="btn-dropdown-size" onClick={handlElementShow} >
                <div  className='size-text' >Choose an option</div>
                <RiArrowDropDownLine style={{"color":"#454545","transform":"scale(2)","cursor":"pointer","marginLeft":"0.5rem"}}/>
                </button>
                <div className={isShow?"sizes-options":"sizes-options hidden"} ></div>
            </div>           
                </label>
            </div>
            <div className="qty">
            <div style={{"display":"flex","alignItems":"center","gap":"0.2rem"}}>
            <div className="neg-qty" onClick={handleNegClickQty}>-</div>
                <button className="num-qty">
                    <input style={{"margin":"0.4rem","width":"2rem","border":"none","outline":"none","backgroundColor":"transparent","textAlign":"center"}} value={count} onChange={(e)=>{handleChange(e.target.value)}}></input>
                </button>
                <div className="pos-qty" onClick={handlePosClickQty}>+</div>
            </div>
                <button className="btn-add-to-cart" onClick={() =>{setCartItems(count)}}>ADD TO CART</button>
            </div>
           
        </div>

    </div>
  )
}

export default ProductDetails